import { classNames } from "../../utils/classNames";

enum Size {
  LARGE,
  MEDIUM,
  SMALL,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.LARGE]: "h-a3",
  [Size.MEDIUM]: "h-a4",
  [Size.SMALL]: "h-a5",
};

type Props = {
  size: Size;
};

export function TopArticleLoader({ size }: Props) {
  return (
    <div className={classNames("relative max-w-full", SIZE_MAPS[size])}>
      <div className="absolute inset-0 z-0 opacity-20 bg-gray-200"></div>
      <div className="animate-pulse absolute bottom-0 left-0 right-0 z-10 max-w-full flex flex-col justify-end items-start p-4 text-white">
        <div className="grid grid-rows-3 gap-4 w-full">
          <div className="w-52 bg-slate-200 h-2 rounded"></div>
          <div className="w-full bg-slate-200 h-4 rounded"></div>
          <div className="w-24 bg-slate-200 h-2 rounded"></div>
        </div>
      </div>
    </div>
  );
}

TopArticleLoader.defaultProps = {
  size: Size.LARGE,
};

TopArticleLoader.size = Size;
