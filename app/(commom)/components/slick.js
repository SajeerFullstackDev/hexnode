"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSlider() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide className="bg-blue-500 text-white flex items-center justify-center h-64">
          <div>
            <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group ">
              <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden ">
                <img
                  alt="Justin Modrak image"
                  src="https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png"
                />
              </div>
              <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                <div className="md:max-h-[125px] px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px] cusreviewslider_hide-scrollbar__lQqUC">
                  <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased ">
                    "Hexnode is of great value. Works great with Android and
                    iOS!"
                  </h4>
                </div>
                <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                  <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                  <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold ">
                    Justin Modrak
                  </p>
                  <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                    Technology Coordinator
                  </small>
                  <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                    East Troy Community School District
                  </small>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-500 text-white flex items-center justify-center h-64">
          <div>
            <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group ">
              <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden ">
                <img
                  alt="Justin Modrak image"
                  src="https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png"
                />
              </div>
              <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                <div className="md:max-h-[125px] px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px] cusreviewslider_hide-scrollbar__lQqUC">
                  <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased ">
                    "Hexnode is of great value. Works great with Android and
                    iOS!"
                  </h4>
                </div>
                <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                  <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]"></span>
                  <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold ">
                    Justin Modrak
                  </p>
                  <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                    Technology Coordinator
                  </small>
                  <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                    East Troy Community School District
                  </small>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
