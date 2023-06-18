import React from "react";
import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";


const ErrorPage = () => {
  return (
    <div className="text-center flex w-full h-full flex-col items-center">
      <Player
          autoplay
          loop
          src="../../../src/assets/98642-error-404.json"
          // style={{ height: '300px', width: '300px' }}
          className="h-[90vh]"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>

      <Link to="/">        
        <button className="mb-5 btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
          Go To Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
