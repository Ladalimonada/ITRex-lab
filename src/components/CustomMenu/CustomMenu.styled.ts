
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const menuStyles = {
  minWidth:'270px',
  border: '0px',
  borderRadius: '8 px',
  padding: '4px',
  fontSize:'15px',
};

export const menuItemStylesColored = {
  color: '#FF2567',
  padding:'8px',
  hover: {
    backgroundColor: '#F9FAFF',
    borderRadius: '6px',
  },
  active: {
    backgroundColor: '#F9FAFF',
    color:'#FF2567',
  },
  visited: {
    backgroundColor: '#F9FAFF',
  },
};

export const menuItemStyles = {
  padding:'8px',
  hover: {
    backgroundColor: '#F9FAFF',
    borderRadius: '6px',
  },
  active: {
    backgroundColor: '#F9FAFF',
    color:'black',
  },
  visited: {
    backgroundColor: '#F9FAFF',
  },
};

export const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;