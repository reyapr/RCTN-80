import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('Test Home Page', () => {
  it('should render home page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const title = screen.getByText('Home');
    expect(title).toBeInTheDocument();
  });

  it('should increment 1', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const prevCounter = screen.getByTestId('counter');
    const btnPlus = screen.getByTestId('plus');
    expect(prevCounter.innerHTML).toBe('0');

    fireEvent.click(btnPlus);

    const nextCounter = screen.getByTestId('counter');
    expect(nextCounter.innerHTML).toBe('1');
  });

  it('should decrement 1', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const prevCounter = screen.getByTestId('counter');
    const btnMinus = screen.getByTestId('minus');
    expect(prevCounter.innerHTML).toBe('0');

    fireEvent.click(btnMinus);

    const nextCounter = screen.getByTestId('counter');
    expect(nextCounter.innerHTML).toBe('-1');
  });

  it('should increment 2 and decrement 1', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const prevCounter = screen.getByTestId('counter');
    expect(prevCounter.innerHTML).toBe('0');

    const btnPlus = screen.getByTestId('plus');
    const btnMinus = screen.getByTestId('minus');

    fireEvent.click(btnPlus);
    fireEvent.click(btnPlus);
    fireEvent.click(btnMinus);

    const nextCounter = screen.getByTestId('counter');
    expect(nextCounter.innerHTML).toBe('1');
  });

  it('should redirect to user list page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const userListLink = screen.getByTestId('user-link');
    const prevTitle = screen.getByText('Home');
    expect(prevTitle).toBeInTheDocument();
    expect(location.pathname).toBe('/');

    fireEvent.click(userListLink);

    const nextTitle = screen.getByText('Users');
    expect(nextTitle).toBeInTheDocument();
    expect(location.pathname).toBe('/users');
  });
});
