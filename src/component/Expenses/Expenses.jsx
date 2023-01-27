import './Expenses.css';
import ExpenenseItem from './ExpenseItem'
import Card from '../Ui/Card';
import React from 'react';

const Expenses = (props) => {
    console.log("helloRavi"+props.item[0].date )
    return(
        <Card className='expenses'>
        {
            props.item.map(
                expense => (
                    <ExpenenseItem 
                    title = {expense.title }
                    date = { expense.date}
                    amount = { expense.amount }/> 
            )
            )
        }



        {/*<ExpenenseItem 
        title = {props.item[0].title }
        date = { props.item[0].date}
        amount = { props.item[0].amount } /> 
      


       <ExpenenseItem 
        title = {props.item[1].title }
        date = { props.item[1].date}
        amount = { props.item[1].amount } /> 
       

        <ExpenenseItem 
        title = {props.item[2].title }
        date = { props.item[2].date}
        amount = { props.item[2].amount } /> 
     

        <ExpenenseItem 
        title = {props.item[3].title }
        date = { props.item[3].date}
        amount = { props.item[3].amount } /> 
       
    */}
      

        </Card>
    );
    
}
export default Expenses;