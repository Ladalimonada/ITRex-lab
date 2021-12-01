import * as Yup from 'yup';

export const emailValidation = Yup
  .string()
  .matches(
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    'The email must be a valid email adress',
  )
  .required('Email is required');

export const passwordValidation = Yup
  .string()
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/,
    'Password must contain a capital letter and be at least 8 characters long',
  );

export const signUpValidation = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      'First Name contains unsupported characters',
    ),
  lastName: Yup.string()
    .required('Last Name is required')
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      'Last Name contains unsupported characters',
    ),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], 'Passwords don`t match'),
});

export const signInValidation = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,

});
