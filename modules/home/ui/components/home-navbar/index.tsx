import Image from "next/image";
import Link from "next/link";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchBar } from "@/modules/home/ui/components/home-navbar/search-bar";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white flex items-center px-2 pr-5">
      <div className="flex items-center gap-4 w-full">
        {/* Sidebar trigger & Logo */}
        <div className="flex items-center shrink-0">
          <SidebarTrigger />

          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-semibold tracking-tight">
                NewTube
              </span>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-[720px] justify-center mx-auto">
          <SearchBar />
        </div>

        {/* Sign in button */}
        <div className="flex items-center gap-4 shrink-0">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
