import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

test('hello world', () => {
  expect(true).toBe(false);
});

test('renders Free dictionary title', () => {
  // Arrange
  render(<App />)

  // Act
  const linkElement = screen.getByText(/free dictionary/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});

test('should renders the form elements', () => {
  // Arrange
  render(<App />)

  // Act
  const inputElement = screen.getByLabelText(/word/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  // Assert
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});


test('should search a word', async () => {
  // Arrange
  render(<App />)

  // Act
  const inputElement = screen.getByLabelText(/word/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  userEvent.type(inputElement, 'cat');
  userEvent.click(buttonElement);

  const wordMeaningElement = await screen.findByText(/an animal of the family Felidae:/i);

  // Assert
  expect(wordMeaningElement).toBeInTheDocument();
});

