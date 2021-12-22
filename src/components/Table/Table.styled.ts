import styled from 'styled-components';
import angleUp from '../../img/angle-up.png';
import angleDown from '../../img/angle-down.png';

export const StyledButton = styled.button<{ sortDirection: string }>`
color:#A1ABC9;
span {
   position: relative; 
}
span::after{
    content: url(${(props) => (props.sortDirection === 'ascending' ? angleUp : angleDown)});
    position: absolute;
    top: 0;
    right: -2em;
}`;

export const StyledTable = styled.table`
width:100%;
border-collapse: separate;
border-spacing: 0 4px;
box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);`;

export const StyledTableHead = styled.thead`
text-align:left;
color:#A1ABC9;
padding: 20px 40px;
background-color: white;
`;

export const StyledRow = styled.tr`
margin: 20px 40px;
background-color: white;
& th{
    padding: 20px 40px;
    font-weight: normal;
@media(max-width: 1000px){
    padding: 20px 10px;
}
}
`;