import axios from 'axios';

const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

//console.log("Today is: ", today.toISOString());
//console.log("Yesterday is: ", yesterday.toISOString());

export const fetchToplinesAPI = ({ token, lang }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?token=${token}&lang=${lang}`)
      .then((response) => {
        resolve(response.data.articles);
      })
      .catch((error) => reject(error));
  });
};

export const fetchArticlesAPI = ({ token, lang, keyword }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://gnews.io/api/v4/search?q=${keyword}&token=${token}&lang=${lang}`)
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};

export const fetchSearchArticlesAPI = ({ token, lang, keyword, from, to }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${keyword}&token=${token}&lang=${lang}&from=${from}T00:00:00Z&to=${to}T00:00:00Z`,
      )
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};

export const fetchLatestArticlesAPI = ({ token, lang, topic }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?topic=${topic}&token=${token}&lang=${lang}&from=${yesterday.toISOString()}&to=${today.toISOString()}`,
      )
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};
