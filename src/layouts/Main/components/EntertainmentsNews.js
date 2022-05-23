import { ListArticles } from "../../../components/ShowArticles";
import { fetchEntertainments } from "../../../services/actions/fetchEntertainments";

function EntertainmentsNews() {
  return (
    <>
      <ListArticles
        keyword={"entertainments"}
        fetchData={fetchEntertainments}
      />
    </>
  );
}

export default EntertainmentsNews;
