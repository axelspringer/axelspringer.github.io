import ReactDOM from 'react-dom';
import React from 'react';

import App from 'containers/App/App';

import '../node_modules/normalize.css/normalize.css'

import 'index.html';
import 'styles/normalize.scss';
import 'styles/base.scss';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
