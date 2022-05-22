import ArticlesShow from './ArticlesShow';
import { fetchSports } from "../actions/fetchSports";

function SportsNews() {
  return (
    <>
      <ArticlesShow keyword={"sports"} fetchData={fetchSports} />
    </>
  )
}

export default SportsNews;