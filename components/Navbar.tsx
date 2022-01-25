import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react"

const Navbar: React.FC = () => {
  return (
  <nav className="header">
    <h1 className="logo">
      <a href="#">Next-Auth-App</a>
    </h1>
    <ul className={`main-nav`}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/csa">
          <a>Client Side Auth</a>
        </Link>
      </li>
      <li>
        <Link href="/ssa">
          <a>Server Side Auth</a>
        </Link>
      </li>
      <li>
        <Link href="/api/auth/signin">
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn()
            }}
          >
            Sign In
          </a>
        </Link>
      </li>
      <li>
        <Link href="/api/auth/signout">
          <a
            onClick={(e) => {
              e.preventDefault();
              signOut()
            }}
          >
            Sign Out
          </a>
        </Link>
      </li>
    </ul>
  </nav>)
};

export default Navbar;
