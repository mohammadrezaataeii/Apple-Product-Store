import { useEffect, useState } from "react";
import Controls from "./features/app/components/Controls";
import Navbar from "./features/app/components/Navbar";
import AppContainer from "./features/app/components/AppContainer";
import Home from "./features/home/page";
import Iphones from "./features/iphones/page";
import MacBooks from "./features/macbook/page";
import Watches from "./features/watches/page";
import IMacs from "./features/IMacs/page";
import PageTransition from "./components/PageTransition";

export default function App() {
  const [frameZoom, setFrameZoom] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(0);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(
    window.innerWidth > 1024,
  );
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const handleItemClick = (index: number) => {
    setActivePage(index);
  };

  const resetPage = () => {
    setActivePage(0);
  };

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <AppContainer frameZoom={frameZoom}>
      <Navbar
        activePage={activePage}
        handleItemClick={handleItemClick}
        isNavbarOpen={isNavbarOpen}
        handleToggleNavbar={handleToggleNavbar}
      />
      <Controls
        toggleZoom={toggleZoom}
        resetPage={resetPage}
        frameZoom={frameZoom}
        activePage={activePage}
      />
      <PageTransition activePage={activePage}>
        <Home handleNavClick={handleItemClick} />
        <Iphones />
        <MacBooks />
        <Watches />
        <IMacs />
      </PageTransition>
    </AppContainer>
  );
}
