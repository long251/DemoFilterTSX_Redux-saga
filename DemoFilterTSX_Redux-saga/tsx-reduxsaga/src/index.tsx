import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import vi from '@shopify/polaris/locales/vi.json';
import storeRedux from './Redux/Store/storeRedux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
    <AppProvider i18n={vi}>
    <App />
    </AppProvider>
    </Provider>
  </React.StrictMode>
);

