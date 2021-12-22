import styled from 'styled-components';

export const StyledRow = styled.tr`
margin: 20px 40px;
background-color: white;
& td{
    padding: 20px 40px;
@media(max-width: 1000px){
    padding: 20px 10px;
}
}
`;