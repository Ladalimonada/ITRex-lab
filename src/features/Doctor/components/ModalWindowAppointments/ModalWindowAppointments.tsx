import { useNavigate, useParams } from 'react-router-dom';
import { ModalWindowProps, FormValues } from './ModalWindowAppointment.types';
import {
  ModalContainer, ModalBody, ModalTitle, ModalUserNameContainer,
  ModalLabel, ModalFooter,
  CancelButton, SaveButton, StyledDialog,
} from '../ModalWindowResolutions/ModalWindowResolutions.styled';
import { ErrorMessageText, CustomSelect } from '../../../../components';
import userImg from '../../../../img//user.png';
import { DICTIONARY } from '../../../../shared/dictionary';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { updateAppointmentValidation } from '../../docktorValidation';
import { APPOINTMENT_STATUSES } from '../../../../shared/constants';

export const ModalWindowAppointments = ({ onSubmit }: ModalWindowProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  function onDismiss() {
    navigate(-1);
  }

  const initialValues: FormValues = {
    appointment: {
      value: '',
      label: '',
    },
  };

  return (
    <StyledDialog onDismiss={onDismiss}>
      <Formik
        initialValues={initialValues}
        onSubmit={({ appointment }) => {
          const params = {
            status: appointment.value,
          };
          onSubmit(params, id.substring(3));
        }}
        validationSchema={updateAppointmentValidation}
      >
        {({ setFieldValue }) => (
          <Form>
            <ModalContainer>
              <ModalBody>
                <ModalTitle>
                  {DICTIONARY.modalWindow.updateAppointment}
                </ModalTitle>
                <ModalUserNameContainer>
                  <img src={userImg} alt="user" />
                  {/* <ModalUserName>{userName}</ModalUserName> */}
                </ModalUserNameContainer>
                <ModalLabel>{DICTIONARY.modalWindow.resolution}</ModalLabel>
                <Field as={CustomSelect}
                  name="appointment"
                  options={APPOINTMENT_STATUSES}
                  onChange={(value: { value: string, label: string }) => {
                    setFieldValue('appointment', value);
                  }}
                >
                </Field>
                <ErrorMessage component={ErrorMessageText} name="appointment" />
              </ModalBody>
              <ModalFooter>
                <CancelButton onClick={() => onDismiss()}><span>{DICTIONARY.modalWindow.cancel}</span></CancelButton>
                <SaveButton type="submit" onClick={() => onDismiss()}><span>{DICTIONARY.modalWindow.save}</span></SaveButton>
              </ModalFooter>
            </ModalContainer>
          </Form>)}
      </Formik>
    </StyledDialog>
  );
};