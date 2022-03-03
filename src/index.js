import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Fallback from "./components/Fallback";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Fallback />}>
          <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
