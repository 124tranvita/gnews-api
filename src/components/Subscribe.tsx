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

import data from "../assets/dev-data/articles.json";

export function Subscribe({ variant }: Props) {
  return (
    <div className="relative mb-6">
      <div className="flex flex-col justify-center items-center px-8 bg-emerald-500 w-auto h-64">
        <h1 className="font-bold text-3xl text-white">Subscribe</h1>
        <p className="text-base text-white py-4">
          Get all latest content delivered to your email a few times a month.
        </p>
        <form className="w-full">
          <div className="relative">
            <input type="email" className="p-2 rounded-md w-full" required />
            <button
              type="submit"
              className="absolute top-0 bottom-0 right-2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Subscribe.defaultProps = {
  variant: Variant.PRIMARY,
};

Subscribe.variant = Variant;
