import styled from 'styled-components';

export const StyledAuthContainer = styled.div`
display: flex;
margin: ${(props) => props.margin};
@media (max-width: 600px) {
    margin-top: 0;
}`;
