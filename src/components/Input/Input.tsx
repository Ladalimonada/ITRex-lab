import React from 'react';
import { Wrapper, StyledInput, Button } from './Input.styled';
import imgEye from '../../img/eye.png';
import imgEyeSlash from '../../img/eye-slash.png';

export type InputProps = {
  isVisible?: boolean;
  img?: string,
  placeholder: string
  name: string
};

export const Input = ({
  isVisible, img, placeholder, name, ...restProps
}: InputProps) => {
  const [passVisibility, setPassVisibility] = React.useState(true);
  const changePassVisibility = (): void => {
    setPassVisibility(!passVisibility);
  };

  return (
    <Wrapper>
      <StyledInput   
        {...restProps}
        name={name}
        placeholder={placeholder}
        img={img}
        type={passVisibility && isVisible ? 'password' : 'text'}
        data-testid="Input"
      />
      {isVisible ? (
        <Button
          onClick={changePassVisibility}
          src={passVisibility ? imgEyeSlash : imgEye}
          data-testid="changePassVisibilityButton"
        />
      ) : null}
    </Wrapper>
  );
};
