import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <p className="p-20 text-center bg-gradient-to-b from-blue-900 to-white text-white  text-6xl font-bold">
        Have any Questions?
      </p>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="font-bold text-4xl text-blue-900">CONTACT US</p>
          <p className="text-justify font-light">
            For those residing in Batam - Indonesia, you are welcome to visit
            our Kangen Water® office and showroom located in Batam . Visitation
            can be arranged via appointment.
          </p>
          <p className="font-bold">Showroom address:</p>
          <p className="text-justify font-light">
            Jl. Tiban BTN Blok S No. 57, Tiban Indah, Sekupang, Kota Batam,
            Kepulauan Riau, Indonesia.
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.8739635112297!2d103.9808015759949!3d1.119586046791428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b8b6a67e76f%3A0x4d23d6e77bb3eb59!2sKangen%20water%20Batam%20Joss!5e0!3m2!1sen!2sid!4v1713250984655!5m2!1sen!2sid"
        className="w-full"
        height="600"
        loading="lazy"
      />
    </div>
  );
};

export default page;
