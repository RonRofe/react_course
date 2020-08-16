import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axious from 'axios';

axious.interceptors.request.use((request) =>{
    console.log(request);
    return request;
});

axious.interceptors.response.use((response) => {
    console.log(response);
    return response;
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
