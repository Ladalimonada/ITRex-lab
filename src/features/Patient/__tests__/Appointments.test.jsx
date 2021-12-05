/* eslint-disable camelcase */
import React from 'react';
import { render } from '@testing-library/react';
import { AppontmentCard } from '../components';

describe('List of Appointments for Patient', () => {
  it('should render appointments ', () => {
    // Arrange
    const patientAppointmentsList = [{
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
    }];

    // Act
    const { getByText } = render(patientAppointmentsList.map(({
      doctor: {
        first_name, last_name, specialization_name, photo,
      },
      note, visit_date,
    }) => (
      <AppontmentCard
        avatar={photo}
        firstName={first_name}
        lastName={last_name}
        doctorsSpecialization={specialization_name}
        description={note}
        time={visit_date}
        key={`${visit_date} ${last_name}`}
      />
    )));

    // Assert
    expect(getByText(/Bukin/i));
    expect(getByText(/Gena/i));
    expect(getByText(/death/i));
  });
});
