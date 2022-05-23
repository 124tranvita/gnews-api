import {
  FETCH_POLITICS,
  FETCH_POLITICS_SUCCESS,
  FETCH_POLITICS_FAILED,
} from "../actions/constants";
import { fetchArticlesService } from "../../middleware";

const fetchData = () => ({
  type: FETCH_POLITICS,
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_POLITICS_SUCCESS,
  payload: articles,
});

const fetchDataFailed = (error) => ({
  type: FETCH_POLITICS_FAILED,
  payload: error,
});

export const fetchPolitics = (lang) => {
  return (dispatch) => {
    dispatch(fetchData());
    fetchArticlesService("politics", lang)
      .then((articles) => dispatch(fetchDataSuccess(articles)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};
