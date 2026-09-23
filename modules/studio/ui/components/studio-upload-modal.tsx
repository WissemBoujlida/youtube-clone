"use client";

import { useState } from "react";
import { Plus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ResponsiveModal } from "@/components/responsive-modal";

export function StudioUploadModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        <Plus className="size-4" />
        Create
      </Button>
      <ResponsiveModal
        open={open}
        onOpenChange={(open: boolean) => {
          setOpen(open);
        }}
        title="Upload a video"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center w-32 h-32 bg-muted rounded-full">
            <Upload className="size-10 text-muted-foreground group-active:animate-bounce transition-all duration-300" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className=" text-sm font-semibold">
              Drag and drop video files to upload
            </p>
            <p className="text-xs text-muted-foreground">
              Your videos will be private until you publish them
            </p>
          </div>

          <Button
            type="button"
            className="px-4 py-2 rounded-full text-sm font-semibold"
          >
            Select files
          </Button>
        </div>
      </ResponsiveModal>
    </>
  );
}
