'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type HeaderProps = {};

const navLinks = [
  {
    href:"/blog",
    label:"Home"
  },
  {
    href:"/blog/posts",
    label:"Posts"
  },
  {
    href:"/",
    label:"Create Posts"
  },
]

const Header: React.FC<HeaderProps> = () => {

  const pathName = usePathname();

  return (
    <header className="bg-slate-200 h-16 flex items-center">
      <div className=" w-full flex items-center justify-between p-4 mx-auto max-w-6xl"> 
        {/* Logo */}
        <Link href={"/blog"}>
        <div className="flex items-center text-xl bg-slate-400 rounded-md p-1 hover:cursor-pointer">
          <span className="font-bold">B</span>
          <span className="font-bold text-blue-300">L</span>
          <span className="font-bold text-blue-300">O</span>
          <span className="font-bold text-black">G</span>
          <span className="font-bold text-blue-300">Y</span>
          <span className="font-bold text-black">X</span>
        </div></Link>
        {/* right bar */}
        <div className="flex items-center ">
          <nav>
            <ul className="flex gap-9 items-center">
              {
                navLinks.map((link)=>(
                  <li className="text-[14px]" key={link.href}>
                    <Link className={`${pathName === link.href ? "text-gray-900": "text-gray-400"}`} href={link.href}>
                    {link.label}
                    </Link>
                  </li>
                ))
              }
              <Image
            className="rounded-full hover:cursor-pointer"
            width={40}
            height={40}
            src={
              "data:image/jpeg;base64,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"
            }
            alt={""}
          />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
