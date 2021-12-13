import * as Yup from 'yup';
import { DICTIONARY } from '../../shared/dictionary';

export const emailValidation = Yup
  .string()
  .matches(
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    DICTIONARY.validationErrors.emailNotValid,
  )
  .required(DICTIONARY.validationErrors.emailRequired);

export const passwordValidation = Yup
  .string()
  .required(DICTIONARY.validationErrors.passRequired)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/,
    DICTIONARY.validationErrors.passNotValid,
  );

export const signUpValidation = Yup.object().shape({
  firstName: Yup.string()
    .required(DICTIONARY.validationErrors.firstNameRequiered)
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      DICTIONARY.validationErrors.firstNameNotValid,
    ),
  lastName: Yup.string()
    .required(DICTIONARY.validationErrors.lastNameRequiered)
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      DICTIONARY.validationErrors.lastNameNotValid,
    ),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .required(DICTIONARY.validationErrors.passConfirmRequiered)
    .oneOf([Yup.ref('password')], DICTIONARY.validationErrors.passConfirmMatch),
});

export const signInValidation = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,

});
