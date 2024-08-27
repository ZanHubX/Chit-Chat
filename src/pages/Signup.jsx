
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);

    navigate("/home");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-5 text-center">
      <div className="p-1 border-gray-200 rounded-3xl drop-shadow-lg block w-2/4 h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/3735925b-950a-4cc1-85b4-94dc389d0da9/soS4bWGswQ.json",
          background: "transparent",
          speed: "1",
          className:
            "p-1 border-gray-200 rounded-3xl drop-shadow-lg block w-3/4 h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-4",
          loop: true,
          autoplay: true,
        })}
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex mt-5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/zpxybbhl.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          <label
            htmlFor="profile-photo"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
          >
            <span id="file-name" className="text-gray-400">
              Upload a photo
            </span>
          </label>
          <input
            type="file"
            id="profile-photo"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const fileName = e.target.files[0]?.name || "Upload a photo";
              document.getElementById("file-name").textContent = fileName;
            }}
          />
        </div>

        <div className="flex mt-5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
          />
        </div>

        <div className="flex mt-5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address"
          />
        </div>

        <div className="flex mt-5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/vyqvtrtg.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          <input
            type="password"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="duration-200 bg-[#8ab7d3] active:scale-90 mt-5 inline-block p-2 text-lg border-2 border-gray-2 rounded-2xl drop-shadow-xl border-[#2A4E67] hover:bg-[#2A4E67] hover:text-white w-full max-w-lg mx-auto text-center flex-col"
        >
          SIGN UP
        </button>

        <div className="mt-5">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#32aaff] font-bold underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
