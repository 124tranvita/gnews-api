import { ListArticles } from "../../../components/ShowArticles";
import { fetchSports } from "../../../services/actions/fetchSports";

function SportsNews() {
  return (
    <>
      <ListArticles keyword={"sports"} fetchData={fetchSports} />
    </>
  );
}

export default SportsNews;
