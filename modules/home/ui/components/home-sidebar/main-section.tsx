"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Flame, HomeIcon, PlaySquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainSection() {
  const pathname = usePathname();

  const items = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
      protected: false,
    },
    {
      title: "Subscriptions",
      url: "/feed/subscriptions",
      icon: PlaySquare,
      protected: true,
    },
    {
      title: "Trending",
      url: "/feed/trending",
      icon: Flame,
      protected: true,
    },
  ];

  return (
    <SidebarGroup>
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
