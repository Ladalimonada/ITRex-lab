import { useNavigate, useParams } from 'react-router-dom';
import { ModalWindowProps, FormValues } from './ModalWindow.types';
import {
  ModalContainer, ModalBody, ModalTitle, ModalUserNameContainer,
  ModalLabel, ModalTextArea, ModalFooter,
  CancelButton, SaveButton, CreateButton, StyledDialog,
} from './ModalWindow.styled';
import { ErrorMessageText } from '../../../../components';
import userImg from '../../../../img//user.png';
import { DICTIONARY } from '../../../../shared/dictionary';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { updateAppointmentValidation } from '../../docktorValidation';

export const ModalWindow = ({ typeofModal, onSubmit }: ModalWindowProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  function onDismiss() {
    navigate(-1);
  }

  const initialValues: FormValues = {
    resolution: '',
  };

  return (
    <StyledDialog onDismiss={onDismiss}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values, id.substring(3))}
        validationSchema={updateAppointmentValidation}
      >
        <Form>
          <ModalContainer>
            <ModalBody>
              <ModalTitle>
                {DICTIONARY.modalWindow[typeofModal]}
              </ModalTitle>
              <ModalUserNameContainer>
                <img src={userImg} alt="user" />
                {/* <ModalUserName>{userName}</ModalUserName> */}
              </ModalUserNameContainer>
              <ModalLabel>{typeofModal === 'updateAppointment' ? DICTIONARY.modalWindow.appointment : DICTIONARY.modalWindow.resolution}</ModalLabel>
              <Field as={ModalTextArea} name="resolution"></Field>
              <ErrorMessage component={ErrorMessageText} name="resolution" />
            </ModalBody>
            <ModalFooter>
              <CancelButton onClick={() => onDismiss()}><span>{DICTIONARY.modalWindow.cancel}</span></CancelButton>
              {typeofModal === 'createResolution' ?
                <CreateButton type="submit" onClick={() => onDismiss()}><span>{DICTIONARY.modalWindow.create}</span></CreateButton> :
                <SaveButton type="submit" onClick={() => onDismiss()}><span>{DICTIONARY.modalWindow.save}</span></SaveButton>}
            </ModalFooter>
          </ModalContainer>
        </Form>
      </Formik>
    </StyledDialog>
  );
};