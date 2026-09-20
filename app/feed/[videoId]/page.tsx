interface VideoPageProps {
  params: Promise<{ videoId: string }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { videoId } = await params;

  return (
    <div>
      <p className="text-2xl font-bold">Video Page: {videoId}</p>
    </div>
  );
}
