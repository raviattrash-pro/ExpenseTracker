import Expenses from './component/Expenses/Expenses'
import React,{useState} from 'react';
import ExpenseForm from './component/FormData/FormData'
const App = () => {
    {
        /* let expenseDate = new Date(2023, 0, 26);
    let expensetitle = "Food Fee";
let expenseAmount = 5000;*/
    }

    let dummyExpensesArr = [
        {
        id: 'e1',
        title: 'hotel',
        amount: 3000,
        date:new Date(2023, 0, 26)
    },
    {
        id: 'e2',
        title: 'School Fee',
        amount: 2000,
        date:new Date(2023, 0, 27)
    }, 
    {
        id: 'e4',
        title: 'Rent',
        amount: 4000,
        date:new Date(2023, 0, 28)
    }, 
    {
        id: 'e4',
        title: 'travelling',
        amount: 5000,
        date:new Date(2023, 0, 29)
    }, 
];

    const [expenses,setExpenses] = useState(dummyExpensesArr);
    
    fetch('http://localhost:8080/rent').then(
        respose => {
            return Response.json();
        }
    ).then(
        data => {
            console.log(data);
        }
    )


    const addExpenseHandler = (expense) =>{
        const updateExpense =[expense,...expenses]
        setExpenses(updateExpense);
    }

    return ( 
        <div >
        {/*<h2 > Let 's get Started !!!!</h2>  */}
        <ExpenseForm onaddExpenseHandler ={addExpenseHandler} />
        <Expenses item={ expenses } />
        </div>
    );
}
export default App;