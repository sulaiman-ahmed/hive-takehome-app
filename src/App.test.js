import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { fireEvent } from '@testing-library/react/dist/pure';

const testOptions = [
  {value: "green", label: "Green"},
  {value: "red", label: "Red"},
  {value: "blue", label: "Blue"}
]

test('renders placeholder', () => {
  render(<Dropdown placeHolder="Placeholder" />);
  const placeholderText = screen.getByText("Placeholder");

  expect(placeholderText).toBeInTheDocument();
});

test('renders dropdown on click', () => {
  render(<Dropdown placeHolder="Select..." options={testOptions} /> )
  fireEvent.click(screen.getByText("Select..."));

  expect(screen.getByText("Green")).toBeInTheDocument();
  expect(screen.getByText("Blue")).toBeInTheDocument();
  expect(screen.getByText("Red")).toBeInTheDocument();
});

test('closes dropdown when clicked again', () => {
  render(<Dropdown placeHolder="Select..." options={testOptions} /> )
  fireEvent.click(screen.getByText("Select..."));
  fireEvent.click(screen.getByText("Select..."));

  expect(screen.queryByText("Green")).not.toBeInTheDocument();

});

test('displays selected option', () => {
  render(<Dropdown placeHolder="Select..." options={testOptions} /> )
  fireEvent.click(screen.getByText("Select..."));
  fireEvent.click(screen.getByText("Green"));

  expect(screen.getByText("Green")).toBeInTheDocument();

});
