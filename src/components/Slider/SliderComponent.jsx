import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Data } from "./data";

const SliderComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  {
    /*// conditionally render the Swiper component based on the screen width using 
    React state and the useEffect hook.*/
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="ml-[60px] mt-[50px] ">
        <p>Our Work</p>
        <h1 className="text-4xl mt-[10px] font-bold">
          vital component of global transportation,{" "}
          <p>connecting people and goods</p>
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col h-[900px] ">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: false,
            el: ".swiper-pagination",
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {Data.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[510px] w-[476px] lg:h-[510px] lg:w-[476px] cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

                <p className="absolute bottom-5 left-5 w-[60px] h-[55px] text-white opacity-0 group-hover:opacity-100 group-hover:text-white-500 ">
                  Consent Directive for provincial integrated client management
                  system
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
