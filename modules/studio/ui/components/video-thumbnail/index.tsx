import Image from "next/image";

interface VideoThumbnailProps {
  title: string;
  description: string;
  duration?: number;
  thumbnailUrl?: string;
  previewUrl?: string; // animated gif
}

export function VideoThumbnail({
  title,
  description,
  duration,
  thumbnailUrl,
  previewUrl,
}: VideoThumbnailProps) {
  return (
    <div className="flex items-center gap-4">
      {/* thumbnail */}
      <div className="relative shrink-0 group">
        <div className="relative w-36 aspect-video overflow-hidden rounded-md">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt="Thumbnail"
            fill
            className="object-cover group-hover:opacity-0"
          />

          <Image
            src={previewUrl || "/placeholder.svg"}
            alt="Preview"
            fill
            className="object-cover group-hover:opacity-100"
          />
        </div>

        {/* duration box */}
        <span className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
          {duration || "00:00"}
        </span>
      </div>

      {/* title and description */}
      <div className="flex flex-col gap-1 justify-center overflow-hidden">
        <p className="text-sm line-clamp-1">{title}</p>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
}
