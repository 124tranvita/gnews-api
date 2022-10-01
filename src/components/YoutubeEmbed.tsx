type Props = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: Props) {
  return (
    <div className="relative overflow-hidden h-52">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute top-0 left-0 h-full w-full"
      ></iframe>
    </div>
  );
}
