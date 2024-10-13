import * as ReactDOMClient from 'react-dom/client';

import App from './components/app/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
