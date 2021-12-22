import * as Yup from 'yup';
import { DICTIONARY } from '../../shared/dictionary';

export const updateResolutionValidation = Yup.object().shape({
  resolution: Yup.string()
    .required(DICTIONARY.validationErrors.resolutionRequiered),
});

export const updateAppointmentValidation = Yup.object().shape({
  appointment: Yup.object().nullable()
    .required(DICTIONARY.validationErrors.resolutionRequiered),
});