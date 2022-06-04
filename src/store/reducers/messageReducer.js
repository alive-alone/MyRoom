import {
  UPDATE_MESSAGE_CHAT,
  UPDATE_MESSAGE_NOTICE,
} from "../actionTypes/messageTypes";

const initState = {
  messages: [],
  notices: [],
};

const reducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case UPDATE_MESSAGE_CHAT:
      newState.messages = action.messages;
      return newState;
    case UPDATE_MESSAGE_NOTICE:
      newState.notices = action.notices;
      return newState;
    default:
      return state;
  }
};

export default reducer;
