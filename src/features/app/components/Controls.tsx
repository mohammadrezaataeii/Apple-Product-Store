import { SearchBigMinus, SearchBigPlus, XCircle } from "@boxicons/react";

interface ControlProps {
  toggleZoom: () => void;
  frameZoom: boolean;
  resetPage: () => void;
  activePage: number;
}

function Controls({
  toggleZoom,
  frameZoom,
  resetPage,
  activePage,
}: ControlProps) {
  return (
    <div className="absolute top-3 right-3 space-x-2 z-10">
      <button
        onClick={toggleZoom}
        className="text-2xl text-pink-400 cursor-pointer lg:inline-block hidden"
      >
        {frameZoom ? (
          <SearchBigMinus pack="filled" size="base" />
        ) : (
          <SearchBigPlus pack="filled" size="base" />
        )}
      </button>
      <button
        className={`${activePage === 0 ? " text-pink-200 cursor-not-allowed" : "text-pink-400 cursor-pointer"} text-2xl`}
        onClick={() => resetPage()}
      >
        <XCircle size="base" />
      </button>
    </div>
  );
}

export default Controls;
