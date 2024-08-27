import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
      import("@dotlottie/player-component");
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target[0].value, e.target[1].value);
    };
  return (
    <div>
      <div className="text-center font-bold font-serif">
        <p className="text-4xl">Welcome back</p>     
        <p className="text-lg">Sign in to continue</p>
      </div>
      <div className="p-1 border-gray-200 rounded-3xl drop-shadow-lg block w-1/4 h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

        {React.createElement("dotlottie-player", {
          src: "https://lottie.host/542c222b-3fce-4c34-a7b2-d3132654ec45/vvFpqfUHg8.json",
          background: "transparent",
          speed: "1",
          className:
            " border-gray-200 rounded-3xl drop-shadow-lg block w-1/4 h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto ", // Reduced padding, narrower width, and margin-top added
          loop: true,
          autoplay: true,
        })}
      </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address"
          />
        </div>

        <div className="flex mt-5">
          <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-e-0 border-gray-300 rounded-s-md bg-slate-100 dark:text-gray-400 dark:border-gray-600">
            <lord-icon
              src="https://cdn.lordicon.com/vyqvtrtg.json"
              trigger="hover"
              style={{ width: "25px", height: "25px" }}
              loop={true}
              autoplay={true}
            ></lord-icon>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Passwords"
          />
        </div>
        <Link
          to={"/signup"}
          className="duration-300 bg-[#8ab7d3] active:scale-90 mt-5 inline-block p-2 text-lg border-2 border-gray-2 rounded-2xl drop-shadow-xl border-[#2A4E67] hover:bg-[#2A4E67] hover:text-white w-full max-w-lg mx-auto text-center flex-col "
        >
          SIGN IN
        </Link>

        <div className='mt-5 text-center'>
          <p>
            Don't you have an account?{" "}
            <Link
              to={"/signup"}
              className='text-[#32aaff] font-bold underline'
            >
              Sign Up
            </Link>
          </p>
          <p className='mt-2'>
            Forgot Password?{" "}
            <Link
              to={"/reset-password"}
              className='text-[#32aaff] font-bold underline'
            >
              Reset Password
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login