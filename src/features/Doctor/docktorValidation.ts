import * as Yup from 'yup';
import { DICTIONARY } from '../../shared/dictionary';

export const updateAppointmentValidation = Yup.object().shape({
  resolution: Yup.string()
    .required(DICTIONARY.validationErrors.resolutionRequiered),
});