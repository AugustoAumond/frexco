import { BrowserRouter, Route } from 'react-router-dom'; 

import { Provider } from 'react-redux';

import Homepage from './routes/Homepage';
import Cart from './routes/RouteCart'
import store from './services/redux/store';

function MyRoutes (){
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route path='/' exact component={Homepage}/>
                <Route path='/cart' exact component={Cart}/>
            </Provider>
        </BrowserRouter>
    )
}

export default MyRoutes;