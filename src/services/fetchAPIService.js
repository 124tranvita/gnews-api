import axios from "axios";

export const fetchToplineService = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://gnews.io/api/v4/top-headlines?token=c539d252c8d0a7349c82e59ba7012c7a&lang=en")
      .then(response => {
        resolve(response.data.articles)
      })
      .catch(error => reject(error))
  })
}


export const fetchArticlesService = (keyword, lang) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://gnews.io/api/v4/search?q=${keyword}&token=c539d252c8d0a7349c82e59ba7012c7a&lang=${lang}`)
      .then(response => resolve(response.data.articles))
      .catch(error => reject(error))
  })
}