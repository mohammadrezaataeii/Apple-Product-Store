import { items } from "@/data/page";

interface Props {
  handleNavClick: (i: number) => void;
}

function Home({ handleNavClick }: Props) {
  return (
    <div className="w-full h-full grow grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
      {items.map((item) => {
        return (
          <div
            className="flex flex-col grow justify-center items-center bg-white"
            onClick={() => handleNavClick(item.pageIndex)}
          >
            <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide mb-12">
              {item.label}
            </span>
            <img
              src={item.img}
              alt={item.label}
              className="max-w-[65%] max-h-[65%] object-contain"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
