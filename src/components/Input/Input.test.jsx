/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input component', () => {
  it('password should be displayed in masked format', () => {
    // Arrange
    const { getByTestId } = render(
      <Input isVisible />,
    );

    // Act
    const InputforTest = getByTestId('Input');

    // Assert
    expect(InputforTest.type === 'password');
  });

  it('password should be shown onClick', () => {
    // Arrange

    const { getByTestId } = render(
      <Input isVisible />,
    );
    const InputforTest = getByTestId('Input');
    const Button = getByTestId('changePassVisibilityButton');

    // Act

    userEvent.click(Button);

    // Assert
    expect(InputforTest.type === 'text');
  });
});
