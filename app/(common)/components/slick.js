"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Justin Modrak",
    role: "Technology Coordinator",
    company: "East Troy Community School District",
    image: "/justin-modrak.webp",
    quote: "Hexnode is of great value. Works great with Android and iOS!",
  },
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp Solutions",
    image: "/chris-robinson.webp",
    quote:
      "Most complete MDM solution I found, and I tested many of them, including major names",
  },
  {
    name: "Chris Robinson",
    role: "IT Manager",
    company: "TechCorp Solutions",
    image: "/dalibor-kruljac.webp",
    quote: "It seemed to be in-line with everything we were looking at.",
  },
];

export default function SwiperSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full flex items-center justify-center p-5">
      {/* Navigation Arrows */}
      {/* <div
        ref={prevRef}
        className="swiper-button-prev left-0 md:left-[-60px] absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer"
      >
        ◀
      </div> */}
      <div className="w-full max-w-3xl mx-auto bg-white relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={70}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="rounded-lg shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white text-white flex items-center justify-center h-64"
            >
              <div>
                <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
                  <div className="w-full h-[280px] sm:h-[400px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] overflow-hidden">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                    <div className="md:max-h-[125px] px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px]">
                      <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased">
                        "{testimonial.quote}"
                      </h4>
                    </div>
                    <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                      <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                      <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                        {testimonial.name}
                      </p>
                      <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                        {testimonial.role}
                      </small>
                      <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                        {testimonial.company}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div
        ref={nextRef}
        className="swiper-button-next right-0 md:right-[-60px] absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer"
      >
        ▶
      </div> */}
    </div>
  );
}
