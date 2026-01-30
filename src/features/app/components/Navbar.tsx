import { navItems, socialItems } from "@/data/page";

interface navbarProps {
  activePage: number;
  handleNavClick: (i: number) => void;
}

export default function Navbar({ activePage, handleNavClick }: navbarProps) {
  return (
    <div className="w-44 xl:w-52 2xl:w-80  h-full bg-sidebar flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
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
              onClick={() => handleNavClick(index)}
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
  );
}
