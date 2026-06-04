import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isConfigured = !!auth;

  // Helper: manage mock users list in localStorage
  const MOCK_USERS_KEY = 'your_socio_mock_users';

  const getMockUsers = () => {
    try {
      const raw = localStorage.getItem(MOCK_USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };

  const saveMockUsers = (users) => {
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
  };

  useEffect(() => {
    if (!isConfigured) {
      // Mock mode fallback: check localStorage for a mock session
      const storedMockUser = localStorage.getItem('your_socio_mock_user');
      if (storedMockUser) {
        setUser(JSON.parse(storedMockUser));
      }
      setLoading(false);
      return;
    }

    // Firebase mode: subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, [isConfigured]);

  const signup = async (email, password, displayName) => {
    if (!isConfigured) {
      // Mock signup logic: persist mock users and prevent duplicate emails
      const users = getMockUsers();
      const exists = users.find((u) => u.email === email.toLowerCase());
      if (exists) {
        const err = new Error('Email already in use');
        err.code = 'auth/email-already-in-use';
        throw err;
      }

      const mockUser = {
        uid: 'mock-uid-' + Math.random().toString(36).substr(2, 9),
        email: email.toLowerCase(),
        password, // stored only for local mock purposes
        displayName: displayName || email.split('@')[0],
        photoURL: null,
        isMock: true,
      };
      users.push(mockUser);
      saveMockUsers(users);
      setUser(mockUser);
      localStorage.setItem('your_socio_mock_user', JSON.stringify(mockUser));
      return mockUser;
    }

    // Firebase signup
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    // Force user state update with displayName
    setUser({ ...userCredential.user });
    return userCredential.user;
  };

  const login = async (email, password) => {
    if (!isConfigured) {
      // Mock login logic: validate against stored mock users
      const users = getMockUsers();
      const found = users.find((u) => u.email === email.toLowerCase());
      if (!found) {
        const err = new Error('User not found');
        err.code = 'auth/user-not-found';
        throw err;
      }
      if (found.password !== password) {
        const err = new Error('Wrong password');
        err.code = 'auth/wrong-password';
        throw err;
      }
      const session = { ...found };
      delete session.password; // don't expose password in session
      setUser(session);
      localStorage.setItem('your_socio_mock_user', JSON.stringify(session));
      return session;
    }

    // Firebase login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const loginWithGoogle = async () => {
    if (!isConfigured) {
      // Mock Google login logic
      const mockUser = {
        uid: 'mock-uid-google',
        email: 'google.user@example.com',
        displayName: 'Google User',
        photoURL: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
        isMock: true,
      };
      setUser(mockUser);
      localStorage.setItem('your_socio_mock_user', JSON.stringify(mockUser));
      return mockUser;
    }

    // Firebase Google login
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  };

  const logout = async () => {
    if (!isConfigured) {
      // Mock logout
      setUser(null);
      localStorage.removeItem('your_socio_mock_user');
      return;
    }

    // Firebase logout
    await signOut(auth);
  };

  const resetPassword = async (email) => {
    if (!isConfigured) {
      // Mock reset password
      console.log(`Mock reset password email sent to: ${email}`);
      return;
    }

    // Firebase reset password
    await sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    isConfigured,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
