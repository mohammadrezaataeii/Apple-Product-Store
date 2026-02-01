import { useState } from "react";
import Controls from "./features/app/components/Controls";
import Navbar from "./features/app/components/Navbar";
import AppContainer from "./features/app/components/AppContainer";
import Home from "./features/home/page";
import Iphones from "./features/iphones/page";
import MacBooks from "./features/macbook/page";

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
    <AppContainer frameZoom={frameZoom}>
      <Navbar activePage={activePage} handleNavClick={handleNavClick} />
      <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
      {/* <Home handleNavClick={handleNavClick} /> */}
      {/* <Iphones /> */}
      <MacBooks />
    </AppContainer>
  );
}
