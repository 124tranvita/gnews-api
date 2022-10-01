import { useAppSelector } from "../app/hook";
import { CategoryArticles } from "../components/Articles/CategoryArticles";

export function Travel() {
  const articles = useAppSelector((state) => state.travelArticles.articles);

  return (
    <div className="animate-fade-in-down">
      <CategoryArticles topic={"Travel"} articles={articles} />
    </div>
  );
}
