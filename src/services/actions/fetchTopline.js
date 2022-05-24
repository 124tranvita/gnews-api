import {
  FETCH_TOPLINE,
  FETCH_TOPLINE_SUCCESS,
  FETCH_TOPLINE_FAILED,
} from "./constants";
import { fetchToplineService } from "../../middleware";

const fetchData = () => ({
  type: FETCH_TOPLINE,
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_TOPLINE_SUCCESS,
  payload: articles,
});

const fetchDataFailed = (error) => ({
  type: FETCH_TOPLINE_FAILED,
  payload: error,
});

export const fetchTopline = (lang, token) => {
  return (dispatch) => {
    dispatch(fetchData());
    fetchToplineService(lang, token)
      .then((articles) => dispatch(fetchDataSuccess(articles)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};
