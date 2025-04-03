import Image from "next/image";
import Header from "./(commom)/components/header";
import Footer from "./(commom)/components/footer";
import Tabs from "./(commom)/components/tabs";
import SwiperSlider from "./(commom)/components/slick";
// import Slider from "react-slick";

export default function Home() {
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      {/* <FaChevronLeft /> */}
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      {/* <FaChevronRight /> */}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <Header />

      <div className="bg-black text-white">
        {/* <div className="sticky top-0 z-0 inset-0"> */}
        {/* </div> */}

        <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h2>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Work Email"
                className="px-4 py-3 w-64 text-black rounded-md bg-white"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-md">
                GET STARTED NOW!
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/hexnode-kiosk.webp"
              alt="Devices showcasing Hexnode"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      <div
        className="text-white py-8"
        style={{ backgroundColor: "oklch(0.22 0.03 270.85)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left  border-gray-700 pt-6">
          {/* IDC */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logos/idc.webp" alt="IDC" className="h-10 mb-2" />
            <p className="text-gray-300 text-sm">
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          {/* Gartner */}
          <div className="flex flex-col items-center md:items-start border-l border-gray-700 pl-6">
            <img
              src="/logos/gartner.webp"
              alt="Gartner"
              className="h-10 mb-2"
            />
            <p className="text-gray-300 text-sm">
              Hexnode was recognized in the 2025 Gartner® Market Guide for
              Unified Endpoint Management Tools.
            </p>
          </div>

          {/* Forrester */}
          <div className="flex flex-col items-center md:items-start border-l border-gray-700 pl-6">
            <img
              src="/logos/forrester.webp"
              alt="Forrester"
              className="h-10 mb-2"
            />
            <p className="text-gray-300 text-sm">
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </div>

      <Tabs />

      <section className=" px-6 py-12 bg-white text-black">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className=" text-black px-3 py-1 rounded-lg">
            What additional possibilities does the Kiosk mode offer?
          </span>
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-50 md:w-1/3">
            <img
              src="/effortless-kiosk-deployement-image.webp"
              alt="Kiosk Mode"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="font-bold text-lg">
                Effortless kiosk deployment & management
              </h3>
              <p className="text-gray-600 text-sm">
                Deploy kiosk-enabled devices straight out of the box. Flash a
                custom Android Enterprise, Samsung Knox or ROM with Hexnode App
                on the devices by collaborating with OEM vendors who provide
                specially configured ROMs.
              </p>
              <p className="text-red-500 font-semibold cursor-pointer">
                TRY FOR FREE &gt;
              </p>
            </div>

            {/* <hr /> */}

            <h3 className="font-semibold text-lg">
              Customized interface for brand visibility
            </h3>
            {/* <hr /> */}

            <h3 className="font-semibold text-lg">
              What more can you do with Hexnode kiosk?
            </h3>
            {/* <hr /> */}

            <h3 className="font-semibold text-lg">
              Secure and update your app ecosystem
            </h3>
            {/* <hr /> */}

            <h3 className="font-semibold text-lg">
              Provide an easy-to-use interface for end-users
            </h3>
          </div>
        </div>
      </section>

      {/* <div className="max-w-2xl mx-auto ">
        <Slider {...settings}>
          <div>
            <img src="/hexnode-kiosk.webp" alt="Slide 1" />
          </div>
          <div>
            <img src="/hexnode-kiosk.webp" alt="Slide 2" />
          </div>
          <div>
            <img src="/hexnode-kiosk.webp" alt="Slide 3" />
          </div>
        </Slider>
      </div> */}

      {/* <SimpleSlider /> */}
      {/* <SwiperSlider /> */}
      

      <div>
        {/* Platforms Supported */}
        <section className="text-center py-12 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900">
            Platforms supported
          </h2>
          <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
            {/* Platform Icons */}
            {[
              { name: "Android", img: "/logos/android.svg" },
              { name: "Windows", img: "/logos/windows.svg" },
              { name: "iOS", img: "/logos/ios.svg" },
              { name: "Android TV", img: "/logos/android-tv.svg" },
              { name: "Apple TV", img: "/logos/apple-tv.svg" },
              { name: "Fire", img: "/logos/fire.webp" },
            ].map((platform, index) => (
              <div key={index} className="border p-3 rounded-lg shadow-md">
                <img src={platform.img} alt={platform.name} className="h-8" />
              </div>
            ))}
          </div>
        </section>

        {/* Sign-up Section */}
        <section className="bg-gray-900 text-white text-center py-10">
          <h2 className="text-2xl font-semibold">
            Sign up and try Hexnode free for 14 days!
          </h2>
          <div className="mt-6 flex justify-center gap-3">
            <input
              type="email"
              placeholder="Your Work Email"
              className="px-4 py-2 rounded-md text-gray-800 w-64 bg-white"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
              GET STARTED
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            No credit cards required.{" "}
            <span className="text-red-400 cursor-pointer">Request a demo</span>
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
}
