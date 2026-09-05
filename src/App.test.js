import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IndieMate landing page title and branding', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/IndieMate/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
