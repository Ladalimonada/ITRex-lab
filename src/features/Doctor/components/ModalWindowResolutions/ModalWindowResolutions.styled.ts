import styled from 'styled-components';
import cancelImg from '../../../../img/cancel.png';
import checkImg from '../../../../img/check-white.png';
import createImg from '../../../../img/clipboard-white.png';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

export const StyledDialog = styled(Dialog)`
  width:30%;
  margin: 26vh auto;
  padding: 0;
  border-radius: 16px;
  @media(max-width: 1400px) {
    width:60%;
  } 
  @media(max-width: 1000px) {
    width:80%;
  }
`;

export const ModalContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
background-color: white;
padding:40px;
border-radius: 16px;
`;

export const ModalTitle = styled.h3`
font-weight: 600;
font-size: 20px;
margin-bottom: 24px;`;

export const ModalUserNameContainer = styled.div`
display: flex;
margin-bottom: 24px;`;

export const ModalUserName = styled.h4`
font-weight: 600;
font-size: 15px;
margin-bottom: 16px;`;

export const ModalLabel = styled.label`
margin-bottom:16px;
font-weight: 500;
font-size: 13px;
color: #A1ABC9;
overflow-y: auto;
`;

export const ModalTextArea = styled.textarea`
resize: none;
width:100%;
min-height: 160px;
padding: 16px 25px;
border: 1px solid #DCE0EC;
border-radius: 8px;
`;

export const ModalFooter = styled.div`
padding: 32px 40px;
display: flex;
justify-content: space-between;
background-color: #F9FAFF;
border-radius: 0 0 16px 16px;
`;

const Button = styled.button`
padding: 12px 16px;
border-radius: 8px;
min-width: 120px;
display:flex;
justify-content:flex-end;
span{
  font-weight: 600;
    font-size: 15px;
    position: relative;
}
`;

export const CancelButton = styled(Button)`
border: 1px solid #DCE0EC;
background-color: white;
color: #A1ABC9;
span::before {
  content: 
        url(${cancelImg});
        position: absolute;
        top: 0;
        left: -40px;
}
`;

export const SaveButton = styled(Button)`
background-color: #7297FF;
color: white;
span {
    color: white;
}
span::before {
  content: url(${checkImg});
        position: absolute;
        top: 0;
        left: -50px;
}
`;

export const CreateButton = styled(Button)`
background-color: #7297FF;
span {
    color: white;
}
span::before {
  content: url(${createImg});
        position: absolute;
        top: 0;
        left: -40px;
}
`;






