import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../data/images";
import { Thumbs } from "swiper";

export const SwiperUI = () => {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = images.map((image) => {
    return (
      <SwiperSlide>
        <img src={image.url} alt="slider images" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Day-60 Swiper JS with React</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};
