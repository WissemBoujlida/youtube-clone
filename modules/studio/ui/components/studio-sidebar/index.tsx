"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut, Video } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { StudioSidebarHeader } from "@/modules/studio/ui/components/studio-sidebar/studio-sidebar-header";

export function StudioSidebar() {
  const pathname = usePathname();

  const items = [
    {
      title: "Content",
      url: "/studio/videos",
      icon: Video,
      protected: true,
    },

    {
      title: "Exit studio",
      url: "/",
      icon: LogOut,
      protected: true,
    },
  ];

  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <StudioSidebarHeader />

      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.url === pathname}
                    render={
                      <Link
                        href={item.url}
                        className="flex items-center gap-4 p-2"
                      >
                        <item.icon className="size-5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
