function Footer() {
  return (
    <footer className="px-[2rem] py-[3rem] bg-white dark:bg-black w-full">
      <p className="text-[1rem] leading-[150%] text-secondary-light dark:text-secondary-dark text-center">
        © {new Date().getFullYear()} Anshuman Mahato. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
