/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Appointments } from '../Appointments';

describe('List of Appointments for Patient', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore({
    auth: {
      profile: {
        id: '1b1634b0-503d-11ec-b7df-f1784d8070ff',
        first_name: 'Dylan',
        last_name: 'Thomas',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        role_name: 'Patient',
      },
    },
    appointment: {
      patientAppointments: {
        appointments: [{
          id: 'b8a3d9f0-5167-11ec-a990-b36c3699e613',
          visit_date: '2021-12-01T17:00:00.000Z',
          reason: 'death',
          note: 'death',
          patient_id: '1b1634b0-503d-11ec-b7df-f1784d8070ff',
          doctor_id: '0d1f25a0-4b98-11ec-9a6e-b3b5e1a51f7b',
          status: 'waiting',
          doctor: {
            first_name: 'Gena',
            last_name: 'Bukin',
            photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
            id: '0d1f25a0-4b98-11ec-9a6e-b3b5e1a51f7b',
            specialization_name: 'surgeon',
          },
        },
        {
          id: 'cd6f4930-5295-11ec-8d38-a7200243b060',
          visit_date: '2021-12-21T11:00:00.000Z',
          reason: 'death',
          note: 'death',
          patient_id: '1b1634b0-503d-11ec-b7df-f1784d8070ff',
          doctor_id: '2d81c370-4d64-11ec-a5ef-8f4983ead485',
          status: 'waiting',
          doctor: {
            first_name: 'Mary',
            last_name: 'Smith',
            photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
            id: '2d81c370-4d64-11ec-a5ef-8f4983ead485',
            specialization_name: 'therapist',
          },
        }],
      },
    },
  });

  it('should render appointments with data from store', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Appointments />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.queryAllByTestId('appointmentCard')).toHaveLength(2);
    expect(screen.getByText(/Bukin/));
    expect(screen.getByText(/Smith/));
  });
});
