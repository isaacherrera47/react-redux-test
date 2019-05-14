import currentItem from "./reducers/currentItem";
import suggestions from "./reducers/suggestions";
import results from "./reducers/results";
import {combineReducers, createStore} from "redux";


const reducer = combineReducers({results, suggestions, currentItem});
const store = createStore(reducer);

export default store;
