import { useAppSelector } from "../../app/hook";
import { TopArticleCard } from "./TopArticleCard";

export function TopArticles() {
  const articles = useAppSelector((state) => state.toplineArticles.articles);

  return (
    <div className="flex flex-col md:flex-row items-baseline gap-1 px-4 py-2">
      <div className="mb-[0.25rem] flex-1">
        <TopArticleCard
          size={TopArticleCard.size.LARGE}
          article={articles ? articles[6] : null}
        />
      </div>
      <div className="flex-1 gap-1">
        <div className="mb-[0.25rem]">
          <TopArticleCard
            size={TopArticleCard.size.MEDIUM}
            article={articles ? articles[7] : null}
          />
        </div>
        <div className="flex flex-wrap items-baseline gap-1">
          <div className="w-full md:flex-1">
            <TopArticleCard
              size={TopArticleCard.size.SMALL}
              article={articles ? articles[8] : null}
            />
          </div>
          <div className="w-full md:flex-1">
            <TopArticleCard
              size={TopArticleCard.size.SMALL}
              article={articles ? articles[9] : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
