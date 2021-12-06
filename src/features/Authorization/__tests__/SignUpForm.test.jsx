/* eslint-disable camelcase */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { SignUpForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignUpForm ', () => {
  const handleSubmit = jest.fn((e) => e.preventDefault);
  let inputFirstName;
  let InputLastName;
  let inputEmail;
  let inputPassword;
  let inputConfirmPassword;
  let submitButton;

  beforeEach(() => {
    const {
      getByPlaceholderText, getByRole,
    } = render(
      <SignUpForm onSubmit={handleSubmit} />,
    );
    inputFirstName = getByPlaceholderText(DICTIONARY.authForm.firstName);
    InputLastName = getByPlaceholderText(DICTIONARY.authForm.lastName);
    inputEmail = getByPlaceholderText(DICTIONARY.authForm.email);
    inputPassword = getByPlaceholderText(DICTIONARY.authForm.password);
    inputConfirmPassword = getByPlaceholderText(DICTIONARY.authForm.confirmPassword);
    submitButton = getByRole('button');
  });

  it('should be rendered and submitted with correct data', async () => {
    userEvent.type((inputFirstName), 'John');
    userEvent.type((InputLastName), 'Dee');
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type((inputPassword), 'Test11234');
    userEvent.type((inputConfirmPassword), 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      confirmPassword: 'Test11234',
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
      password: 'Test11234',
    }));
  });

  it('form should not submit if the values don`t pass the validation', async () => {
    userEvent.type((inputEmail), 'john.deesomeemail.com');
    userEvent.type((inputPassword), '11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('validation errors should appears and form should not be submitted if user click on Submit button without providing any data', async () => {
    userEvent.click(submitButton);

    expect(await screen.findByText(DICTIONARY.validationErrors.firstNameRequiered)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.lastNameRequiered)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.emailRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passConfirmRequiered)).toBeVisible();
    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('validation errors should appear if inputs were touched without typing any data', async () => {
    userEvent.click(inputFirstName);
    userEvent.click(InputLastName);
    userEvent.click(inputEmail);
    userEvent.click(inputPassword);
    userEvent.click(inputConfirmPassword);
    userEvent.click(submitButton);

    expect(await screen.findByText(DICTIONARY.validationErrors.firstNameRequiered)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.lastNameRequiered)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.emailRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passRequired)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.passConfirmRequiered)).toBeVisible();
  });
});
