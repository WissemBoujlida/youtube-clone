"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Globe2, Lock } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { VideoThumbnail } from "@/modules/studio/ui/components/video-thumbnail";
import { VideosSectionSkeleton } from "@/modules/studio/ui/components/videos-section/videos-section-skeleton";

export function VideosSection() {
  const router = useRouter();

  const isLoading = true;
  const [data, setData] = useState([
    {
      id: 1,
      title: "How I Built My First SaaS",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-09-20"),
      views: 12500,
      comments: 342,
      likes: 1840,
    },
    {
      id: 2,
      title: "10 TypeScript Tips You Should Know",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-09-18"),
      views: 8700,
      comments: 186,
      likes: 923,
    },
    {
      id: 3,
      title: "Building a REST API with Spring Boot",
      description: "No description",
      visibility: "private",
      status: "ready",
      date: new Date("2026-09-15"),
      views: 0,
      comments: 0,
      likes: 0,
    },
    {
      id: 4,
      title: "My New Developer Setup",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-09-12"),
      views: 5400,
      comments: 94,
      likes: 612,
    },
    {
      id: 5,
      title: "Understanding Java Streams",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-09-10"),
      views: 3200,
      comments: 47,
      likes: 284,
    },
    {
      id: 6,
      title: "PostgreSQL Performance Tips",
      description: "No description",
      visibility: "private",
      status: "ready",
      date: new Date("2026-09-07"),
      views: 0,
      comments: 0,
      likes: 0,
    },
    {
      id: 7,
      title: "Angular 20 Crash Course",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-09-05"),
      views: 22100,
      comments: 517,
      likes: 2145,
    },
    {
      id: 8,
      title: "Clean Architecture Explained",
      description: "No description",
      visibility: "public",
      status: "processing",
      date: new Date("2026-09-03"),
      views: 0,
      comments: 0,
      likes: 0,
    },
    {
      id: 9,
      title: "Docker for Backend Developers",
      description: "No description",
      visibility: "private",
      status: "ready",
      date: new Date("2026-08-29"),
      views: 0,
      comments: 0,
      likes: 0,
    },
    {
      id: 10,
      title: "Hibernate and JPA Best Practices",
      description: "No description",
      visibility: "public",
      status: "ready",
      date: new Date("2026-08-25"),
      views: 18700,
      comments: 389,
      likes: 1562,
    },
  ]);

  return (
    <div>
      <div className="border-y">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6 w-[510px]">Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Views</TableHead>
              <TableHead className="text-center">Comments</TableHead>
              <TableHead className="text-center pr-6">Likes</TableHead>
            </TableRow>
          </TableHeader>

          {isLoading ? (
            <VideosSectionSkeleton />
          ) : (
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  onClick={() => router.push(`/studio/videos/${item.id}`)}
                  className="hover:cursor-pointer"
                >
                  <TableCell className="pl-6 w-[510px]">
                    <VideoThumbnail
                      title={item.title}
                      description={item.description}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.visibility === "private" ? (
                        <Lock className="size-4 mr-2" />
                      ) : (
                        <Globe2 className="size-4 mr-2" />
                      )}
                      {item.visibility}
                    </div>
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.date.toDateString()}</TableCell>
                  <TableCell className="text-center">{item.views}</TableCell>
                  <TableCell className="text-center">{item.comments}</TableCell>
                  <TableCell className="text-center pr-6">
                    {item.likes}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>

      <InfiniteScroll
        isManual={true}
        hasNextPage={true}
        isFetchingNextPage={false}
        fetchNextPage={() => {
          setData((prev) => [
            ...prev,
            {
              id: 11,
              title: "Doomsday",
              description: "No description",
              visibility: "private",
              status: "failed",
              date: new Date("2012-12-12"),
              views: 0,
              comments: 0,
              likes: 0,
            },
          ]);
        }}
      />
    </div>
  );
}
