import React from 'react';

function ConceptGuide() {
  return (
    <div className="concepts-list">
      
      <div className="concept-card">
        <h5>1. Ways of Conditional Rendering</h5>
        <p>
          React supports multiple techniques to conditionally output JSX content:
        </p>
        <ul>
          <li><strong>If/Else Blocks:</strong> Outside JSX, evaluating conditions to return different trees.</li>
          <li><strong>Switch/Case Blocks:</strong> Useful for multi-route rendering, like our tab switcher in <code>App.js</code>.</li>
          <li><strong>Element Variables:</strong> Storing JSX trees in variables (demonstrated in <code>CourseDetails.js</code>).</li>
          <li><strong>Ternary Operator (<code>? :</code>):</strong> Inline dual-path switching (demonstrated in <code>BlogDetails.js</code>).</li>
          <li><strong>Logical AND (<code>&&</code>):</strong> Inline single-path toggling (demonstrated in <code>BookDetails.js</code>).</li>
          <li><strong>Returning <code>null</code>:</strong> Suppressing component outputs completely.</li>
        </ul>
      </div>

      <div className="concept-card">
        <h5>2. Rendering Multiple Components</h5>
        <p>
          You can compile collections of elements and render them inline in JSX. In React, we convert arrays of data objects into arrays of JSX components. We can render standard HTML tags (e.g., <code>&lt;div&gt;</code>) or custom components (e.g., <code>&lt;BookCard /&gt;</code>).
        </p>
      </div>

      <div className="concept-card">
        <h5>3. List Components & keys</h5>
        <p>
          When rendering lists of elements, React requires a unique <strong><code>key</code></strong> attribute (usually a string or number) on each element.
        </p>
        <p>
          <strong>Why keys are essential:</strong> Keys help React identify which items have changed, been added, or been removed. They provide a stable identity for items, allowing React's reconciliation algorithm to update the DOM efficiently without rebuilding the entire list structure.
        </p>
      </div>

      <div className="concept-card">
        <h5>4. Extracting Components with keys</h5>
        <p>
          If you extract a list item into a child component (e.g., extracting a book card into a <code>BookCard</code> component), you must apply the <code>key</code> to the outer component call inside the map loop, NOT to the root HTML node inside the child component:
        </p>
        <pre>
          <code>{`// Correct Extraction:
{books.map(book => (
  <BookCard key={book.id} book={book} />
))}`}</code>
        </pre>
      </div>

      <div className="concept-card">
        <h5>5. JavaScript map() Function</h5>
        <p>
          React relies on the standard ES6 array method <strong><code>map()</code></strong> to iterate over datasets. It takes a callback function and outputs a new array containing compiled JSX nodes for each index in the dataset:
        </p>
        <pre>
          <code>{`const listItems = data.map(item => (
  <li key={item.id}>{item.name}</li>
));`}</code>
        </pre>
      </div>

    </div>
  );
}

export default ConceptGuide;
