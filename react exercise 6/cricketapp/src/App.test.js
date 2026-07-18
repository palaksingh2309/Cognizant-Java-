import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders cricket app heading and toggles components based on flag', () => {
  render(<App />);
  
  // 1. Verify App Header is rendered
  const headerElement = screen.getByRole('heading', { name: /Cricket App/i });
  expect(headerElement).toBeInTheDocument();

  // 2. Verify default component rendered is ListofPlayers (Flag = True)
  const listHeading = screen.getByText(/Player Management Portal/i);
  expect(listHeading).toBeInTheDocument();
  
  // Sachin Tendulkar should be visible under ListofPlayers
  const sachinElement = screen.getByText(/Sachin Tendulkar/i);
  expect(sachinElement).toBeInTheDocument();

  // 3. Click the Flag = False button to switch to IndianPlayers component
  const flagFalseButton = screen.getByRole('button', { name: /Flag = False/i });
  fireEvent.click(flagFalseButton);

  // 4. Verify IndianPlayers component is now rendered
  const indianHeading = screen.getByText(/Indian Players Portal/i);
  expect(indianHeading).toBeInTheDocument();
  
  // Verification of odd/even team players
  const oddHeading = screen.getByText(/Odd Team Players/i);
  const evenHeading = screen.getByText(/Even Team Players/i);
  expect(oddHeading).toBeInTheDocument();
  expect(evenHeading).toBeInTheDocument();
  
  // Verification of merged squad heading
  const mergedHeading = screen.getByText(/Merged Squad/i);
  expect(mergedHeading).toBeInTheDocument();
});
