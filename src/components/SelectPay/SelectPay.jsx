import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';

export const SelectPay = ({ handleSelect }) => {

  const options = [
    { value: '1', label: 'Банковская карта' },
    { value: '2', label: 'Биткоин' },
    { value: '3', label: 'Выставить счет' }
  ]

  const customStyles = {
    option: (provided) => ({
      ...provided,
      padding: 20,
      cursor: "pointer",
      color: "#fff",
      width: 392,
      height: 40,
      display: "flex",
      alignItems: "center",
      backgroundColor: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      borderBottom: "1px solid #2e354b",
      ":hover": {
        backgroundColor: "#fff",
        color: "#2e354b",
      }
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3C4561",
      width: 392,
      border: "none",
      marginBottom: 0,
    }),

    control: (provided) => ({
      ...provided,
      width: 392,
      backgroundColor: "#3C4561",
      border: "none",
      borderRadius: 5,
      boxShadow: "none",
      height: 40,
      cursor: "pointer",
    }),

    singleValue: () => ({
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
    }),

    valueContainer: (provided) => ({
      ...provided,
      ":before": {
        content: '" "',
        display: 'flex',
        marginRight: 19,
        marginLeft: 11,
        height: 15,
        width: 20,
        marginBottom: 2,
        backgroundImage: 'url("card.svg")',
        backgroundPosition: "center",
      }
    }),

    indicatorsContainer: () => ({
      display: "flex",
      marginRight: 22,
    }),

    indicatorSeparator: () => ({
      backgroundColor: "#000",
    })
  }

  const DropdownIndicator = () => (
    <img src="dd.svg" />
  )


  return (
  <Select
    defaultValue={options[0]}
    options={options}
    styles={customStyles}
    components={{DropdownIndicator}}
    isSearchable={false}
    onChange={handleSelect}
  />
  )
}

SelectPay.propTypes = {
  handleSelect: PropTypes.func.isRequired,
}

