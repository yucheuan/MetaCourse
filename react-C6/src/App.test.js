import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';

test('renders Mouse position', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText("Mouse position:");
  expect(linkElement).toBeInTheDocument();
});
