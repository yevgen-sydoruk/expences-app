import React from "react";
import { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2024'>2020</option>
                    <option value='2023'>2019</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
