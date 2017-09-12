'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import appStoreCreate from './lib/app-create-store.js';
import App from './component/app';

const store = appStoreCreate();

const AppContainer = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDom.render(<AppContainer />, document.getElementById('root'));
