const TAB_CHANGE = 'TAB_CHANGE';
const CHANGE_TAB = (text) => {
  return {
    type: TAB_CHANGE,
    text,
  }
}

export { TAB_CHANGE, CHANGE_TAB }