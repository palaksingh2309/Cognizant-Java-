import React, { Component } from 'react';
import Post from './Post';

// Child component that can throw an error during render
class PostItem extends Component {
  render() {
    const { post, shouldCrash } = this.props;
    if (shouldCrash) {
      throw new Error(`Simulated rendering error for post ID: ${post.id}`);
    }
    return (
      <div className="post-item" style={{
        padding: '1.5rem',
        marginBottom: '1.5rem',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#61dafb' }}>{post.title}</h3>
        <p style={{ margin: 0, color: '#e0e0e0', lineHeight: '1.6' }}>{post.body}</p>
      </div>
    );
  }
}

class Posts extends Component {
  constructor(props) {
    super(props);
    // Initialize the component state with a list of Post in the constructor
    this.state = {
      posts: [
        new Post(1, "Initial Constructor Post 1", "This post is initialized in the state inside the constructor."),
        new Post(2, "Initial Constructor Post 2", "Another post initialized in constructor state to verify it works prior to componentDidMount API call.")
      ],
      hasError: false,
      errorMessage: "",
      crashPostId: null
    };

    this.loadPosts = this.loadPosts.bind(this);
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Map the fetched data to Post class instances (first 10 items for viewability)
        const postsList = data.slice(0, 10).map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postsList });
      })
      .catch(error => {
        console.error("Fetch API error:", error);
      });
  }

  componentDidMount() {
    // Implement the componentDidMount() hook to make calls to loadPosts()
    console.log("componentDidMount() hook triggered. Fetching posts...");
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    // Define a componentDidCatch() method which will display error as alert messages
    console.log("componentDidCatch() hook triggered by child component error.");
    alert(`Error Boundary caught an error in a child component:\n${error.message}`);
    this.setState({
      hasError: true,
      errorMessage: error.message
    });
  }

  simulateError = () => {
    if (this.state.posts && this.state.posts.length > 0) {
      // Set the first post's ID as the target to crash the rendering
      this.setState({ crashPostId: this.state.posts[0].id });
    } else {
      alert("No posts available to simulate an error.");
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      errorMessage: "",
      crashPostId: null
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          borderRadius: '16px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h2 style={{ color: '#ef4444' }}>Something went wrong!</h2>
          <p style={{ color: '#fca5a5' }}>Error Details: {this.state.errorMessage}</p>
          <button 
            onClick={this.resetError}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              background: '#ef4444',
              color: '#ffffff',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '1rem',
              boxShadow: '0 4px 6px rgba(239, 68, 68, 0.2)'
            }}
          >
            Reset Component
          </button>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '1rem'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', background: 'linear-gradient(to right, #61dafb, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Blog Posts App
          </h1>
          <div>
            <button
              onClick={this.simulateError}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                border: '1px solid #f43f5e',
                background: 'rgba(244, 63, 94, 0.1)',
                color: '#f43f5e',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginRight: '10px'
              }}
              onMouseEnter={(e) => { e.target.style.background = '#f43f5e'; e.target.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(244, 63, 94, 0.1)'; e.target.style.color = '#f43f5e'; }}
            >
              Simulate Render Error
            </button>
            <button
              onClick={this.loadPosts}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                border: '1px solid #61dafb',
                background: 'rgba(97, 218, 251, 0.1)',
                color: '#61dafb',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.target.style.background = '#61dafb'; e.target.style.color = '#20232a'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(97, 218, 251, 0.1)'; e.target.style.color = '#61dafb'; }}
            >
              Refresh API Data
            </button>
          </div>
        </div>

        <div className="posts-container">
          {this.state.posts.map(post => (
            <PostItem
              key={post.id}
              post={post}
              shouldCrash={this.state.crashPostId === post.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
