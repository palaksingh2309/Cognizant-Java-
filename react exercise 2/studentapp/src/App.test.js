import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome messages', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to the Home page of Student Management Portal/i);
  expect(welcomeElement).toBeInTheDocument();
});
