import React, { useState } from 'react';

// Extracted Component demonstrating component extraction with keys
function BookCard({ book, onSelect, isSelected }) {
  return (
    <div 
      className={`item-card book-card ${isSelected ? 'active' : ''}`}
      onClick={() => onSelect(book)}
    >
      <div className="card-top">
        <span className="rating-stars">{book.rating}</span>
        <span className="category-tag">Book</span>
      </div>
      <h4>{book.title}</h4>
      <p className="author-text">By {book.author}</p>
      <div className="card-footer-info">
        <span className="price-label">{book.price}</span>
        <button className="select-btn">View Summary</button>
      </div>
    </div>
  );
}

const booksData = [
  {
    id: 'book-101',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: '$39.99',
    rating: '⭐⭐⭐⭐⭐',
    description: 'A handbook of agile software craftsmanship. It covers meaningful names, functions, comments, formatting, and unit testing to elevate your coding standards.'
  },
  {
    id: 'book-102',
    title: 'You Don\'t Know JS Yet',
    author: 'Kyle Simpson',
    price: '$24.99',
    rating: '⭐⭐⭐⭐⭐',
    description: 'An in-depth guide into core JavaScript mechanisms, closures, prototypes, scopes, and asynchronous patterns. Essential for mastering intermediate and advanced JS.'
  },
  {
    id: 'book-103',
    title: 'Design Patterns',
    author: 'Erich Gamma et al. (GoF)',
    price: '$49.99',
    rating: '⭐⭐⭐⭐',
    description: 'The seminal textbook on object-oriented software design. Introduces 23 classic software patterns (creational, structural, behavioral) to solve recurring coding challenges.'
  },
  {
    id: 'book-104',
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: '$44.95',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Explains the principles and practices of refactoring. It provides a detailed catalog of refactorings, complete with code samples showing step-by-step transformations.'
  }
];

function BookDetails() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="details-container animate-fade-in">
      <div className="sub-header">
        <h3>📚 Book Catalog</h3>
        <p>A list of seminal software books. Click a card to view detailed specifications.</p>
      </div>

      <div className="dashboard-subgrid">
        {/* Render Multiple Components using map() */}
        <div className="list-layout">
          {booksData.map((book) => (
            // Extracted component with unique key
            <BookCard 
              key={book.id} 
              book={book} 
              onSelect={setSelectedBook}
              isSelected={selectedBook?.id === book.id}
            />
          ))}
        </div>

        {/* CONDITIONAL RENDERING: Logical AND (&&) Operator */}
        {selectedBook && (
          <div className="details-panel animate-fade-in">
            <div className="panel-header">
              <span className="badge">Summary Details</span>
              <h4>{selectedBook.title}</h4>
              <p className="sub-detail">Written by <strong>{selectedBook.author}</strong> • Rating: {selectedBook.rating}</p>
            </div>
            <div className="panel-body">
              <p>{selectedBook.description}</p>
              <div className="purchase-info">
                <span>Direct Purchase Price:</span>
                <span className="price-tag">{selectedBook.price}</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setSelectedBook(null)}>
              Close Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
export { BookCard };
