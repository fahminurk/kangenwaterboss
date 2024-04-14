"use client";
import { navbar } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col p-4 font-bold bg-gradient-to-t bg-blue-900">
        <div className="flex flex-col justify-center items-center">
          <img src="/enagic.png" alt="logo" className="w-20 h-20" />
          <p className="text-2xl md:text-4xl text-white">KANGEN WATER BOSS</p>
        </div>
      </div>
      <div
        id="navbar"
        className={cn(
          "flex z-10 sticky -top-0.5 justify-center gap-5 overflow-hidden h-10 border-y-2 font-bold border-blue-900 transition-all",
          isScrolled ? "bg-blue-900 border-white text-gray-300" : "bg-white"
        )}
      >
        {navbar.map((item, i) => (
          <Link href={item.link} key={i}>
            <div
              className={cn(
                "-translate-y-[68px] hover:translate-y-0 duration-300",
                path === item.link && "bg-blue-900"
              )}
            >
              <p className={"mb-7 p-2 bg-blue-900 text-white"}>{item.name}</p>
              <p
                className={cn(
                  "mb-7 p-2",
                  path === item.link && "text-white bg-blue-900"
                )}
              >
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
