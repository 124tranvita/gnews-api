import { FETCH_SEARCH, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILED, SHOW_RESULT_MODAL, CLOSE_RESULT_MODAL } from "../actions/constants";
import { fetchSearchArticlesService } from "../services/fetchAPIService";

const fetchData = () => ({
  type: FETCH_SEARCH
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: articles
});

const fetchDataFailed = (error) => ({
  type: FETCH_SEARCH_FAILED,
  payload: error
});

export const fetchSearch = (keyword, lang, from, to) => {
  return dispatch => {
    dispatch(fetchData());
    fetchSearchArticlesService(keyword, lang, from, to)
      .then(articles => dispatch(fetchDataSuccess(articles)))
      .catch(error => dispatch(fetchDataFailed(error)));
  }
};

export const showResultModal = () => ({
  type: SHOW_RESULT_MODAL
});

export const closeResultModal = () => ({
  type: CLOSE_RESULT_MODAL
});