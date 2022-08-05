import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';

import App from './components/logic/app';
import { store } from './store';

const divRoot = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(divRoot);

const update = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

update();
store.subscribe(update);
