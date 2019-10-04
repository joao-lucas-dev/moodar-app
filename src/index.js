import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './reducers';
import Routes from './routes';

console.disableYellowBox = true;

const store = createStore(Reducers);

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
};

export default App;
