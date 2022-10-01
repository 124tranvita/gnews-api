import { useAppSelector } from "../app/hook";
import { CategoryArticles } from "../components/Articles/CategoryArticles";

export function Business() {
  const articles = useAppSelector((state) => state.businessArticles.articles);

  return (
    <div className="animate-fade-in-down">
      <CategoryArticles topic={"Business"} articles={articles} />
    </div>
  );
}
