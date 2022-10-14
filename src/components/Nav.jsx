import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1 hidden sm:block">
        <Link href="/">
          <button className="btn btn-ghost no-animation normal-case text-4xl font-light text-base-100">
            Minjie Huang
          </button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/projects">
              <a className="text-base-100">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="text-base-100">About</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-base-100">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/dog">
              <a className="text-base-100">Dog API</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
