import Image from "next/image";
import Link from "next/link";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "./studio-upload-modal";

export function StudioNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white px-2 pr-5 flex items-center shadow-lg border-b">
      <div className="w-full flex items-center">
        {/* sidebar trigger & logo */}
        <div className="flex items-center shrink-0">
          <SidebarTrigger />

          <Link href="/studio">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <span className="text-xl font-semibold tracking-tight">
                Studio
              </span>
            </div>
          </Link>
        </div>

        {/* create button & auth button */}
        <div className="flex items-center gap-4 shrink-0 ml-auto">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
