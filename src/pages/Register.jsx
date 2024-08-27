import React, { useEffect } from "react";
import "@dotlottie/player-component";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <div className="border-gray-200 rounded-3xl drop-shadow-lg w-full max-w-md sm:max-w-sm mx-auto">
        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/52c122f7-72ef-4132-adc5-d463365866f8/Du8U7LBZAJ.json",
          background: "transparent",
          speed: "1",
          className:
            "border-gray-200 rounded-3xl drop-shadow-lg w-full h-auto max-w-xs mx-auto",
          loop: true,
          autoplay: true,
        })}
      </div>
      <div className="w-full max-w-lg text-center sm:mt-8 px-4">
        <p className="text-4xl sm:text-3xl md:text-4xl font-bold text-[#9FC9E2] drop-shadow-lg">
          Start to Chat
        </p>
        <p className="mt-1 text-sm sm:text-base">
          Chat with friends, create group chats and communicate
        </p>
      </div>

      <div className="w-full max-w-lg text-center mt-4 sm:mt-12 px-4 flex flex-col gap-4">
        <Link
          to="/login"
          className="duration-300 bg-slate-100 active:scale-90 border-2 p-2 text-sm sm:text-base border-gray-200 rounded-2xl drop-shadow-lg  hover:bg-[#2A4E67] hover:text-white"
        >
          LOGIN
        </Link>

        <Link
          to="/signup"
          className="duration-300 bg-[#8ab7d3] active:scale-90  inline-block p-2 text-sm sm:text-base border-2 border-gray-200 rounded-2xl drop-shadow--xl hover:bg-[#2A4E67] hover:text-white"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Register;
