import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, browserHistory } from 'react-router/lib';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);



/* eslint-disable no-console */
console.log('hello world');
