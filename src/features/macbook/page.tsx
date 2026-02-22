import { macbookModels } from "@/data/page";
import { useState } from "react";

function MacBooks() {
  const [selectedChip, setSelectedChip] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const currentMb = macbookModels[selectedChip];
  const currentColor = currentMb.colors[selectedColor];

  const toggleSelectChip = (index: number) => {
    setSelectedChip(index);
    setSelectedColor(0);
  };

  return (
    <div className="w-full h-full flex flex-col items-center  bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new MacBook Air.
      </h1>
      <div className="flex">
        {macbookModels.map((item, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 2xl:h-18 md:h-12 h-12  border flex flex-col justify-evenly items-center  ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}
            ${selectedChip === index ? "border-2 border-blue-400" : "border-gray-800"}
            `}
            onClick={() => toggleSelectChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs text-gray-800 font-bold">
              With {item.chip} Chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {item.price}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col 2xl:p-4 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 mb-8">
          <img
            className="2xl:w-72 xl:w-52 w-49 h-full 2xl:mt-0 sm:-mt-6 object-contain m-auto"
            src={currentColor.img}
          />
          <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left">
            {currentColor.label}
          </span>

          <div className="flex space-x-2 mb-4 justify-center md:justify-start">
            {currentMb.colors.map((color, index) => (
              <button
                key={index}
                className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 rounded-full  border hover:border-blue-500 `}
                style={{ backgroundColor: color.bg }}
                onClick={() => setSelectedColor(index)}
              ></button>
            ))}
          </div>

          <img
            src={currentMb.icon}
            alt={`Apple ${currentMb.chip} Icon`}
            className="w-12 h-12 2xl:mb-2 xl:mb-2"
          />

          <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
            {currentMb.specs.map((spec, index) => (
              <p
                key={index}
                className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-1"
              >
                {spec}
              </p>
            ))}
          </div>

          <button className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0">
            buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default MacBooks;
