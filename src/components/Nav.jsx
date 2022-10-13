import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-500">
      <div className="flex-1">
        <button className="btn btn-ghost no-animation normal-case text-4xl text-cyan-50">
          Minjie Huang
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/projects">
              <a className="text-cyan-50">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a className="text-cyan-50">About</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a className="text-cyan-50">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
