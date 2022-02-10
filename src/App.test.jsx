import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';

test('page renders with form and header', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  const header = screen.getByText(/welcome! pls sign guestbook c:/i);
  expect(header).toBeInTheDocument();

  const nameInput = screen.getByLabelText(/your name/i);
  expect(nameInput).toBeInTheDocument();

  const textInput = screen.getByLabelText(/your note/i);
  expect(textInput).toBeInTheDocument();

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('user is able to add a note', () => {
  render(
    <UserProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </UserProvider>
  );

  const nameInput = screen.getByLabelText(/your name/i);
  expect(nameInput).toBeInTheDocument();
  userEvent.type(nameInput, 'bailey');
  expect(nameInput.value).toBe('bailey');

  const textInput = screen.getByLabelText(/your note/i);
  expect(textInput).toBeInTheDocument();
  userEvent.type(textInput, 'hello world');
  expect(textInput.value).toBe('hello world');

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  userEvent.click(button);

  const name = screen.getByText(/-bailey/i);
  expect(name).toBeInTheDocument();

  const note = screen.getByText(/hello world/i);
  expect(note).toBeInTheDocument();
});
