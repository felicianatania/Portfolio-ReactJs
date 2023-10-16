import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "PROJECTS", link: "#projects" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed left-0 top-0 z-[999] w-full ${
        sticky
          ? "bg-gradient-to-l from-primarylight text-gray backdrop-blur-xl"
          : "text-gray"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-10">
          <h4 className="text-4xl font-bold uppercase">
            <span className="text-primarydark">F</span>N
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "bg-primary md:bg-primary/0" : "bg-gradient-to-l from-primary"
          } text-gray-800 hidden rounded-bl-full px-7 py-2 font-medium md:block`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className="px-6 delay-100 hover:-translate-y-0.5 hover:text-primarydark"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray" : "text-gray"
          } m-5 text-3xl md:hidden`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`text-gray absolute top-0 h-screen w-1/3 bg-gradient-to-l from-primary
      to-primarylight px-7 py-2 font-medium duration-300 md:hidden ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex h-full flex-col justify-center gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 delay-100 hover:-translate-x-3 hover:text-primarydark"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
