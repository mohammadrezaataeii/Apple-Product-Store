import { useEffect, useEffectEvent, useState, type ReactNode } from "react";

interface PageProps {
  children: ReactNode[];
  activePage: number;
}
const PageTransition = ({ children, activePage }: PageProps) => {
  const [currentPage, setCurrentPage] = useState<number>(activePage);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const runTransition = useEffectEvent((newPage: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTransitioning(false);
    }, 300);
  });

  useEffect(() => {
    if (currentPage !== activePage) {
      runTransition(activePage);
    }
  }, [activePage, currentPage]);

  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ background: "url(images/pages-bg.png)" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-300 ${transitioning ? "-translate-y-full" : "translate-y-0"}`}
      >
        {children[activePage]}
      </div>
    </div>
  );
};

export default PageTransition;
