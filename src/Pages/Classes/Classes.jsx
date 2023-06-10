import React from 'react';
import useAllClasses from '../../Hooks/useAllClasses';


const Classes = () => {
    const [allClass] = useAllClasses();


    return (
        <div>
      <div data-aos="fade-left">
        <p className="mt-20 text-5xl font-semibold text-center">
          <span className="text-yellow-400 underline text-center">All</span>{" "}
          Classes
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
      <div data-aos="fade-down">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          {allClass.map((allClass) => (
            <div
              key={allClass._id}
              className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110"
            >
              <figure>
                <img
                  className="h-[270px] w-full"
                  src={allClass.classImage}
                  alt="picture"
                />
              </figure>
              
              <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
                <h2 className="card-title">
                  Music Genre: {allClass.className}
                </h2>
                <p className="text-md">
                  Instructor Name: {allClass.instructorName}
                </p>
                <p className="text-md">
                  Available Seats: {allClass.availableSeats}
                </p>
                <p className="text-md">
                  Available Price: $ {allClass.price}
                </p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Classes;