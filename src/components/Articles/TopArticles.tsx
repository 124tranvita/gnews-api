import { useAppSelector } from "../../app/hook";
import { TopArticleCard } from "./TopArticleCard";

export function TopArticles() {
  const articles = useAppSelector((state) => state.toplineArticles.articles);

  return (
    <div className="grid grid-cols-4 md:grid-flow-row-dense md:grid-rows-2 items-baseline gap-1 px-4 py-2">
      <div className="col-span-full md:col-span-2 md:row-span-2">
        <TopArticleCard
          size={TopArticleCard.size.LARGE}
          article={articles ? articles[6] : null}
        />
      </div>
      <div className="col-span-full md:col-span-2 md:row-span-1">
        <TopArticleCard
          size={TopArticleCard.size.MEDIUM}
          article={articles ? articles[7] : null}
        />
      </div>
      <div className="col-span-full md:col-span-1 md:row-span-1">
        <TopArticleCard
          size={TopArticleCard.size.SMALL}
          article={articles ? articles[8] : null}
        />
      </div>
      <div className="col-span-full md:col-span-1 md:row-span-1">
        <TopArticleCard
          size={TopArticleCard.size.SMALL}
          article={articles ? articles[9] : null}
        />
      </div>
    </div>
  );
}
