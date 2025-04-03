"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4">
        {/* <h1 className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>hexnode</h1> */}
        <Image
          src="/logos/brand.png" // Replace with the actual path to your icon image
          alt="Logo"
          width={300} // Adjust size as needed
          height={300} // Adjust size as needed
          className={`${
            isScrolled ? "filter grayscale-0" : "filter brightness-0 invert"
          }`}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => router.push("/mobile-device-management/cloud/signup/")}
        >
          14 DAY FREE TRIAL
        </button>
      </nav>
    </div>
  );
};

export default Header;
