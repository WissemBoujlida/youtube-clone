"use client";

import { useEffect, useState } from "react";
import { cn } from "cn";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCarouselProps {
  selectedValue?: String | null;
  onSelect?: (value: String | null) => void;
  isLoading?: boolean;
  items: { label: String; value: String }[];
}

export function FilterCarousel({
  selectedValue,
  onSelect,
  isLoading,
  items,
}: FilterCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "absolute left-12 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none",
          current === 1 && "hidden", // hide fade for 1st item
        )}
      />

      <Carousel
        setApi={setApi}
        className="w-full px-12"
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-3">
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <Skeleton className="w-[100px] h-full px-3 py-1 rounded-lg">
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}

          {!isLoading && (
            <CarouselItem className="pl-3 basis-auto">
              <Badge
                variant={!selectedValue ? "default" : "secondary"}
                className="text-sm rounded-lg px-3 py-1 whitespace-nowrap cursor-pointer"
                onClick={() => onSelect?.(null)}
              >
                All
              </Badge>
            </CarouselItem>
          )}

          {!isLoading &&
            items.map((item) => (
              <CarouselItem
                key={item.value}
                className="pl-3 basis-auto"
                onClick={() => onSelect?.(item.value)}
              >
                <Badge
                  variant={
                    selectedValue === item.value ? "default" : "secondary"
                  }
                  className="text-sm rounded-lg px-3 py-1 whitespace-nowrap cursor-pointer"
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      <div
        className={cn(
          "absolute right-12 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none",
          current === count && "hidden", // hide fade from last element
        )}
      />
    </div>
  );
}
