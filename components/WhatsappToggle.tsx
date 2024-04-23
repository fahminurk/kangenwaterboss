"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { FaSquareWhatsapp, FaPhoneFlip } from "react-icons/fa6";

const WhatsappToggle = () => {
  const [chat, setChat] = React.useState(false);

  return (
    <div className="fixed bottom-0 m-4 right-0 z-30">
      <div className="flex flex-col w-full items-end">
        <div
          className={cn(
            "bg-green-500 w-full flex flex-col gap-2 font-medium p-2 rounded-lg transition-all  translate-y-10 opacity-0 z-20",
            chat && "opacity-100 -translate-y-1"
          )}
        >
          <a
            href="https://wa.me/6281364226526"
            target="_blank"
            className="p-2 rounded-lg flex gap-5 justify-between items-center bg-white hover:bg-green-600 hover:text-white"
          >
            <p>Dodi</p>
            <FaPhoneFlip className="text-green-500" />
          </a>
          <a
            href="https://wa.me/628117019667"
            target="_blank"
            className="p-2 rounded-lg flex gap-5 bg-white justify-between items-center hover:bg-green-600 hover:text-white"
          >
            <p>Rijana</p>
            <FaPhoneFlip className="text-green-500" />
          </a>

          <a
            href="https://wa.me/6281268363615"
            target="_blank"
            className="p-2 rounded-lg flex gap-5 justify-between items-center bg-white hover:bg-green-600 hover:text-white"
          >
            <p>Arie</p>
            <FaPhoneFlip className="text-green-500" />
          </a>
        </div>
        <FaSquareWhatsapp
          onClick={() => setChat(!chat)}
          className="text-5xl bg-white rounded-lg right-0 md:text-7xl text-green-500 cursor-pointer z-30"
        />
      </div>
    </div>
  );
};

export default WhatsappToggle;
