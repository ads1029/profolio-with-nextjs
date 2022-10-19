import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary mb-2 sticky top-0 z-50">
      <div className="flex-1 hidden sm:block">
        <Link href="/">
          <button className="btn btn-ghost no-animation normal-case text-4xl font-light text-base-100">
            Minjie Huang (WIP)
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
          <li>
            <Link href="/about">
              <button className="text-base-300 hover:text-base-100 duration-500">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a className="text-base-300 hover:text-base-100 duration-500">
                Counter
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dog">
              <a className="text-base-300 hover:text-base-100 duration-500">
                Dog API
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
