import { useAppSelector } from "../app/hook";
import { CategoryArticles } from "../components/Articles/CategoryArticles";

export function Entertainment() {
  const articles = useAppSelector(
    (state) => state.entertainmentArticles.articles
  );

  return (
    <div className="animate-fade-in-down">
      <CategoryArticles topic={"Entertainment"} articles={articles} />
    </div>
  );
}
