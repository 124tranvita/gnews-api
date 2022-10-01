import { classNames } from "../../utils/classNames";

enum Size {
  LARGE,
  SMALL,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.LARGE]: "flex-col",
  [Size.SMALL]: "flex-row",
};

type Props = {
  size: Size;
};

export function NormalArticleLoader({ size }: Props) {
  return (
    <div
      className={classNames(
        "relative flex px-4 md:px-0 md:pr-4 mb-6 gap-4 animate-pulse",
        SIZE_MAPS[size]
      )}
    >
      <div
        className={`${
          SIZE_MAPS[size].includes("flex-col")
            ? "w-full h-52"
            : "w-1/3 max-h-20"
        } bg-slate-200`}
      ></div>
      <div
        className={`${
          SIZE_MAPS[size].includes("flex-col") ? "w-full" : "w-2/3"
        } flex flex-col justify-between`}
      >
        <div className="w-full mb-4 bg-slate-200 h-4 rounded"></div>
        <div className="w-32 bg-slate-200 h-3 rounded"></div>
      </div>
    </div>
  );
}

NormalArticleLoader.defaultProps = {
  size: Size.LARGE,
};

NormalArticleLoader.size = Size;
