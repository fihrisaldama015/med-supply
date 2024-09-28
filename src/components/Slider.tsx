"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "Description 1",
    img: "https://picsum.photos/800/1200",
    url: "/",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Description 2",
    img: "https://picsum.photos/800/1200",
    url: "/",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Description 3",
    img: "https://picsum.photos/800/1200",
    url: "/",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full w-max transition-all duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex h-full w-screen flex-col gap-16 lg:flex-row`}
          >
            {/* Text Container */}
            <div className="flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl font-semibold lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black px-4 py-3 text-white">
                  Beli
                </button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="relative h-1/2 w-full lg:h-full lg:w-1/2">
              <img
                src={slide.img}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 m-auto flex gap-4 rounded-lg bg-white/30 p-4 backdrop-blur-sm">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`flex h-3 w-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-neutral-900 transition-all ${
              currentSlide === index ? "scale-150" : ""
            }`}
          >
            {currentSlide === index && (
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-900"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
