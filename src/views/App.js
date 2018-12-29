import React from 'react';
import { Provider } from 'react-redux';
import store from './../store';
import GlobalRoutes from './../route';
import '../axios';
import './../static/style/reset.css';
import './../static/font/iconfont.css';

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();
// console.log(history.location);

const App = () => (
    <Provider store={store}>
        <GlobalRoutes/>
    </Provider>
)

export default App;