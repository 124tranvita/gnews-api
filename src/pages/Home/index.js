import { ViewLatest, ViewHighlight } from '../../components/ActiclesView';

function Home() {
  return (
    <>
      <ViewLatest />
      <ViewHighlight keyword={'politics'} />
      <ViewHighlight keyword={'sports'} />
      <ViewHighlight keyword={'entertainment'} />
    </>
  );
}

export default Home;
