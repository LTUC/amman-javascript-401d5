import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/app';
import People from '../components/people';
test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  const linkElement = screen.getByText(/Get Star Wars People/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render the list', () => {
  const people = [{ name: 'Luke Skywalker', url: 'https://' }];

  render(<People people={people} />);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(1);
});

test('work as expected', () => {
  render(<App />);
  // screen.debug();
  const button = screen.getByTestId('button');
  fireEvent.click(button);
  expect(screen.getByTestId('output')).toHaveTextContent('1');
});
