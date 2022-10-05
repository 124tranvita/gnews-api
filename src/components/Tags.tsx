import { classNames } from "../utils/classNames";

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

export function Tags({ variant }: Props) {
  return (
    <div className="relative mb-6">
      <div
        className={classNames(
          "article-menu-wrapper col-span-full relative flex justify-between items-center px-4 py-3 mb-8",
          VARIANT_MAPS[variant]
        )}
      >
        <span className="font-bold">Tags</span>
      </div>
      <div className="mb-6">
        <span className="cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Sport
        </span>
        <span className="mx-4 cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Life Style
        </span>
        <span className="cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Politics
        </span>
      </div>
      <div className="mb-6">
        <span className="cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Social
        </span>
        <span className="mx-2 cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Fashion
        </span>
        <span className="cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Denim
        </span>
      </div>
      <div>
        <span className="cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          News
        </span>
        <span className="mx-2 cursor-pointer border border-gray-300 py-2 px-3 rounded-xl text-gray-500 dark:text-gray-100">
          Blogs
        </span>
      </div>
    </div>
  );
}

Tags.defaultProps = {
  variant: Variant.PRIMARY,
};

Tags.variant = Variant;
