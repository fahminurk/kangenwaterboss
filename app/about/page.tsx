import React from "react";

const page = () => {
  const about = [
    {
      title: "What Is Kangen Water?",
      desc: `Kangen Water is a name of alkaline drinking water created through electrolysis process using water ionzer made by our Japanese company, Enagic, that has been established since 1974.`,
    },
    {
      title: "Made in Japan",
      desc: `Our machines are individually assembled by artisans and then inspected, tested, and certified by highly-trained QC engineers.

Get fast and efficient support from our experienced technicians and international service centers when needed. Always ask your water-ionization system provider for the kind of support service and warranty you will get from them.`,
    },
    {
      title: "History",
      desc: `In 1974 in Okinawa, Japan, Sony’s trading operation, the precursor of Enagic, began operations. Ever since, Enagic commitment to high quality products, innovation and True Health philosophy has made it the leader of water ionizer generating systems, now distributed globally.`,
    },
  ];

  const certification = [
    {
      title: "ISO",
      desc: `Our company is certified to ISO 9001, ISO 14001, and ISO 13485 for
              quality control and environmental management from International
              Organization for Standardization (ISO).`,
      img: "/iso.png",
    },
    {
      title: "WQA",
      desc: `Gold Seal certification has been granted to our company by Water
              Quality Association (WQA) .`,
      img: "/wqa_low.png",
    },
    {
      title: "DSA",
      desc: `Our company is a member in good standing of the prestigious Direct
              Selling Association (DSA).`,
      img: "/dsa.png",
    },
    {
      title: "BBB",
      desc: `Our company received A+ accreditation given by Better Business
              Bureau (BBB)`,
      img: "/bbb.png",
    },
  ];
  return (
    <div className="flex flex-col gap-10 pb-5">
      <div className="flex flex-col  gap-5 lg:gap-0 [&>*:nth-child(even)]:flex-row-reverse">
        {about.map((item) => (
          <div key={item.title} className="lg:flex">
            <div className="lg:w-1/2 flex justify-center items-center bg-gradient-to-t lg:bg-gradient-to-l from-white via-blue-500 to-blue-900 h-96 p-4">
              <p className="text-3xl font-bold text-white">{item.title}</p>
            </div>
            <div className="text-lg lg:w-1/2 flex justify-center items-center px-20 bg-white">
              <p className="text-justify text-sm md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex-col md:sticky top-14 text-center md:text-start  h-max flex row-span-2 gap-2">
            <p className="text-blue-700 ">Our Certifications</p>
            <p className="text-xl font-bold">
              International Awards and Certifications
            </p>
            <p className="text-sm font-light">
              Enagic Kangen Water International has received numerous AWARDS and
              CERTIFICATIONS from highly respected third party organizations,
              such as ISO, WQA, DSA, etc
            </p>
          </div>
          {certification.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 items-center md:items-start"
            >
              <img src={item.img} alt="" className="w-32" />
              <p className="font-bold">{item.title}</p>
              <p className="font-light text-justify">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 bg-blue-900 rounded-lg text-white ">
          <div className="col-span-2 p-5 lg:border-r">
            <p className="text-justify">
              "Since its founding in 1974, Enagic has been recognized as a
              premier, specialized manufacturer of high quality water ionizer
              generating systems. The human body is comprised of 70% water. It
              is no exaggeration to say that "the basis of vitality and long
              life is water." Enagic offers safe water that can be used with
              confidence to benefit health, beauty, cleaning and cuisine. Enagic
              is an integrated development, manufacturing, sales and service
              company of alkaline ionizer technology. As the evolution of
              information technology continues we have entered the age of "human
              technology marketing." Market vitality now depends upon a merging
              of high technology and the personal relationship between human
              beings. Enagic is teaming up with an international network of
              offices and numerous distributors around the world to spread the
              word "water and health" while building a global company with
              worldwide operations."
            </p>
            <div className="flex justify-end pt-5">
              <div className="flex flex-col items-center">
                <img src="sign.png" alt="" className="invert" />
                <p className="text-sm">CEO Enagic International, Inc</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <p className="text-4xl font-bold">Executive Team</p>
            <div className="flex gap-3">
              <img src="hironari.jpg" alt="" className="" />
              <div>
                <p className="font-bold">Hironari Ohshiro</p>
                <p className="font-light text-sm">
                  CEO Enagic International, Inc.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="yaeko.jpg" alt="" className="" />
              <div>
                <p className="font-bold">Yaeko Ohshiro</p>
                <p className="font-light text-sm">Enagic International</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
