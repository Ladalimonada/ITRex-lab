import React, { useState } from 'react';
import moment from 'moment';
import { PatientTableProps } from './PatientTable.types';
import { StyledTable, StyledTableHead, StyledButton, StyledRow } from './PatientTable.styled';

export const PatientTable = ({ data }: PatientTableProps) => {

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
        </StyledRow>
      </StyledTableHead>
      <tbody>
        {sortedData ? sortedData.map(({ doctor: { first_name, last_name },
          id, resolution, visit_date, next_appointment_date }) => (<StyledRow
            id={id}
            key={id}>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{resolution}</td>
            <td>{moment(visit_date).format('L')}</td>
            <td>{moment(next_appointment_date).format('L')}</td>
          </StyledRow>
        )) : null}
      </tbody>
    </StyledTable>
  );

};
