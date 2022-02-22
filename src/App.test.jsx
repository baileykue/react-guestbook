import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';

test.only('page renders with form and header', () => {
  render(
    <MemoryRouter initialEntries={['/guestbook']}>
      <UserProvider user={'email: bailey@example.com'}>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const header = screen.getByText(/thanks for leaving a note, bailey/i);
  expect(header).toBeInTheDocument();

  const textInput = screen.getByLabelText(/your note/i);
  expect(textInput).toBeInTheDocument();

  const emoji = screen.getByLabelText(/emojis/i);
  expect(emoji).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /leave note/i });
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

test('that the login form properly renders', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
});
