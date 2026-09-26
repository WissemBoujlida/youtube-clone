interface VideoPlayerProps {
  playbackUrl?: string;
  thumbnailUrl?: string;
  autoplay?: boolean;
  onPlay?: () => void;
}

export function VideoPlayer({
  playbackUrl,
  thumbnailUrl,
  autoplay,
  onPlay,
}: VideoPlayerProps) {
  if (!playbackUrl) return null;

  return (
    <video
      src={playbackUrl}
      poster={thumbnailUrl || "/placeholder.svg"}
      onPlay={onPlay}
      autoPlay={autoplay}
      controls
      className="w-full h-full object-contain"
    >
      <source src={playbackUrl} type="video/mp4" />
    </video>
  );
}
