import axios from "axios";

function fetchToplineService() {
  return new Promise((resolve, reject) => {
    axios.get("https://gnews.io/api/v4/top-headlines?token=10e13746a0fb36c8875e6d93887a79fee&lang=en")
      .then(response => {
        resolve(response.data.articles)
      })
      .catch(error => reject(error))
  })
}

export default fetchToplineService;