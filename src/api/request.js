import { get } from "./api";
import { API_GET_HOUSE_LIST, API_GET_CODE_JSON } from "./url"
function getHouseList(pages) {
  return get(API_GET_HOUSE_LIST, pages)
}
function getCodeJson() {
  return get(API_GET_CODE_JSON)
}


export {
  getHouseList,
  getCodeJson
}


