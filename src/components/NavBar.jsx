import { useState } from "react";
import {
  UserRound,
  ShoppingBag,
  AlignLeft,
  X,
  Facebook,
  Instagram,
} from "lucide-react";
import LOGO from "../assets/logo.png";

export default function NavBar() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTab = () => setIsTabOpen(!isTabOpen);
  const links = ["Home", "Shop", "Marketplace", "Company"];


  return (
    <nav className="relative bg-white shadow-sm w-full">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="flex flex-1 justify-start">
          <AlignLeft
            className="h-6 w-6 text-stone-800 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-1 justify-center">
          <img alt="Logo" src={LOGO} className="h-10 w-auto" />
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <ShoppingBag className="h-6 w-6 text-stone-800" />
          <span className="border-solid bg-red-500 px-[.5rem] rounded-[2rem] absolute top-3 right-3 text-[.7rem] w-[1rem] flex items-center justify-center text-white">
            7
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700 ease-in-out w-3/4`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold"></span>
          <button onClick={toggleMenu} className="text-stone-800">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-7">
            {links.map((link, index) => (
              <li key={index} className="text-gray-800 hover:text-gray-600">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="pt-12">
            <button className="rounded bg-gray-300 flex items-center justify-center w-32 h-10 gap-2 hover:bg-black hover:text-white">
              <UserRound className="" /> Login
            </button>
          </div>
          <div className="">
            <div className="flex space-x-4 pl-4 absolute inset-x-0 bottom-5 border-t pt-4 border-gray-300">
              <span className="inline-block p-2 bg-sky-500 rounded-full hover:bg-sky-700 cursor-pointer">
                <Facebook strokeWidth={2} className="text-white" />
              </span>
              <span className="inline-block p-2 bg-gradient-to-r from-instagram-start to-instagram-end rounded-full hover:opacity-80 cursor-pointer">
                <Instagram
                  strokeWidth={2}
                  className="text-gray-800 cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:hidden items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-start">
          <AlignLeft className="h-6 w-6 text-stone-800 cursor-pointer" onClick={toggleTab} />
        </div>
        <div className="flex flex-1 justify-center">
          <img alt="Logo" src={LOGO} className="h-12 w-auto" />
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <UserRound className="h-6 w-6 text-stone-800" />
          <ShoppingBag className="h-6 w-6 text-stone-800" />
          <span className="border-solid bg-red-500 px-[.5rem] rounded-[2rem] absolute top-3 right-3 text-[.7rem] w-[1rem] flex items-center justify-center text-white">
            7
          </span>
        </div>
      </div>

      {isTabOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleTab}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform z-50 ${
          isTabOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-7/12`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold"></span>
          <button onClick={toggleTab} className="text-stone-800">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800">
                Company
              </a>
            </li>
          </ul>
          <div className="pt-12">
            <button className="rounded bg-gray-300 flex items-center justify-center w-32 h-10 gap-2 hover:bg-black hover:text-white">
              <UserRound className="" /> Login
            </button>
          </div>
          <div className="">
            <div className="flex space-x-4 pl-4 absolute inset-x-0 bottom-5 border-t pt-4 border-gray-300">
              <span className="inline-block p-2 bg-sky-500 rounded-full hover:bg-sky-700 cursor-pointer">
                <Facebook strokeWidth={2} className="text-white" />
              </span>
              <span className="inline-block p-2 bg-gradient-to-r from-instagram-start to-instagram-end rounded-full hover:opacity-80 cursor-pointer">
                <Instagram
                  strokeWidth={2}
                  className="text-gray-800 cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-start">
          <img alt="Logo" src={LOGO} className="h-12 w-auto" />
        </div>
        <div className="flex flex-1 justify-center space-x-10">
          <a href="#" className="text-stone-800">
            Home
          </a>
          <a href="#" className="text-stone-800">
            Shop
          </a>
          <a href="#" className="text-stone-800">
            Marketplace
          </a>
          <a href="#" className="text-stone-800">
            Company
          </a>
        </div>
        <div className="flex flex-1 justify-end space-x-6">
          <UserRound className="h-6 w-6 text-stone-800" />
          <ShoppingBag className="h-6 w-6 text-stone-800" />
          <span className="border-solid bg-red-500 px-[.5rem] rounded-[2rem] absolute top-3 right-3 text-[.7rem] w-[1rem] flex items-center justify-center text-white">
            7
          </span>
        </div>
      </div>
    </nav>
  );
}
