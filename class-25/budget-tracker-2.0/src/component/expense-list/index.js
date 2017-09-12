'use strict';

import React from 'react';
import ExpenseForm from '../expense-form';

class ExpenseList extends React.Component {
  render(){
    return(
      <section className='expense-list'>
        <ul>
          {this.props.expenses.map((ele, i) =>
            <li key={i}>
              <button onClick={() => this.props.expenseRemove(ele)}>X</button>
              <div>
                <p>title: {this.title}</p>
                <p>price: {this.price}</p>
              </div>
              <ExpenseForm expense={ele} submitTitle='update expense' handleSubmit={(expense) => {
                expense.id = item.id;
                this.props.expenseUpdate(expense);
              }} />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default ExpenseList;
