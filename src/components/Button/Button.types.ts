export type ButtonProps = {
  children?: JSX.Element | string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  margin?: boolean,
  isDisabled?: boolean,
  type?: 'button' | 'submit' | 'reset' | undefined,
};