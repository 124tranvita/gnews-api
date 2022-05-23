import { ArticlesPage } from "../../components/ShowArticles";
import { fetchEntertainment } from "../../services/actions/fetchEntertainment";

function EntertainmentPage() {
  return (
    <>
      <ArticlesPage keyword={"entertainment"} fetchData={fetchEntertainment} />
    </>
  );
}

export default EntertainmentPage;
