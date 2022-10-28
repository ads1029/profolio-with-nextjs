import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-primary mb-2 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/">
          <button className="btn btn-ghost no-animation normal-case text-4xl font-medium text-base-100">
            {`< MiL >`} (WIP)
          </button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/projects">
              <a className="text-base-300 hover:text-base-100 duration-500">
                Projects
              </a>
            </Link>
          </li>

          {/* removable */}
          {/* <li>
            <Link href="/counter">
              <a className="text-base-300 hover:text-base-100 duration-500">
                (Counter)
              </a>
            </Link>
          </li> */}

          {/* removable */}
          {/* <li>
            <Link href="/dog">
              <a className="text-base-300 hover:text-base-100 duration-500">
                (Dog API)
              </a>
            </Link>
          </li> */}

          {/* removable */}
          {/* <li>
            <Link href="/about">
              <button className="text-base-300 hover:text-base-100 duration-500">
                (About)
              </button>
            </Link>
          </li> */}

          <li>
            {/* <div className="bg-red-400"> */}
            {/* <div> */}
            <a
              href="https://github.com/ads1029"
              className="hover:bg-gray-400 duration-500"
            >
              <AiFillGithub size="2rem" color="white" />
            </a>
            {/* </div> */}
          </li>

          <li>
            <a
              href="https://linkedin.com/in/minjie-huang"
              className="hover:bg-gray-400 duration-500"
            >
              <AiFillLinkedin size="2rem" color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
