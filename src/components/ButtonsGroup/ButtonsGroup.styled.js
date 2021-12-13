import styled from 'styled-components';

export const ButtonsBlock = styled.div`
display: flex;
padding-top:40px;
margin-bottom:56px;
@media (max-width:600px) {
    margin-bottom:40px;
    justify-content: space-around;
}
`;

export const StyledGroupButton = styled.button`
    font-weight: normal;
    width: 160px;
    padding: 12px 0;
    margin-right: 12px;
    color: ${(props) => (props.isActive ? '#ffffff' : '#7297FF')};
    background: ${(props) => (props.isActive ? '#7297FF' : '#ffffff')};
    border-radius: 8px;
    border: none;
    &:focus {
  outline: none;
    }
    &:hover 
    {
  border: none;
    }
    @media (max-width:600px){
        width: 120px;
        margin-right: 0;
    }
`;