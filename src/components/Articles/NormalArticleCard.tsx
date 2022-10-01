import { NormalArticleLoader } from "../Loader/NormalArticleLoader";
import { classNames } from "../../utils/classNames";
import { Article } from "../../utils/utilsType";

enum Size {
  LARGE,
  SMALL,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.LARGE]: "flex-col text-xl",
  [Size.SMALL]: "flex-row text-sm",
};

type Props = {
  size: Size;
  article: Article;
  isLoading: boolean;
};

export function NormalArticleCard({ size, article, isLoading }: Props) {
  if (!article || isLoading) {
    return (
      <>
        <NormalArticleLoader size={size} />
      </>
    );
  }

  return (
    <div
      className={classNames(
        "relative flex md:pr-4 mb-6 gap-4 font-semibold animate-fade-in",
        SIZE_MAPS[size]
      )}
    >
      <img
        src={article.image}
        alt={article.title}
        className={`${
          SIZE_MAPS[size].includes("flex-col")
            ? "w-full h-52"
            : "w-1/3 max-h-20"
        } object-cover`}
      />
      <div
        className={`${
          SIZE_MAPS[size].includes("flex-col") ? "w-full" : "w-2/3"
        } flex flex-col justify-between`}
      >
        <a
          href={article.url}
          target="_blank"
          className="text-slate-900 hover:text-black"
        >
          {article.title}
        </a>
        <p className="text-xs text-slate-500 pt-2">{article.publishedAt}</p>
      </div>
    </div>
  );
}

NormalArticleCard.defaultProps = {
  size: Size.LARGE,
};

NormalArticleCard.size = Size;
