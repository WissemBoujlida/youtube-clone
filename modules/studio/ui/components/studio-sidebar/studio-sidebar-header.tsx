import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";

interface User {
  imageUrl: string;
  username: string;
  fullName: string;
}

export function StudioSidebarHeader() {
  const { state } = useSidebar();

  const user: User = {
    imageUrl: "https://cdn-icons-png.flaticon.com/128/4322/4322991.png",
    username: "john-doe",
    fullName: "John Doe",
  };

  if (!user) {
    return (
      <SidebarHeader className="flex justify-center items-center pb-4">
        <Skeleton className="size-[112px] rounded-full"></Skeleton>
        <div className="flex flex-col items-center gap-2 mt-2">
          <Skeleton className="w-[80px] h-4"></Skeleton>
          <Skeleton className="w-[100px] h-4"></Skeleton>
        </div>
      </SidebarHeader>
    );
  }

  if (state === "collapsed") {
    return (
      <SidebarHeader className="flex justify-center items-center pb-4">
        <Link href={"/account"}>
          <UserAvatar
            imageUrl={user.imageUrl}
            username={user.username}
            size="sm"
          />
        </Link>
      </SidebarHeader>
    );
  }

  return (
    <SidebarHeader className="flex justify-center items-center pb-4">
      <UserAvatar
        className="size-[112px] hover:opacity-80 transition-opacity"
        imageUrl={user.imageUrl}
        username={user.username}
      />
      <div className="flex flex-col items-center gap-1 mt-2">
        <span className="text-sm font-medium">Your profile</span>
        <span className="text-xs text-muted-foreground">{user.fullName}</span>
      </div>
    </SidebarHeader>
  );
}
