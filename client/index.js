import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
