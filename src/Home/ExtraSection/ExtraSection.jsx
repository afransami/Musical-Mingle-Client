import React from "react";

const ExtraSection = () => {
  return (
    <div>
      <h1 className="mt-20 text-5xl font-semibold text-center">
        <span className=" text-yellow-400 underline text-center">Why</span> Need
        To Practice Music
      </h1>
      <br />

      <div className="grid lg:grid-cols-2 gap-10 mt-20" data-aos="fade-right">
        <div className="w-full">
          <p className="mt-10 text-3xl mx-auto text-justify font-semibold">
            Music has therapeutic effects and can be a great source of stress
            relief and relaxation. Regular practice provides an outlet for
            self-expression, reduces anxiety, and contributes to overall mental
            and emotional well-being.
          </p>{" "}
          <br />
          <br />
          <p className="text-2xl font-semibold">
            "Music gives a soul to the universe, wings to the mind, flight to
            the imagination, and life to everything." - Plato
          </p>
          <div className="flex gap-10 mt-10">
            <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
              View Details
            </button>
            <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
              Enroll Now
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-full"
            data-aos="fade-up"
            src="https://i.ibb.co/M5pZCVD/istockphoto-181872401-612x612.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
