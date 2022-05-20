import { TAB_CHANGE } from "../actionTypes/tabTypes"

const initState = {
  selectedTab: "/home"
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case TAB_CHANGE:
      let newState = state;
      newState.selectedTab = action.text;
      return newState;
    default:
      return state;
  }
}
export default reducer;