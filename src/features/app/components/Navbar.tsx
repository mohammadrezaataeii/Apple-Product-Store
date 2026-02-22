import { navItems, socialItems } from "@/data/page";
import { Menu, X } from "@boxicons/react";

interface navbarProps {
  activePage: number;
  handleItemClick: (i: number) => void;
  isNavbarOpen: boolean;
  handleToggleNavbar: () => void;
}

export default function Navbar({
  activePage,
  handleItemClick,
  isNavbarOpen,
  handleToggleNavbar,
}: navbarProps) {
  return (
    <>
      <div
        className={`w-44 xl:w-52 2xl:w-80  h-full bg-sidebar flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0 absolute md:relative z-10 duration-300 ${isNavbarOpen ? "translate-x-0" : "-translate-x-110 md:-translate-x-0"}`}
      >
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl font-light text-red-700 mb-14 tracking-wider"
        >
          App Products
        </a>
        <div className="flex flex-col grow">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const ActiveFolder = item.activeIcon;
            const InactiveFolder = item.inactiveIcon;
            return (
              <a
                key={item.label}
                href="#"
                className="xl:w-36 lg:w-30 flex items-center justify-between my-3.5 text-left cursor-pointer pr-3"
                onClick={() => handleItemClick(index)}
              >
                <Icon className="text-pink-400" />
                <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">
                  {item.label}
                </span>
                {activePage === index ? (
                  <ActiveFolder
                    className="text-lg text-yellow-400"
                    pack="filled"
                  />
                ) : (
                  <InactiveFolder
                    className="text-lg text-yellow-400"
                    pack="filled"
                  />
                )}
              </a>
            );
          })}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          {socialItems.map((item) => {
            const SocialIcon = item.icon;
            return (
              <a
                target="_blank"
                href={item.url}
                className="text-red-700 text-2xl"
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      </div>
      <button
        className="fixed md:hidden z-11 left-4 bottom-4 p-2 text-blue-400"
        onClick={handleToggleNavbar}
      >
        {isNavbarOpen ? <X /> : <Menu />}
      </button>
    </>
  );
}
