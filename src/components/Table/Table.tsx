import React, { useState } from 'react';
import moment from 'moment';
import { TableColumn } from '../index';
import { TableProps } from './Table.types';
import { StyledTable, StyledTableHead, StyledButton, StyledRow } from './Table.styled';
import { DICTIONARY } from '../../shared/dictionary';
import { ROUTES } from '../../shared/constants';
import { CustomMenu } from 'components/CustomMenu';
import { deleteResolution, fetchResolutions } from '../../features/Doctor/redux/doctorSlice';
import { useAppDispatch } from '../../shared/hooks';


export const Table = ({ data, type }: TableProps) => {
  const dispatch = useAppDispatch();
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

  const sortedData = [...data];

  sortedData.sort((a: any, b: any) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const getSortConfig = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledRow>
          <th><StyledButton onClick={() => requestSort('first_name')}
            sortDirection={getSortConfig('first_name')}><span>
              First Name</span>
          </StyledButton></th>
          <th><StyledButton onClick={() => requestSort('last_name')}
            sortDirection={getSortConfig('last_name')}><span>
              Last Name</span>
          </StyledButton></th>
          <th><StyledButton onClick={() => requestSort('resolution')}
            sortDirection={getSortConfig('resolution')}><span>
              Resolution</span>
          </StyledButton></th>
          <th><StyledButton onClick={() => requestSort('visit_date')}
            sortDirection={getSortConfig('visit_date')}><span>
              Visit Date</span>
          </StyledButton></th>
          <th><StyledButton onClick={() => requestSort('next_appointment_date')}
            sortDirection={getSortConfig('next_appointment_date')}><span>
              Next Visit</span>
          </StyledButton></th>
          {type === 'doctor' ? <th>Actions</th> : null}
        </StyledRow>
      </StyledTableHead>
      <tbody>
      {sortedData ? sortedData.map(({ patient: { first_name, last_name },
        id, resolution, visit_date, next_appointment_date }) => (<TableColumn
          id={id}
          key={id}
          firstName={first_name}
          lastName={last_name}
          resolution={resolution}
          visitDate={moment(visit_date).format('L')}
          nextAppointmentDate={moment(next_appointment_date).format('L')}
          actions={<CustomMenu menuItems={
                [
                  { title: DICTIONARY.menu.editResolution, path: `${ROUTES.UPDATE_RESOLUTION}${id}`, onClick: () => {dispatch(fetchResolutions);} },
                  { title: DICTIONARY.menu.delete, onClick: () => { dispatch(deleteResolution(id)); dispatch(fetchResolutions); } },
                ]
              } />}
        />
      )) : null}
      </tbody>
    </StyledTable>
  );

};