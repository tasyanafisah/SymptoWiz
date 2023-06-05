import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function SearchBar({
    name,
    onChange,
    value,
    placeholder,
    options,
    isMulti = true,
}) {
    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#fff",
            backgroundColor: state.isFocused ? "#2C274F" : "#211D3B",
        }),
        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#211D3B",
            padding: "8px",
            border: "none",
            boxShadow: "none",
            color: "white",
        }),

        multiValue: (defaultStyles, { data }) => ({
            ...defaultStyles,
            backgroundColor: "#AFADC1",
        }),
        multiValueLabel: (defaultStyles, { data }) => ({
            ...defaultStyles,
            color: "#2C274F",
            margin: "2px 4px",
        }),
        multiValueRemove: (defaultStyles, { data }) => ({
            ...defaultStyles,
            color: "#2C274F",
            ":hover": {
                backgroundColor: "#2C274F",
                color: "#AFADC1",
                borderRadius: 0,
            },
        }),
        input: (defaultStyles) => ({
            ...defaultStyles,
            color: "#AFADC1",
        }),
        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#2C274F",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };

    return (
        <Select
            // defaultValue={[options[2], options[3]]}
            value={value}
            onChange={onChange}
            isMulti={isMulti}
            name={name}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={customStyles}
            closeMenuOnSelect={false}
            placeholder={placeholder}
        />
    );
}
