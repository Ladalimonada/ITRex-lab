/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('Input component', () => {
  let input;
  let passVisibilitySetter;

  beforeEach(() => {
    const { getByTestId } = render(
      <Input isVisible />,
    );
    input = getByTestId('Input');
    passVisibilitySetter = getByTestId('changePassVisibilityButton');
  });

  it('password should be displayed in masked format', () => {
    expect(input.type === 'password');
  });

  it('password should be shown onClick', () => {
    userEvent.click(passVisibilitySetter);

    expect(input.type === 'text');
  });
});
