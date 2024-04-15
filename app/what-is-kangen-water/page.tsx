import { kangen } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-blue-900 to-white p-10">
        <div className="flex flex-col items-center gap-5 rounded-xl p-10 bg-gradient-to-b">
          <p className="font-bold text-2xl md:text-6xl text-white">
            What is Kangen Water?
          </p>
          <p className="text-justify font-serif max-w-[600px] text-blue-900">
            Kangen means "return to origin" in Japanese. Kangen Water® is
            alkaline water produced by Enagic's alkaline ionizer and water
            filtration machines. For more than 40 years, Kangen Water® has been
            used in Japan to help restore the body to its original, alkaline
            state. These machines can transform your ordinary tap water into
            healthy, fresh tasting alkaline drinking water. Kangen Water® is
            superior to tap and purified water.
          </p>
        </div>
      </div>
      <div className="container flex flex-col gap-5">
        <div className=" flex flex-col md:grid grid-cols-1 gap-5 justify-center items-center md:grid-cols-3">
          <p className="text-justify font-serif p-5 rounded-xl bg-blue-900 text-white">
            By choosing to drink alkaline water, you aid your body in returning
            to a balanced state. Kangen Water is a fresh, clean and great
            tasting way to maintain optimal health!
          </p>
          <img src="/what_is_kangen_stones.jpg" alt="" />
          <div className="flex flex-col gap-2 text-justify font-serif p-5 rounded-xl bg-blue-900 text-white">
            <p>
              Kangen Water does not remove many minerals that are lost in the
              process of purifying bottled water.
            </p>
            <p>
              Kangen Water has a negative oxidation-reduction potential or ORP.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
          {kangen.map((item) => (
            <div key={item.title} className="lg:flex">
              <div className="lg:w-1/2 flex justify-center items-center h-96 lg:p-5">
                <img src={item.img} alt="" />
              </div>
              <div className="text-lg lg:w-1/2 flex justify-center items-center lg:px-20 lg:border">
                <div>
                  <p className="text-center text-2xl ">{item.title}</p>
                  <p className="text-justify font-light text-sm lg:text-base ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-lg flex justify-center items-center lg:p-5">
            <div>
              <p className="text-center text-2xl">Negative ORP</p>
              <p className="text-justify font-light text-sm lg:text-base ">
                Hydrogen rich water is characterised by exhibiting a negative
                ORP. A high ORP value (in positive numbers), indicates that a
                substance has a higher oxidizing potential. In generalised
                terms, for humans a positive or high ORP is better for the
                outside of the body (cleaning and sanitizing). A low ORP value
                (in negative numbers) indicates that a substance has a higher
                antioxidizing potential, and is preferred for oral consumption.
                Just like pH, ORP values are an important measurement for
                determining the quality of water.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
