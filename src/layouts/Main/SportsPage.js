import { ArticlesPage } from "../../components/ShowArticles";
import { fetchSports } from "../../services/actions/fetchSports";

function SportsPage() {
  return (
    <>
      <ArticlesPage keyword={"sports"} fetchData={fetchSports} />
    </>
  );
}

export default SportsPage;
