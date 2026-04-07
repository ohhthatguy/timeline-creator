import type { createDemoDataType } from "../Create/CreateDemoData";
import { useState } from "react";

const Vertical5 = ({ data }: { data: createDemoDataType[] }) => {
  const [selectedEle, setSelectedEle] = useState<createDemoDataType>(data[0]);

  return (
    <div className="relative flex gap-6 mx-auto w-full max-w-4xl  px-6 bg-secondary_color transition-colors duration-500">
      <div className="  mt-12 w-32 grid  place-content-between">
        {data.map((e: createDemoDataType, index: number) => (
          <div
            key={index}
            onClick={() => setSelectedEle(e)}
            className={` ${selectedEle.id === e.id && "text-red-500 font-extrabold text-md"} hover:cursor-pointer hover:text-red-500 font-extrabold hover:text-md duration-500 transition-all `}
          >
            {e.date}
          </div>
        ))}
      </div>

      <div className=" grid gap-4">
        {data.map((e: createDemoDataType, index: number) => (
          <div
            key={index}
            className={`grid p-2 ${e.id === selectedEle.id && "border-b-2 border-x-2 rounded-md"}`}
          >
            <div
              className={`font-bold text-lg mb-2 text-tertiary_color ${e.id === selectedEle.id && "underline"}`}
            >
              {e.topic}
            </div>
            <div
              className={`text-sm 
                    "text-gray-400"
                  `}
            >
              {e.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vertical5;
