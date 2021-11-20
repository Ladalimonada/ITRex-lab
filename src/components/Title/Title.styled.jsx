import styled from 'styled-components';

export const StyledTitle = styled('h2')`
margin: ${(props) => props.margin};
font-weight: 600;
font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (1920 - 320)));
`;
