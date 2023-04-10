import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { images } from "../data/images";

export const SwiperUI = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let changeThumbRef = useRef(null);

  const handleChange = (e) => {
    // handlechange function ni slide soligdonguut duudagdana. e- ni yag active bgaa swiperslide-iig ugnu

    let element = changeThumbRef.current.children[0].children;
    console.log(Array.prototype.slice.call(element));
    // active uyd thimbnail deer hargalzah zurgiigni suuderluuleh:
    // e.activeIndex - gedeg ni yag active bgaa zurgiin index
    element[e.activeIndex].children[0].children[1].style.backgroundColor =
      "rgba(0,0,0,0.5)";
    //HTML collection -iig array ruu hurvuuleh
    Array.prototype.slice.call(element).map((item, i) => {
      if (i != e.activeIndex) {
        // active bish zurgiin backgroundColoe-iig transparent bolgoj bna
        element[i].children[0].children[1].style.backgroundColor =
          "transparent";
      }
    });
  };

  return (
    <main>
      {/* undsen zurag garah swiper */}
      <Swiper
        modules={[Thumbs]}
        onSlideChange={(e) => {
          handleChange(e);
          console.log(e);
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        slidesPerView={1}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.url} style={{ width: "100%", height: "500px" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* thumbnail garah swiper - neg huudas deer 4 zurag garna */}
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        ref={changeThumbRef}
        direction="horizontal"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div style={{ position: "relative" }}>
                <img
                  src={image.url}
                  style={{ width: "100%", height: "200px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};
