'use strict';

import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import CardForm from '../card-form';
import CardItem from '../card-item';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {cardCreate} from '../../action/card-actions.js';

class CategoryItem extends React.Component {
  render(){
    let {category, categoryUpdate, categoryDelete, cards} = this.props;
    console.log('__CARDS__', cards);
    return(
      <section className='category-item'>
        <div className='content-container'>
          <div className='content'>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div className='exditing'>
            <CategoryForm buttonText='update' category={category} onComplete={categoryUpdate} />
          </div>
        </div>
        <div className='card-container'>
          <CardForm categoryID={category.id} buttonText='create card' onComplete={this.props.cardCreate} />
          <ul className='card-items'>
            {cards.map((card) =>
              <CardItem key={card.id} card={card} />
            )}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  cards: state.cards[props.category.id]
});

const mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  cardCreate: (card) => dispatch(cardCreate(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
