import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreatorCard from '../components/CreatorCard';
import { featuredCreators } from '../data/creators';
import { useAuth } from '../context/AuthContext';

export default function CreatorsPage() {
  const { user } = useAuth();
  const [genreFilter, setGenreFilter] = useState('All');
  const [engagementFilter, setEngagementFilter] = useState('All');

  // Extract unique genres
  const genres = ['All', ...new Set(featuredCreators.map(c => c.niche))];

  // Engagement thresholds
  const engagementOptions = [
    { label: 'All', value: 'All' },
    { label: '> 3%', value: 3 },
    { label: '> 4%', value: 4 },
    { label: '> 5%', value: 5 }
  ];

  const filteredCreators = featuredCreators.filter(creator => {
    const matchesGenre = genreFilter === 'All' || creator.niche === genreFilter;
    const rate = parseFloat(creator.engRate);
    const matchesEngagement = engagementFilter === 'All' || rate > parseFloat(engagementFilter);
    return matchesGenre && matchesEngagement;
  });

  return (
    <>
      <Navbar />
      <div className="creators-page">
        <div className="cp-header">
          <h1 className="section-title center">All Creators</h1>
          <p>Discover and filter top creators based on genre and engagement.</p>
          
          <div className="cp-filters">
            <div className="filter-group">
              <label>Genre</label>
              <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
                {genres.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Engagement Rate</label>
              <select value={engagementFilter} onChange={(e) => setEngagementFilter(e.target.value)}>
                {engagementOptions.map(opt => (
                  <option key={opt.label} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="cp-grid-wrap">
          {!user && (
            <div className="cp-auth-warning">
              <p>You are viewing this page as a guest. <a href="/signin">Log in</a> to view creator details clearly.</p>
            </div>
          )}
          <div className="cp-grid">
            {filteredCreators.map(creator => (
              <CreatorCard key={creator.id} {...creator} isBlurred={!user} />
            ))}
            {filteredCreators.length === 0 && (
              <p className="cp-no-results">No creators match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
