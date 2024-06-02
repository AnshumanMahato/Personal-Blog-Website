"use client";

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import DarkModeSwitch from "@/app/ui/DarkModeSwitch";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //prevent scrolling when nav is open
    if (isOpen) document.body.classList.add("overflow-y-hidden", "h-screen");
    else document.body.classList.remove("overflow-y-hidden", "h-screen");
  }, [isOpen]);

  const handleNavOpen = useCallback(() => setIsOpen(true), []);
  const handleNavClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header className="relative z-50 flex justify-between items-center  p-[2rem] xs:p-[3rem] text-[2.5rem] xs:text-[3rem] leading-[140%] w-full max-w-[830px]">
        <Link
          href="/"
          className=" hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
          onClick={handleNavClose}
        >
          <IoHomeOutline />
        </Link>
        <div className="flex gap-[3rem] items-center">
          <DarkModeSwitch />
          <div className="md:hidden hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer">
            {!isOpen && <AiOutlineMenu onClick={handleNavOpen} />}
            {isOpen && <AiOutlineClose onClick={handleNavClose} />}
          </div>
          <nav className="hidden md:block">
            <ul className="flex text-[1.6rem] gap-[3rem]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            key="nav-bg"
            className="lg:hidden absolute top-0 z-40 w-screen h-screen flex justify-center items-center bg-white/80 dark:bg-black/20 backdrop-blur-[20px] shadow-[0_0_3rem_3rem_rgba(255,255,255,0.11)_inset]"
            initial={{
              x: "100%",
            }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul
              className="flex flex-col justify-center items-center gap-[5rem] sm:gap-[7rem] text-[2rem] sm:text-[3rem]"
              onClick={handleNavClose}
            >
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
