import { iphoneModels } from "@/data/page";

export default function Iphones() {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center bg-white p-8">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Which iPhone is right for you?
      </h3>
      <div className="flex justify-between w-full">
        {iphoneModels.map((iphone) => {
          return (
            <div className="flex flex-col justify-center items-center gap-y-2">
              <img
                src={iphone.img}
                alt={iphone.name}
                className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain"
              />
              <h4 className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-4">
                {iphone.name}
              </h4>
              <p className="2xl:text-xl xl:text-base lg:text-sm text-xs text-gray-700 mt-4">
                {iphone.description}
              </p>
              <p className="2xl:text-base xl:text-sm lg:text-xs text-xs text-blue-400 mt-2">
                {iphone.price}
              </p>
              <button className="text-sm text-white bg-blue-400 px-4 py-2 mt-4 rounded-full">
                buy
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
