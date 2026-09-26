import { Skeleton } from "@/components/ui/skeleton";

export function VideoThumbnailSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="shrink-0 w-36 h-20 rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  );
}
