import { createStore, combineReducers } from "redux";
import tabReducer from "./reducers/tabReducer";
import messageReducer from "./reducers/messageReducer";

const reducer = combineReducers({
  tabReducer,
  messageReducer,
});

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer);

export default store;
