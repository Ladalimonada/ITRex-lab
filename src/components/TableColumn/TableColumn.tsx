import { TableColumnType } from './TableColumn.types';
import { StyledRow } from './TableColumn.styled';


export const TableColumn = ({ firstName, lastName, resolution, visitDate, nextAppointmentDate, actions }: TableColumnType) => {
  return (
        <StyledRow>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{resolution}</td>
            <td>{visitDate}</td>
            <td>{nextAppointmentDate}</td>
            <td>{actions}</td>
        </StyledRow>
  );
};