import {
  FETCH_SPORTS,
  FETCH_SPORTS_SUCCESS,
  FETCH_SPORTS_FAILED,
} from "../actions/constants";
import { fetchArticlesService } from "../../middleware";

const fetchData = () => ({
  type: FETCH_SPORTS,
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_SPORTS_SUCCESS,
  payload: articles,
});

const fetchDataFailed = (error) => ({
  type: FETCH_SPORTS_FAILED,
  payload: error,
});

export const fetchSports = (lang, token) => {
  return (dispatch) => {
    dispatch(fetchData());
    fetchArticlesService("sport", lang, token)
      .then((articles) => dispatch(fetchDataSuccess(articles)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};
