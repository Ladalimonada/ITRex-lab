import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('Input component', () => {
  let input: HTMLInputElement;
  let passVisibilitySetter: HTMLElement;

  beforeEach(() => {
    const { getByTestId } = render(
      <Input isVisible placeholder="Input" name="input" />,
    );
    input = getByTestId('Input') as HTMLInputElement;
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
