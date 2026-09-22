import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StudioUploadModal() {
  return (
    <Button type="button" variant="secondary">
      <Plus className="size-4" />
      Create
    </Button>
  );
}
