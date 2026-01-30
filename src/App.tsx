import { useState } from "react";
import Controls from "./features/app/components/Controls";
import Navbar from "./features/app/components/Navbar";

export default function App() {
  const [frameZoom, setFrameZoom] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(0);

  const toggleZoom = () => {
    setFrameZoom(!frameZoom);
  };

  const handleNavClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh]  border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100`}
      >
        <Navbar activePage={activePage} handleNavClick={handleNavClick} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
      </div>
    </div>
  );
}
