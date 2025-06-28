import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mouse position', () => {
  render(<App />);
  const linkElement = screen.getByText("Mouse position");
  expect(linkElement).toBeInTheDocument();
});
