import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
