import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { myStore } from './App/myStore';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={myStore}>
      <App/>
    </Provider>
  </BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
