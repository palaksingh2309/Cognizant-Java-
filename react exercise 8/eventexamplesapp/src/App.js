import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  const [greetingMessage, setGreetingMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [syntheticMessage, setSyntheticMessage] = useState('');
  const [eventDetails, setEventDetails] = useState(null);

  // 1. Counter Handlers (Increase button invokes multiple methods)
  const incrementValue = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    setGreetingMessage("Hello! Counter has been increased successfully.");
  };

  // Multiple methods invocation handler
  const handleIncreaseClick = () => {
    incrementValue();
    sayHello();
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    setGreetingMessage("Counter decremented.");
  };

  // 2. Parameterized Greet Handler
  const handleWelcome = (arg) => {
    setWelcomeMessage(`Success: Invoked function with argument: "${arg}"`);
  };

  // 3. Synthetic Event Handler
  const handleSyntheticEvent = (e) => {
    setSyntheticMessage("I was clicked");
    setEventDetails({
      type: e.type,
      target: e.target.nodeName,
      clientX: e.clientX,
      clientY: e.clientY,
      nativeEvent: e.nativeEvent.constructor.name
    });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-badge">React Exercise 8</div>
        <h1>React Events & Conversion Sandbox</h1>
        <p>Explore React events, SyntheticEvent attributes, state manipulation, and currency logic.</p>
      </header>

      <div className="dashboard-grid">
        
        {/* Left Column: Interactive Examples */}
        <section className="app-demo-section">
          
          <h2 className="section-title">Interactive Event Playground</h2>

          {/* Section 1: Counter Demos */}
          <div className="demo-card">
            <h4>🔢 1. Multiple Method Event (Counter)</h4>
            <p className="card-description">
              The "Increase" button invokes multiple methods: one to increment the state, and one to trigger a hello notification.
            </p>
            <div className="counter-display">
              Counter Value: <span className="counter-number">{count}</span>
            </div>
            <div className="button-group">
              <button className="btn btn-primary" onClick={handleIncreaseClick}>
                Increase (Multiple Methods)
              </button>
              <button className="btn btn-secondary" onClick={handleDecrement}>
                Decrement
              </button>
            </div>
            {greetingMessage && (
              <div className="status-message info animate-fade-in">
                📢 {greetingMessage}
              </div>
            )}
          </div>

          {/* Section 2: Parameterized Welcome Demos */}
          <div className="demo-card">
            <h4>👋 2. Parameterized Handler Event</h4>
            <p className="card-description">
              Invokes a greeting handler, passing the string argument <code>"welcome"</code>.
            </p>
            <div className="button-group">
              <button className="btn btn-accent" onClick={() => handleWelcome('welcome')}>
                Say Welcome
              </button>
            </div>
            {welcomeMessage && (
              <div className="status-message success animate-fade-in">
                ✨ {welcomeMessage}
              </div>
            )}
          </div>

          {/* Section 3: Synthetic Event Demo */}
          <div className="demo-card">
            <h4>⚡ 3. Synthetic Event Details</h4>
            <p className="card-description">
              Triggers a click event, displaying "I was clicked" along with properties captured from React's cross-browser <code>SyntheticEvent</code> wrapper.
            </p>
            <div className="button-group">
              <button className="btn btn-outline" onClick={handleSyntheticEvent}>
                Trigger Click Event
              </button>
            </div>
            
            {syntheticMessage && (
              <div className="synthetic-result-box animate-fade-in">
                <p className="alert-text">💬 <strong>{syntheticMessage}</strong></p>
                {eventDetails && (
                  <div className="event-specs">
                    <p><strong>Event Object Diagnostics:</strong></p>
                    <ul>
                      <li><code>event.type</code>: {eventDetails.type}</li>
                      <li><code>event.target.nodeName</code>: {eventDetails.target}</li>
                      <li><code>event.clientX</code>: {eventDetails.clientX}px</li>
                      <li><code>event.clientY</code>: {eventDetails.clientY}px</li>
                      <li><code>Native Wrapper</code>: {eventDetails.nativeEvent}</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section 4: Currency Converter */}
          <CurrencyConvertor />

        </section>

        {/* Right Column: Educational Material */}
        <section className="learning-guide-section">
          
          <h2 className="section-title">Lab Objectives & Concepts</h2>

          <div className="concepts-list">
            
            <div className="concept-card">
              <h5>1. React Events</h5>
              <p>
                React events are system behaviors triggered by user inputs (like clicks, keypresses, or form submissions). They behave similarly to traditional DOM events, but they are built directly into React components. You specify an event listener using JSX attributes rather than HTML attributes.
              </p>
            </div>

            <div className="concept-card">
              <h5>2. Event Handlers</h5>
              <p>
                An <strong>Event Handler</strong> is a JavaScript function designed to execute when a specific event occurs. In React:
              </p>
              <ul>
                <li>Handlers are passed as functions, not as strings (e.g. <code>onClick={'{handleClick}'}</code> instead of <code>onClick="handleClick()"</code>).</li>
                <li>To pass arguments, you wrap the handler in an arrow function (e.g. <code>onClick={'{() => handleWelcome("welcome")}'}</code>).</li>
                <li>Multiple methods can be invoked by calling them sequentially in a wrapping method.</li>
              </ul>
            </div>

            <div className="concept-card">
              <h5>3. What is a Synthetic Event?</h5>
              <p>
                React uses a cross-browser wrapper around the browser’s native event system called <strong>SyntheticEvent</strong>. It implements the standard W3C event interface so you get the same API across different browsers (Chrome, Safari, Firefox). React pool-manages these events for performance, ensuring standard behaviors like <code>e.preventDefault()</code> and <code>e.stopPropagation()</code> work consistently everywhere.
              </p>
            </div>

            <div className="concept-card">
              <h5>4. React Event Naming Convention</h5>
              <p>
                React events are named using <strong>camelCase</strong> rather than all-lowercase. For example:
              </p>
              <ul>
                <li>HTML <code>onclick</code> becomes React <code>onClick</code></li>
                <li>HTML <code>onsubmit</code> becomes React <code>onSubmit</code></li>
                <li>HTML <code>onchange</code> becomes React <code>onChange</code></li>
                <li>HTML <code>onkeydown</code> becomes React <code>onKeyDown</code></li>
              </ul>
            </div>

            <div className="concept-card">
              <h5>5. Using the 'this' Keyword in Event Handlers</h5>
              <p>
                In React Class components, class methods are not bound by default. If you reference a method as <code>this.handleClick</code> without binding it inside the constructor or using class property arrow functions, <code>this</code> will evaluate to <code>undefined</code> when the method is invoked. 
              </p>
              <pre>
                <code>{`// In Class Constructor:
this.handleClick = this.handleClick.bind(this);

// Or using ES6 class fields:
handleClick = (e) => {
  console.log(this.state);
}`}</code>
              </pre>
              <p>
                In functional components (like this sandbox), we use React Hooks (<code>useState</code>) and inline arrow functions, which naturally bind <code>this</code> lexical scopes, eliminating manual binding boilerplate.
              </p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}

export default App;
