import { classNames } from "../utils/classNames";

import { YoutubeEmbed } from "./YoutubeEmbed";

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

export function FeatureVideos({ variant }: Props) {
  return (
    <div className="relative px-4 mb-6">
      <div
        className={classNames(
          "article-menu-wrapper col-span-full relative flex justify-between items-center px-4 py-3 mb-8",
          VARIANT_MAPS[variant]
        )}
      >
        <span className="font-bold">Feature Videos</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <YoutubeEmbed embedId="xeeEb9MKKYA" />
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <YoutubeEmbed embedId="8ZxPKOzl6Q8" />
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <YoutubeEmbed embedId="Df45YYgqeNY" />
        </div>
      </div>
    </div>
  );
}

FeatureVideos.defaultProps = {
  variant: Variant.PRIMARY,
};

FeatureVideos.variant = Variant;
