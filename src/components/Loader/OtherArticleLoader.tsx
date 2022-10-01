import { classNames } from "../../utils/classNames";

const template = [
  { index: 1, textArea: "" },
  { index: 2, textArea: "" },
  { index: 3, textArea: "" },
  { index: 4, textArea: "" },
  { index: 5, textArea: "" },
];

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

export function OtherArticleLoader({ variant }: Props) {
  return (
    <div className="">
      <div
        className={classNames(
          "article-menu-wrapper col-span-full relative flex justify-between items-center px-4 py-3 mb-8",
          VARIANT_MAPS[variant]
        )}
      >
        <span className="font-bold">Most Popular</span>
      </div>
      {template.map((item) => (
        <div
          key={item.index}
          className="flex justify-start items-start mb-4 animate-pulse"
        >
          <span className="py-1 px-3 mr-4 rounded-md text-white font-semibold bg-slate-500">
            {item.index}
          </span>
          <div className="bg-slate-200 h-4 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
}

OtherArticleLoader.defaultProps = {
  variant: Variant.PRIMARY,
};

OtherArticleLoader.variant = Variant;
