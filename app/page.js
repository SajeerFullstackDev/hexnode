import Header from "./(common)/components/header";
import Footer from "./(common)/components/footer";
import Tabs from "./(common)/components/tabs";
import SwiperSlider from "./(common)/components/slick";
import FloatingButton from "./(common)/components/floatbtn";

export default function Home() {
  return (
    <>
      <Header />

      <div className="bg-black text-white">
        <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center">
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
              <button className="bg-red-600 text-white px-3 py-3 rounded-md animate-pulse">
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

      <Tabs />

      <div>
        <h2 className="text-4xl font-semibold text-black text-center p-8">
          Sign up and try Hexnode free for 14 days!
        </h2>
        <SwiperSlider />
      </div>

      <section className="bg-gray-900 text-white text-center py-10">
        <h2 className="text-2xl font-semibold">
          Sign up and try Hexnode free for 14 days!
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
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
