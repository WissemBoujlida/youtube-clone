import { CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AuthButton() {
  return (
    <Button
      variant="outline"
      className="px-4 py-2 rounded-full text-sm text-blue-600 font-medium hover:text-blue-500 shadow-none border-blue-500/20"
    >
      <CircleUser className="size-4" />
      Sign in
    </Button>
  );
}
