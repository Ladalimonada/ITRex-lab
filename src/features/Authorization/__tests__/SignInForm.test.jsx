/* eslint-disable camelcase */
import React from 'react';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SignInForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignInForm ', () => {
  it('should be rendered and submitted with correct data', async () => {
    // Arrange
    const handleSubmit = jest.fn();

    render(
      <SignInForm onSubmit={handleSubmit} />,
    );

    // Act
    userEvent.type(screen.getByPlaceholderText(DICTIONARY.authForm.email), 'john.dee@someemail.com');
    userEvent.type(screen.getByPlaceholderText(DICTIONARY.authForm.password), 'Test11234');
    userEvent.click(screen.getByRole('button'));

    // Assert
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      password: 'Test11234',
    }));
  });
});
