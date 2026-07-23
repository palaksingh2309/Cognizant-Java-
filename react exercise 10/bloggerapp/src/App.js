import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import ConceptGuide from './Components/ConceptGuide';

function App() {
  const [activeTab, setActiveTab] = useState('books');

  // CONDITIONAL RENDERING: Switch/Case Statement
  // We use this function to dynamically resolve which component to mount
  const renderTabContent = () => {
    switch (activeTab) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return null; // Prevents rendering
    }
  };

  return (
    <div className="app-container">
      {/* Brand Header */}
      <header className="app-header">
        <div className="header-badge">React Exercise 10</div>
        <h1>Blogger Hub App</h1>
        <p>A unified portal displaying Book catalogs, Blog articles, and Course lists using React state maps.</p>
        
        {/* Navigation Tabs */}
        <div className="navigation-tabs">
          <button 
            className={`tab-btn ${activeTab === 'books' ? 'active' : ''}`}
            onClick={() => setActiveTab('books')}
          >
            📚 Books Catalog
          </button>
          <button 
            className={`tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            📝 Technical Blogs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            🎓 Training Courses
          </button>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="dashboard-grid">
        
        {/* Left Column: Dynamic Component Rendering */}
        <main className="portal-main-area">
          <h2 className="section-title">
            {activeTab === 'books' && "Featured Books Selection"}
            {activeTab === 'blogs' && "Recent Blog Publications"}
            {activeTab === 'courses' && "Available Engineering Courses"}
          </h2>
          <div className="tab-viewport">
            {renderTabContent()}
          </div>
        </main>

        {/* Right Column: Educational Concept Panel */}
        <section className="learning-guide-section">
          <h2 className="section-title">Lab Objectives & Concepts</h2>
          <ConceptGuide />
        </section>

      </div>
    </div>
  );
}

export default App;
