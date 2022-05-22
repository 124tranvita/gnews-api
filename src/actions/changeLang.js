import { CHANGE_LANG } from "../actions/constants";

export const changeLang = (lang) => ({
  type: CHANGE_LANG,
  payload: lang
});
