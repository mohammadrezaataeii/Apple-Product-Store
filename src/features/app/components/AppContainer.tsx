import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  frameZoom: boolean;
}

const AppContainer = ({ children, frameZoom }: Props) => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh]  border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
