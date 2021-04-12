import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={180} height={128} />
      </div>
      <Link href="/">
        <a href="">Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <Link href="/jokes">
        <a>Jokes</a>
      </Link>
    </nav>
  );
};

export default Navbar;
