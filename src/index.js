import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';

import AuthLayout from 'modules/AuthLayout/AuthLayout';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <App />
          </AuthLayout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
