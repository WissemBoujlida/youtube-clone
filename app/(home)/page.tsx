import { FilterCarousel } from "@/components/filter-carousel";

export default function Home() {
  const items = [
    { label: "Gaming", value: "1" },
    { label: "Educational", value: "2" },
    { label: "DIY", value: "3" },
    { label: "Tech", value: "4" },
    { label: "Anime", value: "5" },
    { label: "Movies", value: "6" },
    { label: "Beauty", value: "7" },
  ];

  return (
    <div className="flex flex-col gap-y-6 pt-2.5 px-4 max-w-[2400px] mx-auto">
      <FilterCarousel items={items} />
    </div>
  );
}
