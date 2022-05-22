import ArticlesShow from "./ArticlesShow";
import { fetchPolitics } from "../actions/fetchPolitics";

function PoliticsNews() {
  return (
    <>
      <ArticlesShow keyword={"politics"} fetchData={fetchPolitics} />
    </>
  )
}

export default PoliticsNews;