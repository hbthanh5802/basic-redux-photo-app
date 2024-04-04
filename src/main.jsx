import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '@/components/GlobalStyles';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
