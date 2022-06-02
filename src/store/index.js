import { createStore, combineReducers } from "redux"
import tabReducer from "./reducers/tabReducer"
import messageReducer from './reducers/messageReducer'

const reducer = combineReducers({
  tabReducer,
  messageReducer
})

const store = createStore(reducer);

export default store;