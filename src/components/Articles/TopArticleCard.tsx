import { TopArticleLoader } from "./../Loader/TopArticleLoader";

import { classNames } from "../../utils/classNames";
import { Article } from "../../utils/utilsType";

enum Size {
  LARGE,
  MEDIUM,
  SMALL,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.LARGE]: "h-a3 text-2xl",
  [Size.MEDIUM]: "h-a4 text-lg",
  [Size.SMALL]: "h-a5 text-md",
};

type Props = {
  size: Size;
  article: Article;
};

export function TopArticleCard({ size, article }: Props) {
  if (!article) {
    return (
      <>
        <TopArticleLoader size={size} />
      </>
    );
  }
  return (
    <div
      className={classNames(
        "relative max-w-full animate-fade-in-down",
        SIZE_MAPS[size]
      )}
    >
      <img
        src={article.image}
        className={classNames("w-full object-cover", SIZE_MAPS[size])}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black transition-opacity opacity-100 hover:opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-full flex flex-col justify-end items-start p-4 text-white">
        <p className="text-sm border border-white px-2">
          {article.source?.name}
        </p>
        <a
          href={article.url}
          target="_blank"
          className="article-title-truncate font-semibold my-2 hover:text-slate-200"
        >
          {article.title}
        </a>

        <p className="text-xs">{article.publishedAt}</p>
      </div>
    </div>
  );
}

TopArticleCard.defaultProps = {
  size: Size.LARGE,
};

TopArticleCard.size = Size;
