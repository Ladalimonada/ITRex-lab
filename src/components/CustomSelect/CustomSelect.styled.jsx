export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '30vw',
    margin: '16px 0 0 0',
    fontSize: '17px',
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
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuIsOpen ? '#7297FF' : '#DCE0EC',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    transition: 'all .4s ease-out',
  }),
  input: (provided) => ({
    ...provided,
    // padding: '16px 0 16px 0',
    color: 'black',
    marginLeft: '24px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    paddingLeft: '24px',
    backgroundColor: state.isFocused ? '#F9FAFF' : 'white',
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
