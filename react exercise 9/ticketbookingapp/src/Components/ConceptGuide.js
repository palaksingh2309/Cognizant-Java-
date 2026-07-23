import React from 'react';

function ConceptGuide() {
  return (
    <div className="concepts-list">
      
      <div className="concept-card">
        <h5>1. Conditional Rendering in React</h5>
        <p>
          In React, you can conditionally render different JSX trees based on the current state or props of a component. This is similar to how conditional logic works in standard JavaScript. Common approaches include:
        </p>
        <ul>
          <li>
            <strong>If/Else Statements:</strong> Used outside of JSX returns to choose which component tree to generate.
          </li>
          <li>
            <strong>Ternary Operator (<code>condition ? true : false</code>):</strong> Ideal for inline conditional switches inside JSX return statements.
          </li>
          <li>
            <strong>Logical AND Operator (<code>condition && expression</code>):</strong> Used when you want to render an element only when a condition resolves to true, and nothing otherwise.
          </li>
        </ul>
      </div>

      <div className="concept-card">
        <h5>2. Element Variables</h5>
        <p>
          You can use JavaScript variables to store JSX elements. This helps you conditionally render part of a page while keeping the main return statement clean. In this app, we declare a variable <code>viewComponent</code> and assign it different components depending on whether the user is logged in:
        </p>
        <pre>
          <code>{`let viewComponent;
if (isLoggedIn) {
  viewComponent = <UserPortal />;
} else {
  viewComponent = <GuestPortal />;
}`}</code>
        </pre>
        <p>
          We then insert the variable directly into our JSX return expression: <code>{`{viewComponent}`}</code>.
        </p>
      </div>

      <div className="concept-card">
        <h5>3. Preventing Component Rendering</h5>
        <p>
          In some scenarios, you want a component to hide itself completely. To do this, you can return <strong><code>null</code></strong> instead of a JSX node from the component's render function. Returning <code>null</code> does not affect the component's lifecycle hooks.
        </p>
        <p>
          For instance, our <code>&lt;BookingForm /&gt;</code> is placed directly in the page tree, but it stays completely hidden and prevents rendering if no flight is selected:
        </p>
        <pre>
          <code>{`function BookingForm({ flight }) {
  if (!flight) {
    return null; // Prevents component from rendering
  }
  return <form>...</form>;
}`}</code>
        </pre>
      </div>

    </div>
  );
}

export default ConceptGuide;
