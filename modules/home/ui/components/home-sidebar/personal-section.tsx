"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ListVideo, ThumbsUp, HistoryIcon } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PersonalSection() {
  const pathname = usePathname();

  const items = [
    {
      title: "History",
      url: "/playlists/history",
      icon: HistoryIcon,
      protected: true,
    },
    {
      title: "Liked videos",
      url: "/playlists/liked",
      icon: ThumbsUp,
      protected: true,
    },
    {
      title: "All playlists",
      url: "/playlists",
      icon: ListVideo,
      protected: true,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={pathname === item.url}
                render={
                  <Link href={item.url} className="flex items-center gap-4">
                    <item.icon />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                }
                // TODO: onClick: if route is protected, if user is not authenticated, open Sign-in modal
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
