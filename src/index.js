import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './App';
// import { AppContainer } from 'react-hot-loader';
// import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
};

render(App);
