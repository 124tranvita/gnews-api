import { FETCH_ENTMT, FETCH_ENTMT_SUCCESS, FETCH_ENTMT_FAILED } from "./constants";
import { fetchArticlesService } from "../services/fetchAPIService";

const fetchData = () => ({
  type: FETCH_ENTMT
})

const fetchDataSuccess = (articles) => ({
  type: FETCH_ENTMT_SUCCESS,
  payload: articles
})

const fetchDataFailed = (error) => ({
  type: FETCH_ENTMT_FAILED,
  payload: error
})

export const fetchEntertainments = (lang) => {
  return dispatch => {
    dispatch(fetchData());
    fetchArticlesService("entertainments", lang)
      .then(articles => dispatch(fetchDataSuccess(articles)))
      .catch(error => dispatch(fetchDataFailed(error)));
  }
}