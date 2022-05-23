import { ArticlesPage } from "../../components/ShowArticles";
import { fetchPolitics } from "../../services/actions/fetchPolitics";

function PoliticsPage() {
  return (
    <>
      <ArticlesPage keyword={"politics"} fetchData={fetchPolitics} />
    </>
  );
}

export default PoliticsPage;
