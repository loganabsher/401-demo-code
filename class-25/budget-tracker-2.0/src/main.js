'use strict';

import './style/main.scss';
import Navbar from './component/navbar';
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 1000,
      expenses: []
    }

    this.getApp = this.getApp.bind(this);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <section>
            <Navbar />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/home' component={() => <DashboardContainer app={this.getApp()}/>} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
