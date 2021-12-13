import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Patients } from '../Patients';

describe('List of Appointments for Doctor', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore({
    auth: {
      profile: {
        id: '90dbfd50-5043-11ec-b7df-f1784d8070ff',
        first_name: 'Charles',
        last_name: 'Bukowski',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        role_name: 'Doctor',
      },
    },
    doctor: {
      doctorappointments: {
        appointments: [{
          id: '31861f40-5618-11ec-b765-bbe51b5e59c0',
          visit_date: '2021-12-24T13:00:00.000Z',
          reason: 'death',
          note: 'death',
          status: 'waiting',
          patient: {
            first_name: 'Dylan',
            last_name: 'Thomas',
            photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
            id: '1b1634b0-503d-11ec-b7df-f1784d8070ff',
          },
        }, {
          id: '42561840-5625-11ec-b765-bbe51b5e59c0',
          visit_date: '2021-12-09T10:00:00.000Z',
          reason: '111111',
          note: '',
          status: 'waiting',
          patient: {
            first_name: 'Anastasia',
            last_name: 'Bekasova',
            photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
            id: 'b8962260-4b95-11ec-9a6e-b3b5e1a51f7b',
          },
        },
        ],
      },
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Patients />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render appointments with data from store', () => {
    expect(screen.queryAllByTestId('appointmentCard')).toHaveLength(2);
    expect(screen.getByText(/Thomas/));
    expect(screen.getByText(/Bekasova/));
  });
});
