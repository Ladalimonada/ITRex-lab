import * as Yup from 'yup';
import { DICTIONARY } from '../../../../shared/dictionary';

export const newAppointmentValidation = Yup.object().shape({
  occupation: Yup.string()
    .required(DICTIONARY.validationErrors.occupation),

  doctorsName: Yup.string()
    .required(DICTIONARY.validationErrors.doctorsName),

  visitReason: Yup.string()
    .max(100, DICTIONARY.validationErrors.max100Simbols)
    .required(DICTIONARY.validationErrors.visitReason),

  note: Yup.string()
    .required(DICTIONARY.validationErrors.note),

  time: Yup.string()
    .required(DICTIONARY.validationErrors.time),
});
