import { createStore, combineReducers } from "redux";
import listReducer from "./lists/list.reducer";
import validationReducer from './validation/validation.reducer'

const rootReducer = combineReducers({
    list: listReducer,
    validation: validationReducer,
});

const store = createStore(rootReducer);

export default store;