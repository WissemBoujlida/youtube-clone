import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function VideoCategoriesCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/2">
          <Button>Education</Button>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Button>Gaming</Button>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <Button>How to and styles</Button>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
