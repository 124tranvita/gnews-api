import { useAppSelector } from "../../app/hook";
import { OtherArticleLoader } from "../Loader/OtherArticleLoader";
import { classNames } from "../../utils/classNames";

enum Variant {
  PRIMARY,
  SUCCESSFULLY,
  DANGER,
  INDIGO,
}

type Props = {
  variant: Variant;
};

const VARIANT_MAPS = {
  [Variant.PRIMARY]: "before:bg-blue-500 text-blue-500",
  [Variant.SUCCESSFULLY]: "before:bg-green-500 text-green-500",
  [Variant.DANGER]: "before:bg-red-500 text-red-500",
  [Variant.INDIGO]: "before:bg-indigo-500 text-indigo-500",
};

export function PopularArticles({ variant }: Props) {
  const articles = useAppSelector((state) => state.toplineArticles.articles);

  if (!articles[0]) {
    return (
      <>
        <OtherArticleLoader variant={variant} />
      </>
    );
  }

  return (
    <div className="relative px-4 lg:px-0 mb-6">
      <div
        className={classNames(
          "article-menu-wrapper col-span-full relative flex justify-between items-center px-4 py-3 mb-8",
          VARIANT_MAPS[variant]
        )}
      >
        <span className="font-bold">Most Popular</span>
      </div>
      {articles.slice(5).map((article, index) => (
        <div key={index} className="flex justify-start items-start mb-4">
          <span className="py-1 px-3 mr-4 rounded-md text-white font-semibold bg-slate-500">
            {index + 1}
          </span>
          <a href={article?.url} target="_blank">
            <span className="text-slate-800 hover:text-slate-600 dark:text-slate-200 dark:hover:text-slate-300">
              {article?.title}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

PopularArticles.defaultProps = {
  variant: Variant.PRIMARY,
};

PopularArticles.variant = Variant;
