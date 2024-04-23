"use client";
import React, { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { videos } from "@/constants";

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: any) => {
    if (currentVideoIndex !== null && currentVideoIndex !== index) {
      videoRefs.current[currentVideoIndex].pause();
    }
    setCurrentVideoIndex(index);
  };

  return (
    <div className="container flex flex-col gap-5">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          src="https://drive.google.com/file/d/1_Z5wT5dUctYbj-xK5QyljXzap2gnCw1c/preview"
          className="absolute w-full h-full rounded-lg top-0 left-0 right-0 bottom-0"
        />
      </div>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {videos.map((val, index) => (
              <CarouselItem key={index} className="w-full md:basis-1/2">
                <div className="">
                  <p className="p-2 rounded-t-lg font-bold lg:text-xl text-center bg-blue-900 text-white">
                    {val.title}
                  </p>
                  <video
                    // @ts-ignore
                    ref={(el) => (videoRefs.current[index] = el!)}
                    src={val.url}
                    controls
                    className="w-full rounded-b-lg"
                    onPlay={() => handlePlay(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default VideoCarousel;
