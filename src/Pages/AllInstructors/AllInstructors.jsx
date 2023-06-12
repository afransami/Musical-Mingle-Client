import React from "react";
import useAllInstructor from "../../Hooks/useAllInstructor";

const AllInstructors = () => {
  const [AllInstructor] = useAllInstructor();

  return (
    <div>
      <div>
        <div data-aos="fade-left">
          <p className="mt-20 text-5xl font-semibold text-center">
            <span className="text-yellow-400 underline text-center">All</span>{" "}
            Instructors
          </p>
        </div>
        <div data-aos="fade-right">
          <p className="mt-10 text-2xl w-1/2 mx-auto text-justify font-semibold">
            Popular musical classes provide a structured and guided learning
            environment for students to develop their musical skills, express
            their creativity, and pursue their passion for music. They are often
            offered by music schools, conservatories, community centers, and
            private instructors.
          </p>
        </div>

        <div data-aos="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
            {AllInstructor.map((AllInstructor) => (
              <div
                key={AllInstructor._id}
                className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110"
              >
                <figure>
                  <img
                    className="h-[270px] w-full"
                    src={AllInstructor.instructorImage}
                    alt="picture"
                  />
                </figure>

                <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
                  <p className="card-title">
                    Instructor Name: {AllInstructor.instructorName}
                  </p>
                  <h2 className="text-md">
                    Instructor Email: {AllInstructor.instructorEmail}
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 scale-110">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInstructors;
