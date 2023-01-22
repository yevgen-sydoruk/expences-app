import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        console.log("here2");
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpanseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
