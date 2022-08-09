import { createStore, combineReducers } from "redux";
import productsReducer from './listCart/products.reducer';
import listReducer from "./lists/list.reducer";


const rootReducer = combineReducers({
    list: listReducer,
    products: productsReducer,
});

const store = createStore(rootReducer);

export default store;