import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { SignUpForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignUpForm ', () => {
  const handleSubmit = jest.fn((e) => e.preventDefault);
  let inputFirstName: HTMLInputElement;
  let InputLastName: HTMLInputElement;
  let inputEmail: HTMLInputElement;
  let inputPassword: HTMLInputElement;
  let inputConfirmPassword: HTMLInputElement;
  let submitButton: HTMLElement;

  beforeEach(() => {
    const {
      getByPlaceholderText, getByRole,
    } = render(
      <SignUpForm onSubmit={handleSubmit} />,
    );
    inputFirstName = getByPlaceholderText(DICTIONARY.authForm.firstName) as HTMLInputElement;
    InputLastName = getByPlaceholderText(DICTIONARY.authForm.lastName)as HTMLInputElement;
    inputEmail = getByPlaceholderText(DICTIONARY.authForm.email)as HTMLInputElement;
    inputPassword = getByPlaceholderText(DICTIONARY.authForm.password)as HTMLInputElement;
    inputConfirmPassword = getByPlaceholderText(DICTIONARY.authForm.confirmPassword)as HTMLInputElement;
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

  it('form should not submit if fisrt name doesn`t pass the validation', async () => {
    userEvent.type((inputFirstName), 'john');
    userEvent.type((InputLastName), 'Dee');
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type((inputPassword), 'Test11234');
    userEvent.type((inputConfirmPassword), 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('form should not submit if last name doesn`t pass the validation', async () => {
    userEvent.type((inputFirstName), 'John');
    userEvent.type((InputLastName), 'dee');
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type((inputPassword), 'Test11234');
    userEvent.type((inputConfirmPassword), 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('form should not submit if email doesn`t pass the validation', async () => {
    userEvent.type((inputFirstName), 'John');
    userEvent.type((InputLastName), 'Dee');
    userEvent.type((inputEmail), 'john.deesomeemail.com');
    userEvent.type((inputPassword), 'Test11234');
    userEvent.type((inputConfirmPassword), 'Test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('form should not submit if password doesn`t pass the validation', async () => {
    userEvent.type((inputFirstName), 'John');
    userEvent.type((InputLastName), 'Dee');
    userEvent.type((inputEmail), 'john.dee@someemail.com');
    userEvent.type((inputPassword), 'test11234');
    userEvent.type((inputConfirmPassword), 'test11234');
    userEvent.click(submitButton);

    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it('form should not submit if passwords don`t match the validation', async () => {
    userEvent.type((inputFirstName), 'John');
    userEvent.type((InputLastName), 'Dee');
    userEvent.type((inputEmail), 'john.deesomeemail.com');
    userEvent.type((inputPassword), 'Test11234567');
    userEvent.type((inputConfirmPassword), 'Test11234');
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
