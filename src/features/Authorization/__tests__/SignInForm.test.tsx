import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { SignInForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignInForm', () => {
  const handleSubmit = jest.fn((e) => e.preventDefault);
  let inputEmail: HTMLInputElement;
  let inputPassword: HTMLInputElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    const {
      getByPlaceholderText, getByRole,
    } = render(
      <SignInForm onSubmit={handleSubmit} />,
    );
    inputEmail = getByPlaceholderText(DICTIONARY.authForm.email) as HTMLInputElement;
    inputPassword = getByPlaceholderText(DICTIONARY.authForm.password) as HTMLInputElement;
    submitButton = getByRole('button');
  });

  it('should be rendered and submitted with correct data', async () => {
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type(inputPassword, 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      password: 'Test11234',
    }));
  });

  it('form should not submit if email doesn`t pass the validation', async () => {
    userEvent.type((inputEmail), 'john.deesomeemail.com');
    userEvent.type((inputPassword), 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('form should not submit if password doesn`t pass the validation', async () => {
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type((inputPassword), '11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('validation errors should appear and form should not be submitted if user click on Submit button without providing any data', async () => {
    userEvent.click(submitButton);

    expect(await screen.findByText(DICTIONARY.validationErrors.emailRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passRequired)).toBeVisible();
    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('validation errors should appear if inputs were touched without typing any data', async () => {
    userEvent.click(inputEmail);
    userEvent.click(inputPassword);
    userEvent.click(inputEmail);

    expect(await screen.findByText(DICTIONARY.validationErrors.emailRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passRequired)).toBeVisible();
  });
});
