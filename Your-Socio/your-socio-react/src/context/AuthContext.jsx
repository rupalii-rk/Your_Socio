import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const isConfigured = !!auth;

  // Mock implementations for when Firebase is not configured
  const mockUser = {
    uid: 'mock-user-123',
    email: 'mock@example.com',
    displayName: 'Mock User'
  };

  function signup(email, password, fullName) {
    if (!isConfigured) {
      setUser({ ...mockUser, email, displayName: fullName });
      return Promise.resolve();
    }
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      if (fullName) {
        return updateProfile(userCredential.user, {
          displayName: fullName
        });
      }
    });
  }

  function login(email, password) {
    if (!isConfigured) {
      setUser({ ...mockUser, email });
      return Promise.resolve();
    }
    return signInWithEmailAndPassword(auth, email, password);
  }

  function loginWithGoogle() {
    if (!isConfigured) {
      setUser(mockUser);
      return Promise.resolve();
    }
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    if (!isConfigured) {
      setUser(null);
      return Promise.resolve();
    }
    return signOut(auth);
  }

  function resetPassword(email) {
    if (!isConfigured) {
      return Promise.resolve();
    }
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    if (!isConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, [isConfigured]);

  const value = {
    user,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    isConfigured
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
