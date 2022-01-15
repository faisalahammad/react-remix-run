import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';

let rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
