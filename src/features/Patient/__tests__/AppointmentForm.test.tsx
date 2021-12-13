import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { AppointmentForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignInForm ', () => {
  let selectDoctorOccupation: HTMLInputElement;
  let selectDoctor: HTMLInputElement;
  let inputVisitreason: HTMLInputElement;
  let inputNote: HTMLInputElement;
  let submitButton: HTMLElement;

  const handleSubmit = jest.fn((e) => e.preventDefault);
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({
    appointment: {
      doctors: [{
        first_name: 'Oleg',
        last_name: 'Dublyanin',
        id: '1f35c5f0-4382-11ec-aea7-5bf2c99871db',
      }, {
        first_name: 'Charles',
        last_name: 'Bukowski',
        id: '90dbfd50-5043-11ec-b7df-f1784d8070ff',
      }],
      freeTime: ['2021-12-17T05:00:00.000Z',
        '2021-12-17T06:00:00.000Z',
        '2021-12-17T07:00:00.000Z',
        '2021-12-17T08:00:00.000Z',
        '2021-12-17T09:00:00.000Z'],
    },
  });

  beforeEach(() => {
    const {
      getByText, getByPlaceholderText,
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AppointmentForm onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>,
    );
    selectDoctorOccupation = getByText(DICTIONARY.newAppointmentPlaseholders.occupation) as HTMLInputElement;
    selectDoctor = getByText(DICTIONARY.newAppointmentPlaseholders.doctorsName) as HTMLInputElement;
    inputVisitreason = getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.visitReason) as HTMLInputElement;
    inputNote = getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.note) as HTMLInputElement;
    submitButton = getByText(DICTIONARY.newAppointment.submit);
  });

  it('submit button should be disabled on form render', () => {
    expect(submitButton).toHaveAttribute('isDisabled');
  });

  it('selects are working correct', async () => {
    await waitFor(() => {
      userEvent.selectOptions(selectDoctorOccupation, 'Surgeon');
      userEvent.selectOptions(selectDoctor, 'Charles Bukowski');
    });

    expect(screen.getByText('Charles Bukowski')).toBeInTheDocument();
  });

  it('validation errors should appear if inputs were touched without typing any data', async () => {
    userEvent.click(inputVisitreason);
    userEvent.click(inputNote);
    userEvent.click(submitButton);

    expect(await screen.findByText(DICTIONARY.validationErrors.visitReason)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.note)).toBeVisible();
  });

  it('validation errors should appear if inputs were touched without typing any data', async () => {
    userEvent.click(inputVisitreason);
    userEvent.click(inputNote);
    userEvent.click(submitButton);

    expect(await screen.findByText(DICTIONARY.validationErrors.visitReason)).toBeVisible();
    expect(await screen.findByText(DICTIONARY.validationErrors.note)).toBeVisible();
  });
});
