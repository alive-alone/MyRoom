import { createStore, combineReducers } from "redux"
import tabReducer from "./reducers/tabReducer"

const reducer = combineReducers({
  tabReducer,
})

const store = createStore(reducer);

export default store;