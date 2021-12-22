import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { menuStyles, menuItemStyles, StyledLink, menuItemStylesColored } from './CustomMenu.styled';
import menuButtonPicsvg from '../../../src/img/more-vertical.svg';
import menuButtonPicsvgBlue from '../../../src/img/more-vertical-blue.svg';
import '@szhsin/react-menu/dist/index.css';
import { CustomMenuProps } from './CustomMenu.types';
import { useLocation } from 'react-router-dom';

export const CustomMenu = ({ menuItems }: CustomMenuProps) => {
  const location = useLocation();
  return (
    <Menu
      menuStyles={menuStyles}
      direction='bottom'
      position='auto'
      offsetY={4}
      offsetX={-220}
      menuButton={
        ({ open }) =>
          <MenuButton>{open ? <img src={menuButtonPicsvgBlue} alt="menu" /> :
            <img src={menuButtonPicsvg} alt="menu" />}
          </MenuButton>}>
      {
        menuItems.map(({ title, onClick, path, isColored }) => (
          path ? 
          <StyledLink key={path} to={path} state={{ backgroundLocation: location }}>
          <MenuItem styles={ isColored ? menuItemStylesColored : menuItemStyles}
            onClick={onClick}
            key={title}>
            {title}
          </MenuItem>
          </StyledLink> :
          <MenuItem styles={menuItemStyles}
          onClick={onClick}
          key={title}>
          {title}
        </MenuItem>
        ))
      }
    </Menu>
  );
};