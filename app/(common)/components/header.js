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
        isScrolled ? "bg-white shadow-md" : "bg-black"
      }`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4">
        <Image
          src="/logos/brand.png"
          alt="Logo"
          width={300}
          height={300}
          className={`${
            isScrolled ? "filter grayscale-0" : "filter brightness-0 invert"
          }`}
        />
        <button
          className="animate-pulse bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-red-700 hover:shadow-lg active:scale-95"
          onClick={() => router.push("/mobile-device-management/cloud/signup/")}
        >
          14 DAY FREE TRIAL
        </button>
      </nav>
    </div>
  );
};

export default Header;
