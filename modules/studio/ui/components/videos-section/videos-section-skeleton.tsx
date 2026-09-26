import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { VideoThumbnailSkeleton } from "@/modules/studio/ui/components/video-thumbnail/video-thumbnail-skeleton";

export function VideosSectionSkeleton() {
  return (
    <TableBody>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell className="pl-6 w-[510px]">
            <VideoThumbnailSkeleton />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-24" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-12 mx-auto" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-12 mx-auto" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-12 mx-auto" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
