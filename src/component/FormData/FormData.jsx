import React,{useState} from 'react';
import './FormData.css';
import ExpenseForm from './ExpenseForm'
const FormData = (props) => {
     
    const SaveFormData = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onaddExpenseHandler(expenseData)
        console.log(expenseData);
    };

    return (
        <div className='form-data'>
           <ExpenseForm  onSaveFormData = {SaveFormData}/> 
        </div>
    );
}

export default FormData;
