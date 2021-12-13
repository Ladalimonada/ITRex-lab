

export const customStyles = {
  container: (provided:{}) => ({
    ...provided,
    width: '27vw',
    margin: '16px 0 0 0',
    fontSize: '17px',
    '@media only screen and (max-width: 1300px)': {
      width: '100%',
    },
  }),
  valueContainer: (provided:{}) => ({
    ...provided,
    padding: '0',
  }),
  control: (provided:{}, { menuIsOpen }:{ menuIsOpen:boolean } ) => ({
    ...provided,
    height: '54px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '17px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: 'none',
    border: `1px solid ${menuIsOpen ? '#7297FF' : '#DCE0EC'}`,
    '&:hover': {
      border: '1px solid #7297FF',
    },
  }),
  dropdownIndicator: (provided:{}, { menuIsOpen }:{ menuIsOpen:boolean }) => ({
    ...provided,
    color: menuIsOpen ? '#7297FF' : '#DCE0EC',
    transform: menuIsOpen ? 'rotate(180deg)' : null,
    transition: 'all .4s ease-out',
    '&:hover': {
      color: '#7297FF',
    },
  }),
  input: (provided:{}) => ({
    ...provided,
    color: 'black',
    marginLeft: '24px',
  }),
  option: (provided:{}, { isFocused, isActive }:{ isFocused:boolean, isActive:boolean }) => ({
    ...provided,
    color: 'black',
    paddingLeft: '24px',
    backgroundColor: isFocused || isActive ? '#F9FAFF' : 'white',
  }),
  indicatorSeparator: (provided:{}) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided:{}) => ({
    ...provided,
    color: '#A1ABC9',
    marginLeft: '24px',
  }),
  singleValue: (provided:{}) => ({
    ...provided,
    marginLeft: '24px',
  }),
};
