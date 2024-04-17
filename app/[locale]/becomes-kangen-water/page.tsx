import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 container py-5">
      <p className="font-bold lg:p-10 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent text-6xl text-center">
        HOW YOUR TAP WATER BECOMES KANGEN WATER
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <img src="/filter.jpg" alt="" />
          <p className="text-4xl font-semibold">Step 1: Filtration</p>
          <p className="text-justify font-light">
            The internal High Grade Filter filters chlorine, unpleasant taste
            and odor, and reduces sediments up to 5 micrometers to produce Clean
            Water.
          </p>
        </div>
        <div className="flex flex-col gap-5 text-justify font-light">
          <img src="/electrolysis.jpg" alt="" />
          <p className="text-4xl font-semibold">Step 2: Electrolysis</p>
          <p>
            The filtered water moves through several electrode plates and
            membranes, separating into acidic and alkaline parts. It is split
            into OH- (hydroxid ions) and H+ (hydrogen ions).
          </p>
          <p>
            The hydrogen ions react with electrons given by the cathode (–
            charged electrode), forming H2, molecular Hydrogen. Hydroxid ions
            remain, making the water more alkaline around the cathode.
            Conversely, close to the anode (+ charged electrode), hydroxid ions
            give electrons to the anode, eventually forming O2 (Oxygen).
            Hydrogen ions remain, making the water more acidic around the anode.
            The two kinds of water are separated by membranes and released
            through different hoses.
          </p>
          <p className="text-xs">
            * number of electrode plates depends on machine model
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
