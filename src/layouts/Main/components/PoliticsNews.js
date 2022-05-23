import { ListArticles } from "../../../components/ShowArticles";
import { fetchPolitics } from "../../../services/actions/fetchPolitics";

function PoliticsNews() {
  return (
    <>
      <ListArticles keyword={"politics"} fetchData={fetchPolitics} />
    </>
  );
}

export default PoliticsNews;
