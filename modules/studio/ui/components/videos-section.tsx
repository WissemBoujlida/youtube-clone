"use client";

import { useState } from "react";

import { InfiniteScroll } from "@/components/infinite-scroll";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function VideosSection() {
  const router = useRouter();

  const [data, setData] = useState([
    {
      id: 1,
      title: "How I Built My First SaaS",
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
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead className="text-right pr-6">Likes</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => router.push(`/studio/videos/${item.id}`)}
                className="hover:cursor-pointer"
              >
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.visibility}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.date.toDateString()}</TableCell>
                <TableCell>{item.views}</TableCell>
                <TableCell>{item.comments}</TableCell>
                <TableCell>{item.likes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
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
