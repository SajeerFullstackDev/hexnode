import Header from "./(common)/components/header";
import Footer from "./(common)/components/footer";
import Tabs from "./(common)/components/tabs";
import SwiperSlider from "./(common)/components/slick";
import FloatingButton from "./(common)/components/floatbtn";
import KioskFeatures from "./(common)/components/features";
import Form from "./(common)/components/form";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-[#0B0E14] text-white">
        <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-5xl lg:text-5xl font-bold">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h2>
            <Form />
          </div>

          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/hexnode-kiosk.webp"
              alt="Devices showcasing Hexnode"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </div>





      <div
        className="text-white py-8"
        style={{ backgroundColor: "oklch(0.22 0.03 270.85)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left  border-gray-700 pt-6">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logos/idc.webp" alt="IDC" className="h-10 mb-2" />
            <p className="text-gray-300 text-sm">
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start sm:border-none md:border-l border-gray-700 pl-6">

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

          <div className="flex flex-col items-center md:items-start sm:border-none md:border-l border-gray-700 pl-6">

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

      <KioskFeatures />

      <div>
        <h2 className="text-4xl font-semibold text-black text-center p-8">
          Sign up and try Hexnode free for 14 days!
        </h2>
        <SwiperSlider />
      </div>

      <section className="text-center py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            Platforms supported
          </h2>
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            {[
              { name: "Android", img: "/logos/android.svg" },
              { name: "Windows", img: "/logos/windows.svg" },
              { name: "iOS", img: "/logos/ios.svg" },
              { name: "Android TV", img: "/logos/android-tv.svg" },
              { name: "Apple TV", img: "/logos/apple-tv.svg" },
              { name: "Fire", img: "/logos/fire.webp" },
            ].map((platform, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white text-center py-10">
        <h2 className="text-2xl font-semibold">
          Sign up and try Hexnode free for 14 days!
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          {/* <Form/> */}

          <input
            type="email"
            placeholder="Your Work Email"
            className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-64 bg-white"
          />
          <button className="animate-pulse bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold w-full sm:w-auto">
            GET STARTED
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-2">
          No credit cards required.{" "}
          <span className="text-red-400 cursor-pointer">Request a demo</span>
        </p>
      </section>

      <Footer />

      <FloatingButton />
    </>
  );
}
