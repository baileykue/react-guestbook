import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';

test('that the login form properly renders', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const header = screen.getByText(/welcome! pls log in to sign guestbook c:/i);
  expect(header).toBeInTheDocument();

  const email = screen.getByLabelText(/email/i);
  expect(email).toBeInTheDocument();

  const password = screen.getByLabelText(/password/i);
  expect(password).toBeInTheDocument();

  const loginButton = screen.getByRole('button', { name: /log in/i });
  expect(loginButton).toBeInTheDocument();

  userEvent.type(email, 'bailey@example.com');
  expect(email).toHaveValue('bailey@example.com');

  userEvent.type(password, 'gitonup');
  expect(password).toHaveValue('gitonup');

  userEvent.click(loginButton);

  const personalHeader = screen.getByText(/thanks for leaving a note, bailey/i);
  expect(personalHeader).toBeInTheDocument();

  const logoutButton = screen.getByRole('button', { name: /log out/i });
  expect(logoutButton).toBeInTheDocument();

  const yourNote = screen.getByLabelText(/your note:/i);
  expect(yourNote).toBeInTheDocument();

  const emojis = screen.getByLabelText(/emojis:/i);
  expect(emojis).toBeInTheDocument();

  // const noteButton = screen.getByRole('button', { name: /leave note/i });
  // expect(noteButton).toBeInTheDocument();
});
