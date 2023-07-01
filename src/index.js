import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import { store } from './Store/store';
import { Provider } from 'react-redux';
import Counter from './Component/Counter';
import DestinationList from './Component/DestinationList';
import DestinationDetail from './Component/DestinationDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
    <Header/>
    <Counter/>
    <DestinationList/>
    <DestinationDetail/>
    </Provider> 

);

