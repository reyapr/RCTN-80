import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Users from './index';
import App from '../../App';

describe('Test Users Page', () => {
  it('should render users page', () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );

    const title = screen.getByText('Users');
    expect(title).toBeInTheDocument();
  });

  it('should render list of users', async () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );

    const userListTable = screen.getByTestId('user-list');
    expect(userListTable.children.length).toBe(0);

    await waitFor(() => {
      const nextUserListTable = screen.getByTestId('user-list');
      expect(nextUserListTable.children.length).toBe(10);
      expect(screen.getByText('Bret')).toBeInTheDocument();
    });
  });

  it('should back to home page', () => {
    render(
      <MemoryRouter initialEntries={['/users']}>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByText('Users');
    expect(title).toBeInTheDocument();
    const backLink = screen.getByTestId('back-link');

    fireEvent.click(backLink);
    const nextTitle = screen.getByText('Home');
    expect(nextTitle).toBeInTheDocument();
  });
});
