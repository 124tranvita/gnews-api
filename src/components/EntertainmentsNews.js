import ArticlesShow from './ArticlesShow';
import { fetchEntertainments } from "../actions/fetchEntertainments";

function EntertainmentsNews() {
  return (
    <>
      <ArticlesShow keyword={"entertainments"} fetchData={fetchEntertainments} />
    </>
  )
}

export default EntertainmentsNews;