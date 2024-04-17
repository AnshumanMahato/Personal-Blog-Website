import { IoHomeOutline, IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center  p-[2rem] text-[2.5rem] leading-[140%] text-white font-semibold w-full max-w-[800px]">
      <IoHomeOutline />
      <IoMenu />
    </header>
  );
}

export default Header;
