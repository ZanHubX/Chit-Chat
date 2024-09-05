import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import zhangImage from "../assets/Zhang.png";
import AquaChat from "../assets/AquaChat.png";

const Sidebar = () => {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="w-full sm:w-1/3 md:w-1/4 bg-white border-r border-gray-300">
      {/* Sidebar Header */}
      <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-[#8ab7d3] text-white">
        <h1 className="text-2xl font-semibold w-1/6 h-auto">
          {/* <span className="text-sm font-bold">AquaChat</span> */}
          {React.createElement("dotlottie-player", {
            src: "https://lottie.host/a134ef0e-3829-4d2b-9c70-122cfd3bd42c/BTigdGsB2n.json",
            background: "transparent",
            speed: "1.5",
            className:
              "border-gray-200 rounded-3xl drop-shadow-lg w-full h-auto max-w-xs mx-auto",
            loop: true,
            autoplay: true,
          })}
        
        </h1>
        <Menu />
      </header>

      {/* Contact List */}
      <div className="overflow-y-auto h-[calc(100vh-120px)] p-3">
        {/* Render contact items */}
        <Contact name="Wann" message="Hello!!" avatar={zhangImage} />
        <Contact
          name="Zhang"
          message="Last night’s hangout was lit! We gotta do that again."
          avatar={zhangImage}
        />
        {/* Add more contacts here */}

        <div class="ml-4 items-center justify-center mt-4">
          <button
            class="bg-[#a2c0d3] absolute items-center bottom-4 left-10 right-0  active:scale-95 py-2 text-lg md:text-xl lg:text-2xl 
            border-2 rounded-2xl drop-shadow-xl border-[#2A4E67] hover:bg-[#2A4E67] hover:text-white 
            w-2/12 md:w-2/12 lg:w-2/12 text-center duration-200 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </button>
          
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        id="menuButton"
        className="focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div
          id="menuDropdown"
          className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          <ul className="py-2 px-3">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-gray-400"
              >
                Option 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-gray-400"
              >
                Option 2
              </a>
            </li>
            {/* Add more menu options here */}
          </ul>
        </div>
      )}
    </div>
  );
};

const Contact = ({ name, message, avatar }) => (
  <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3">
      <img
        src={avatar}
        alt={`${name}'s Avatar`}
        className="w-full h-full rounded-full"
      />
    </div>
    <div className="flex-1">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm sm:text-base">{message}</p>
    </div>
  </div>
);

const ChatHeader = ({ currentContact }) => (
  <header className="bg-white p-4 text-gray-700 border-b border-gray-300">
    <h1 className="text-xl sm:text-2xl font-semibold">{currentContact}</h1>
  </header>
);

const ChatMessage = ({ message, type, avatar }) => (
  <div className={`flex mb-4 ${type === "outgoing" ? "justify-end" : ""}`}>
    {type === "incoming" && (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mr-2">
        <img
          src={zhangImage}
          alt="User Avatar"
          className="w-full h-full rounded-full"
        />
      </div>
    )}
    <div
      className={`flex max-w-96 ${
        type === "outgoing"
          ? "bg-[#8ab7d3] text-white"
          : "bg-white text-gray-700"
      } rounded-lg p-3 gap-3`}
    >
      <p className="text-sm sm:text-base">{message}</p>
    </div>
    {type === "outgoing" && (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center ml-2">
        <img
          src={zhangImage}
          alt="My Avatar"
          className="w-full h-full rounded-full"
        />
      </div>
    )}
  </div>
);

const ChatInput = () => (
  <footer className="bg-white border-t border-gray-300 p-4 w-full absolute bottom-0">
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Aa..."
        className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
      />
      <button className="bg-[#8ab7d3] text-white px-3 py-2 rounded-md ml-2 text-sm sm:text-base">
        Send
      </button>
    </div>
  </footer>
);

const Home = () => {
  const currentContact = "Xing Mei";

  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 relative">
        <ChatHeader currentContact={currentContact} />
        <div className="h-[calc(100vh-160px)] sm:h-[calc(100vh-200px)] overflow-y-auto p-4">
          <ChatMessage
            message="Hey Wang, what's good?"
            type="incoming"
            avatar="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          />
          <ChatMessage
            message="Hey, Xing Mei! I'm chillin', just wrapped up a fire book. How 'bout you?"
            type="outgoing"
            avatar="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          />
          {/* Add more ChatMessages here */}
        </div>
        <ChatInput />
      </div>
    </div>
  );
};


export default Home;
