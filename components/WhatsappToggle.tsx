import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";

const WhatsappToggle = () => {
  return (
    <a
      href="https://wa.me/6282173766879"
      target="_blank"
      className="fixed bottom-0 m-4 right-0 group"
    >
      <div
        style={{ writingMode: "vertical-rl" }}
        className="bg-white w-full flex justify-center items-center py-5 md:text-4xl font-bold rotate-180 rounded-b-lg group-hover:opacity-100 opacity-0 transition-all translate-y-10 group-hover:-translate-y-1"
      >
        chat
      </div>
      <FaSquareWhatsapp className="text-5xl md:text-7xl text-green-500 cursor-pointer zoom-in-90" />
    </a>
  );
};

export default WhatsappToggle;
