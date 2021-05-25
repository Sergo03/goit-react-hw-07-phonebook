import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as store from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


