import React from "react";
import Select from "react-select";
import { useState } from "react";

export default function SearchArticle({ name, onChange, value }) {
    const options = [
        { value: "fever", label: "Fever" },
        { value: "headache", label: "Headache" },
        { value: "vomiting", label: "Vomiting" },
        { value: "fatigue", label: "Fatigue" },
    ];

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
            name={name}
            options={options}
            classNamePrefix="select"
            styles={customStyles}
            closeMenuOnSelect={false}
            placeholder="What disease are you curious about?"
        />
    );
}
