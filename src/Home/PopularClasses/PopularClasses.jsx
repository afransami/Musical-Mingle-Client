import React from "react";
import usePopularClasses from "../../Hooks/usePopularClasses";

const PopularClasses = () => {
  const [popularClass] = usePopularClasses();

  return (
    <div className="px-4">
      <div data-aos="zoom-in">
        <p className="mt-10 text-3xl font-semibold text-center">
          <span className="text-indigo-600 underline text-center">Popular</span>{" "}
          Classes
        </p>
      </div>
      <div data-aos="zoom-out">
        <p className="text-lg  mx-auto text-justify">
          Popular musical classes provide a structured and guided learning
          environment for students to develop their musical skills, express
          their creativity, and pursue their passion for music. They are often
          offered by music schools, conservatories, community centers, and
          private instructors.
        </p>
      </div>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {popularClass.map((popularClass) => (
          <a
            key={popularClass._id}
            href="#"
            className="group block"
            data-aos="zoom-out"
          >
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                // src={popularClass.classImage}
                src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />
              <img
                // src={popularClass.classImage}
                src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
              <div className=" badge badge-warning font-bold text-md -top-4 p-4 right-5 absolute">
                Popular
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Music Genre: {popularClass.className}                
              </h3>
              <h3 className="text-sm text-gray-700">
                Instructor Name: {popularClass.instructorName}
              </h3>
              <h3 className="text-sm text-gray-700 group-hover:underline-offset-4">
                Available Seats: {popularClass.availableSeats}
              </h3>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                  <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    Get Started
                  </span>
                </a>
                <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                  href="#"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                  <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    Learn More
                  </span>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>

    // <div>
    //   <div data-aos="fade-left">
    //     <p className="mt-20 text-5xl font-semibold text-center">
    //       <span className="text-yellow-400 underline text-center">Popular</span>{" "}
    //       Classes
    //     </p>
    //   </div>
    //   <div data-aos="fade-right">
    //     <p className="mt-10 text-2xl w-1/2 mx-auto text-justify font-semibold">
    //       Popular musical classes provide a structured and guided learning
    //       environment for students to develop their musical skills, express
    //       their creativity, and pursue their passion for music. They are often
    //       offered by music schools, conservatories, community centers, and
    //       private instructors.
    //     </p>
    //   </div>

    //   <div data-aos="fade-down">
    //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
    //       {popularClass.map((popularClass) => (
    //         <div
    //           key={popularClass._id}
    //           className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110"
    //         >
    //           <figure>
    //             <img
    //               className="h-[270px] w-full"
    //               src={popularClass.classImage}
    //               alt="picture"
    //             />
    //           </figure>
    //           <div className=" badge badge-warning font-bold text-md -top-4 p-4 right-5 absolute">
    //             Popular
    //           </div>
    //           <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
    //             <h2 className="card-title">
    //               Music Genre: {popularClass.className}
    //             </h2>
    //             <p className="text-md">
    //               Instructor Name: {popularClass.instructorName}
    //             </p>
    //             <p className="text-md">
    //               Available Seats: {popularClass.availableSeats}
    //             </p>
    //             <div className="card-actions justify-end">
    //               <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default PopularClasses;
