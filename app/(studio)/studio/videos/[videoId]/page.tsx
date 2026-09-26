import { VideoForm } from "@/modules/studio/ui/components/video-form";

interface VideoFormPageProps {
  params: Promise<{ videoId: string }>;
}

export default async function VideoFormPage({ params }: VideoFormPageProps) {
  const { videoId } = await params;

  return (
    <div className="flex flex-col gap-6 max-w-5xl pt-2.5 px-4">
      <div>
        <h1 className="text-2xl font-bold">Video details</h1>
        <p className="text-sm text-muted-foreground">
          Manage your video details
        </p>
      </div>
      <VideoForm />
    </div>
  );
}
