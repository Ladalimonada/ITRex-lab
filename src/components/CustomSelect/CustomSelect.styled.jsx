/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '27vw',
    margin: '16px 0 0 0',
    fontSize: '17px',
    '@media only screen and (max-width: 1300px)': {
      width: '100%',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  control: (provided, state) => ({
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
    border: state.selectProps.menuIsOpen ? '1px solid #7297FF' : '1px solid #DCE0EC',
    '&:hover': {
      border: '1px solid #7297FF',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuIsOpen ? '#7297FF' : '#DCE0EC',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    transition: 'all .4s ease-out',
    '&:hover': {
      color: '#7297FF',
    },
  }),
  input: (provided) => ({
    ...provided,
    color: 'black',
    marginLeft: '24px',
  }),
  option: (provided, { isFocused, isActive }) => ({
    ...provided,
    color: 'black',
    paddingLeft: '24px',
    backgroundColor: isFocused || isActive ? '#F9FAFF' : 'white',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#A1ABC9',
    marginLeft: '24px',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: '24px',
  }),
};
