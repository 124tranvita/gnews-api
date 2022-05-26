import { FETCH_POLITICS, FETCH_POLITICS_SUCCESS, FETCH_POLITICS_FAILED } from './constants';
import { fetchArticlesService } from '../../utils/fetchAPIService';

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

export const fetchPolitics = (token, lang) => {
  return (dispatch) => {
    dispatch(fetchData());
    fetchArticlesService(token, lang, 'politics')
      .then((articles) => dispatch(fetchDataSuccess(articles)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};
