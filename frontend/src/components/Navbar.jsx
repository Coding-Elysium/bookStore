import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineBars3CenterLeft,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png"; // Your avatar image

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart Page",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
  {
    name: "Logout",
    href: "/login",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const currentUser = true; // Simulated current user state

  const toggleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute inline-block left-3 inset-y-2 size-4" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none h-[36px]"
            />
          </div>
        </div>

        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={toggleDropdown}>
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full ring-2 ring-blue-500"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    <ul className="text-left">
                      {navigation.map((items) => (
                        <Link to={items.href}>
                          <li
                            onClick={() => setisDropdownOpen(false)}
                            key={items.name}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            {items.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
