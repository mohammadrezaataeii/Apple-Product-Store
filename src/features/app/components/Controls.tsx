import { SearchBigMinus, SearchBigPlus, XCircle } from "@boxicons/react";

interface ControlProps {
  toggleZoom: () => void;
  frameZoom: boolean;
}

function Controls({ toggleZoom, frameZoom }: ControlProps) {
  return (
    <div className="absolute top-3 right-3 space-x-2">
      <button
        onClick={toggleZoom}
        className="text-2xl text-pink-400 cursor-pointer"
      >
        {frameZoom ? (
          <SearchBigMinus pack="filled" size="base" />
        ) : (
          <SearchBigPlus pack="filled" size="base" />
        )}
      </button>
      <button className="text-2xl text-pink-400 cursor-pointer">
        <XCircle size="base" />
      </button>
    </div>
  );
}

export default Controls;
