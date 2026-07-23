import React from 'react';
import officeSpaceImage from './assets/office_space.png';

function App() {
  // 1. Single Featured Office Object
  const featuredOffice = {
    name: "Skyline Premium Suites",
    rent: 75000,
    address: "45th Floor, Tower B, Downtown Metro, NY 10001",
    image: officeSpaceImage,
    description: "Experience luxury and performance with panoramic skyline views, top-tier high-speed internet, and dynamic coworking zones."
  };

  // 2. List of Office Objects to loop through
  const officesList = [
    {
      id: 1,
      name: "Co-Working Hub Alpha",
      rent: 45000,
      address: "Suite 102, Innovation Park, Tech District",
      features: "24/7 Access • High-Speed Fiber • Free Coffee"
    },
    {
      id: 2,
      name: "Summit Executive Boardrooms",
      rent: 85000,
      address: "Top Floor, Peak Tower, Financial District",
      features: "Premium Boardroom • Smart TV • Assistant Services"
    },
    {
      id: 3,
      name: "Greenfield Creative Studios",
      rent: 55000,
      address: "Building D, Eco-Parkway, Green Zone",
      features: "Creative Lighting • Soundproofing • Green Patio"
    },
    {
      id: 4,
      name: "Metropolitan Business Lounge",
      rent: 120000,
      address: "Lobby Level, Plaza Grand, Commercial Center",
      features: "VIP Lounge • Full Concierge • Catering Available"
    },
    {
      id: 5,
      name: "Urban Flex Space",
      rent: 38000,
      address: "78 Broad Street, Arts District",
      features: "Flexible Desk Setup • Event Space • Dynamic Community"
    }
  ];

  return (
    <div className="app-container">
      {/* Premium Header */}
      <header className="app-header">
        <div className="header-badge">React Exercise 7</div>
        <h1>Office Space Rental App</h1>
        <p>A high-fidelity workspace finder utilizing React JSX, inline CSS, and ES6+ standards.</p>
      </header>

      {/* Main Content Area: Split layout for App Demo & Concept Guide */}
      <div className="dashboard-grid">
        
        {/* Left Column: Interactive App Interface */}
        <section className="app-demo-section">
          <h2 className="section-title">Available Workspace Listings</h2>

          {/* Featured Office Space Card (uses attributes and object references) */}
          <div className="featured-card">
            <div className="featured-badge">Featured Space</div>
            <div className="image-container">
              <img 
                src={featuredOffice.image} 
                alt={featuredOffice.name} 
                className="office-image" 
              />
            </div>
            <div className="featured-content">
              <h3>{featuredOffice.name}</h3>
              <p className="address-text">📍 {featuredOffice.address}</p>
              <p className="description-text">{featuredOffice.description}</p>
              
              {/* Inline CSS dynamic rent style: Above 60,000 is Green, Below is Red */}
              <div className="rent-box">
                Monthly Rent: <span style={{ 
                  color: featuredOffice.rent >= 60000 ? '#10b981' : '#ef4444', 
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  textShadow: '0 0 10px rgba(16, 185, 129, 0.2)'
                }}>
                  ${featuredOffice.rent.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* List of Offices - Loop & Map */}
          <div className="listings-container">
            <h3>Additional Locations</h3>
            <div className="listings-grid">
              {officesList.map((office) => {
                // Determine rent color dynamically (Red below 60000, Green above 60000)
                const rentColor = office.rent >= 60000 ? '#10b981' : '#ef4444';
                
                return (
                  <div key={office.id} className="office-card">
                    <div className="card-header">
                      <h4>{office.name}</h4>
                    </div>
                    <div className="card-body">
                      <p className="address-text">📍 {office.address}</p>
                      <p className="features-text">✨ {office.features}</p>
                    </div>
                    <div className="card-footer">
                      <span>Monthly Rent:</span>
                      {/* Using Javascript expressions in inline CSS */}
                      <span style={{ 
                        color: rentColor, 
                        fontWeight: '700',
                        fontSize: '1.1rem' 
                      }}>
                        ${office.rent.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right Column: Educational Concept Explanations */}
        <section className="learning-guide-section">
          <h2 className="section-title">Lab Objectives & Concepts</h2>
          
          <div className="concepts-list">
            
            <div className="concept-card">
              <h5>1. What is JSX?</h5>
              <p>
                <strong>JSX</strong> (JavaScript XML) is a syntax extension to JavaScript commonly used with React. It allows us to write HTML-like elements directly within JavaScript code. Under the hood, JSX tags are compiled by build tools (like Babel) into pure JavaScript objects that represent React elements.
              </p>
            </div>

            <div className="concept-card">
              <h5>2. What is ECMAScript?</h5>
              <p>
                <strong>ECMAScript</strong> is the standardized specification that JavaScript is based on. Standardized by Ecma International in ECMA-262, it defines standard features like variables, arrow functions, classes, and modules. React applications rely heavily on modern ECMAScript specifications (specifically ES6 and onwards) like <code>const</code>, <code>let</code>, Arrow Functions, Array Destructuring, and <code>map()</code> loops.
              </p>
            </div>

            <div className="concept-card">
              <h5>3. React.createElement()</h5>
              <p>
                React elements are not actual DOM elements, but lightweight descriptions of what should appear on the screen. Before modern compilers, developers created nodes using <code>React.createElement(type, props, ...children)</code>. Today, JSX acts as a developer-friendly shorthand that is transpiled into <code>React.createElement()</code>. For example:
              </p>
              <pre>
                <code>{`// JSX Code:
<h1 className="title">Hello</h1>

// Compiled JS:
React.createElement('h1', { className: 'title' }, 'Hello');`}</code>
              </pre>
            </div>

            <div className="concept-card">
              <h5>4. Creating React Nodes with JSX</h5>
              <p>
                JSX allows us to declare element trees naturally. Attributes are named using camelCase conventions (e.g. <code>className</code> instead of <code>class</code>, <code>tabIndex</code> instead of <code>tabindex</code>). Custom React components are written with Capitalized tags (e.g. <code>&lt;App /&gt;</code>) to distinguish them from standard HTML tags.
              </p>
            </div>

            <div className="concept-card">
              <h5>5. Rendering JSX to DOM</h5>
              <p>
                To display JSX elements on a web page, we must render them into the real browser DOM. React DOM provides the root API for this. In React 18+, we use <code>ReactDOM.createRoot()</code> to target a container container in HTML (usually <code>&lt;div id="root"&gt;&lt;/div&gt;</code>) and call the <code>render()</code> method:
              </p>
              <pre>
                <code>{`const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);`}</code>
              </pre>
            </div>

            <div className="concept-card">
              <h5>6. JavaScript Expressions in JSX</h5>
              <p>
                We can embed any valid JavaScript expression (like mathematical formulas, variable interpolation, function calls, or logical conditions) inside JSX by wrapping it in curly braces <code>{`{}`}</code>. In this application, we dynamically format rent using <code>{`featuredOffice.rent.toLocaleString()`}</code> and loop through offices using <code>{`officesList.map(...)`}</code>.
              </p>
            </div>

            <div className="concept-card">
              <h5>7. Inline CSS in JSX</h5>
              <p>
                In React, inline styling is passed as a JavaScript object to the <code>style</code> attribute rather than a string. Property names are written in camelCase (e.g., <code>fontWeight</code> instead of <code>font-weight</code>).
              </p>
              <pre>
                <code>{`style={{ color: rent >= 60000 ? '#10b981' : '#ef4444' }}`}</code>
              </pre>
              <p>
                Here, the outer braces denote a JavaScript expression in JSX, and the inner braces declare a JavaScript object literal.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
