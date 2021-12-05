/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MockDate from 'mockdate';
import * as dayjs from 'dayjs';
import { BrowserRouter } from 'react-router-dom';
import { AppointmentForm } from '../components';
import { DICTIONARY } from '../../../shared/dictionary';

describe('SignInForm ', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should be rendered and submitted with correct data', async () => {
    // Arrange
    const handleSubmit = jest.fn();
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
          '2021-12-17T14:00:00.000Z',
          '2021-12-17T15:00:00.000Z',
          '2021-12-17T16:00:00.000Z',
          '2021-12-17T17:00:00.000Z'],
      },
    });
    // const useStateSpy = jest.spyOn(React, 'useState');
    // jest.mock('dayjs', () => {});
    MockDate.set('2020-01-01');
    console.log(dayjs.format());

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppointmentForm onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>,
    );

    // Act

    userEvent.selectOptions(screen.getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.occupation), 'Surgeon');
    userEvent.selectOptions(screen.getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.doctorsName), 'Charles Bukowski');
    userEvent.type(screen.getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.visitReason), 'death');
    userEvent.type(screen.getByPlaceholderText(DICTIONARY.newAppointmentPlaseholders.note), 'death');
    userEvent.click(screen.getByTestId('calendar'), '2021-12-17T10:00:00.000Z');
    userEvent.click(screen.getByTestId('radio-button'), '6:00 pm');
    userEvent.click(screen.getByRole('button'));

    // Assert
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });
});
