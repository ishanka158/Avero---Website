import { useState, useEffect } from "react";
import Button from "../Button/Button";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Solutions", link: "/" },
    { name: "Our Work", link: "/" },
    { name: "Resources", link: "/" },
  ];

  const [open, setOpen] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update the open state based on the viewport width
    setOpen(viewportWidth >= 768); // Adjust the breakpoint as needed
  }, [viewportWidth]);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <img src={logo} className="h-12 w-12" alt="Logo" />

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>

        <ul
          className={`md:flex md:pb-0 pb-12 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:mr-[500px] ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {open &&
            Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
        <div className="ml-[50px]">
          <Button text="Talk to an Expert" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
