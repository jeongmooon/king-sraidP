import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import WriteProvider from './context/providers/WriteProvider';
import UserProvider from './context/providers/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WriteProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </WriteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
