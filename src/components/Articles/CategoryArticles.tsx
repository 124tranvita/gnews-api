import { TopArticleCard } from "./TopArticleCard";
import { NormalArticleCard } from "./NormalArticleCard";
import { PopularArticles } from "./PopularArticles";

import { Article } from "../../utils/utilsType";

type Props = {
  topic: string;
  articles: Article[];
};

export function CategoryArticles({ topic, articles }: Props) {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="px-4 py-6 text-lg font-bold">{topic}</div>
      {/* Highlight articles */}
      <div className="grid grid-cols-4 md:grid-flow-row-dense md:grid-rows-2 items-baseline gap-1 px-4 py-2 mb-3">
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

      {/* Articles list */}
      <div className="grid grid-cols-3 gap-6 px-4 mb-4">
        {/* Articles */}
        <div className="col-span-full lg:col-span-2">
          <div className="md:columns-2">
            {articles?.map((article, index) => (
              <NormalArticleCard
                key={index}
                size={NormalArticleCard.size.LARGE}
                article={articles ? article : null}
                isLoading={false}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="col-span-full flex justify-center items-center w-full ">
            <span className="px-2 mr-1 rounded-full bg-blue-500 border border-blue-600 text-slate-200">
              1
            </span>
            <span className="px-2 ml-1 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-400">
              2
            </span>
          </div>
        </div>

        {/* Popular */}
        <div className="col-span-full lg:col-span-1">
          <PopularArticles />
        </div>
      </div>
    </div>
  );
}
