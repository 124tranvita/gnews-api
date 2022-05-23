import axios from "axios";

const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

//console.log("Today is: ", today.toISOString());
//console.log("Yesterday is: ", yesterday.toISOString());

export const fetchToplineService = (lang) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=18463347e789cd1ef9b0580044a41bc56&lang=${lang}`
      )
      .then((response) => {
        resolve(response.data.articles);
      })
      .catch((error) => reject(error));
  });
};

export const fetchArticlesService = (keyword, lang) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${keyword}&token=18463347e789cd1ef9b0580044a41bc56&lang=${lang}`
      )
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};

export const fetchSearchArticlesService = (keyword, lang, from, to) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${keyword}&token=18463347e789cd1ef9b0580044a41bc56&lang=${lang}&from=${from}T00:00:00Z&to=${to}T00:00:00Z`
      )
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};

export const fetchLatestArticlesService = (topic, lang) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?topic=${topic}&token=8463347e789cd1ef9b0580044a41bc56&lang=${lang}&from=${yesterday.toISOString()}&to=${today.toISOString()}`
      )
      .then((response) => resolve(response.data.articles))
      .catch((error) => reject(error));
  });
};
