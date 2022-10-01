type Props = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: Props) {
  return (
    <div className="relative overflow-hidden h-52">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  );
}
