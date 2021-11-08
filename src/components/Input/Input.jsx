import styled from 'styled-components';

export const Input = styled.input`
width: 368px;
margin-top: 3.9vh;
padding: 16px 0 16px 64px;
border: 1px solid #DCE0EC;
border-radius: 8px;
background-image: url(${(props) => props.img});
background-repeat: no-repeat;
background-position: 26px 16px;
background-color: $white;
position: relative;
 ::placeholder {
    font-size: calc(15px + (17 - 15) * ((100vw - 320px) / (1920 - 320)));
    color: #A1ABC9;
}
 :focus {
    border: 1px solid #7297FF;
}
@media (max-width: 600px) {
    width: inherit;
    padding: 8px 0 8px 48px;
    background-position: 16px 8px;
}
`;
