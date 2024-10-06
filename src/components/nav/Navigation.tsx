import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-indigo-900 h-16 w-[1880px] flex flex-row justify-center">
        <div className="e"></div>
        <div className="f"></div>
        <div className="d"></div>
        <Link href="/">
          <div className="a text-white text-xl font-extralight flex items-center justify-center cursor-pointer">
            Accueil
          </div>
        </Link>
        <div className="d"></div>
        <Link href="/page2">
          <div className="b text-white text-xl font-extralight flex items-center justify-center cursor-pointer">
            Animés
          </div>
        </Link>
        <div className="d"></div>
        <Link href="/page3">
          <div className="c text-white text-xl font-extralight flex items-center justify-center cursor-pointer">
            Memes
          </div>
        </Link>
        <div className="d"></div>
        <div className="f"></div>
        <div className="g"></div>
      </nav>
    </div>
  );
};

export default Navigation;

