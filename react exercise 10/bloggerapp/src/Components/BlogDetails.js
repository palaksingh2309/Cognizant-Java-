import React, { useState } from 'react';

const blogsData = [
  {
    id: 'blog-201',
    title: 'Introducing React 19: Core Features & Upgrades',
    author: 'Alex Carter',
    date: 'July 15, 2026',
    views: '12.8K views',
    summary: 'A deep dive into React 19, detailing compiler integrations, form Actions hook workflows, Server Components transitions, and automatic resource optimization.'
  },
  {
    id: 'blog-202',
    title: 'Mastering JavaScript Closures and Scopes',
    author: 'Sarah Jenkins',
    date: 'June 28, 2026',
    views: '8.4K views',
    summary: 'Understanding closures is fundamental to writing clean JavaScript. We trace runtime environments, execution contexts, and lexical binding memory allocations.'
  },
  {
    id: 'blog-203',
    title: 'CSS Grid vs Flexbox: Deciding Layout Models',
    author: 'Marcus Vance',
    date: 'May 10, 2026',
    views: '24.1K views',
    summary: 'Should you use Flexbox or Grid? We compare one-dimensional flows with two-dimensional cells, establishing exact design patterns for modern web apps.'
  },
  {
    id: 'blog-204',
    title: 'Optimizing Build Tools for Production React',
    author: 'Emma Watson',
    date: 'March 14, 2026',
    views: '6.2K views',
    summary: 'Explore Vite, Webpack, and Rollup build pipeline settings. Learn chunk splitting, lazy loading, and asset minifications to lower bundle transfer sizes.'
  }
];

function BlogDetails() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on search query
  const filteredBlogs = blogsData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    blog.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="details-container animate-fade-in">
      <div className="sub-header">
        <h3>📝 Tech Blog Articles</h3>
        <p>A compilation of recent technical blogs. Use the filter below to query specific articles.</p>
      </div>

      {/* Search Input */}
      <div className="search-bar-wrapper">
        <input 
          type="text" 
          placeholder="🔍 Search articles (e.g. React, CSS)..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
            Reset
          </button>
        )}
      </div>

      {/* CONDITIONAL RENDERING: Ternary Operator (condition ? element : element) */}
      {filteredBlogs.length > 0 ? (
        <div className="blog-posts-list">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-item-card">
              <div className="blog-item-header">
                <span className="blog-date">📅 {blog.date}</span>
                <span className="blog-views">👁️ {blog.views}</span>
              </div>
              <h4>{blog.title}</h4>
              <p className="blog-summary">{blog.summary}</p>
              <div className="blog-footer">
                <span className="blog-author">Written by: <strong>{blog.author}</strong></span>
                <a href="#read" onClick={(e) => e.preventDefault()} className="read-more-link">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results-card animate-fade-in">
          <span className="warning-icon">⚠️</span>
          <h4>No Matching Blog Posts</h4>
          <p>We couldn't find any articles matching your search query: "{searchQuery}". Try using other keywords.</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
