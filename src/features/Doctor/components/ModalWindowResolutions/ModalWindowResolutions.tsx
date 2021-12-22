import { useNavigate, useParams } from 'react-router-dom';
import { ModalWindowProps } from './ModalWindowResolutions.types';
import {
  ModalContainer, ModalBody, ModalTitle, ModalLabel, ModalTextArea, ModalFooter,
  CancelButton, SaveButton, CreateButton, StyledDialog,
} from './ModalWindowResolutions.styled';
import { ErrorMessageText } from '../../../../components';
import { DICTIONARY } from '../../../../shared/dictionary';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { updateResolutionValidation } from '../../docktorValidation';
import { FormValues } from './ModalWindowResolutions.types';

export const ModalWindowResolutions = ({ typeofModal, onSubmit }: ModalWindowProps) => {
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
        validationSchema={updateResolutionValidation}
      >
        <Form>
          <ModalContainer>
            <ModalBody>
              <ModalTitle>
                {DICTIONARY.modalWindow[typeofModal]}
              </ModalTitle>
              <ModalLabel>{DICTIONARY.modalWindow.resolution}</ModalLabel>
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