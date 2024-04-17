function Footer() {
  return (
    <footer className="px-[2rem] py-[3rem] bg-black w-full max-w-[800px]">
      <p className="text-[1rem] leading-[150%] text-secondary-dark text-center">
        © {new Date().getFullYear()} Anshuman Mahato. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
