import {
  FETCH_LATEST,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_FAILED,
  CHANGE_LATEST_TOPIC,
} from "./constants";
import { fetchLatestArticlesService } from "../../middleware";

const fetchData = () => ({
  type: FETCH_LATEST,
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_LATEST_SUCCESS,
  payload: articles,
});

const fetchDataFailed = (error) => ({
  type: FETCH_LATEST_FAILED,
  payload: error,
});

export const fetchLatest = (topic, lang, token) => {
  return (dispatch) => {
    dispatch(fetchData());
    fetchLatestArticlesService(topic, lang, token)
      .then((articles) => dispatch(fetchDataSuccess(articles)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};

export const changeLatestTopic = (topic) => ({
  type: CHANGE_LATEST_TOPIC,
  payload: topic,
});
