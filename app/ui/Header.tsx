import { IoHomeOutline, IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center  p-[2rem] xs:p-[3rem] text-[2.5rem] xs:text-[3rem] leading-[140%] text-white w-full max-w-[800px]">
      <IoHomeOutline />
      <IoMenu className="md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex text-[1.6rem] gap-[3rem]">
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
