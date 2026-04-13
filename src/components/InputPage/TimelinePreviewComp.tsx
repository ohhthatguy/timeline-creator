import { useSearch } from "@tanstack/react-router";
import type { TimelineComponentNameType } from "../Create/CreateDemoData";
import {
  timelineList,
  TimelineComponents,
  TimelineComponentCode,
} from "../Create/CreateDemoData";
import { Route } from "#/routes/input";
import toast from "react-hot-toast";

import type { createDemoDataType } from "../Create/CreateDemoData";

const TimelinePreviewComp = ({
  inputData,
}: {
  inputData: createDemoDataType[];
}) => {
  type SearchParams = {
    alignment: "vertical" | "horizontal";
    listId: string | number;
  };
  const search = useSearch({ from: Route.fullPath }) as SearchParams;
  const step1 = timelineList
    .filter((e) => e.alignment === search.alignment)[0]
    .data.filter((ele) => ele.id === search.listId);
  console.log(step1);

  const step2 = step1[0].component as TimelineComponentNameType;
  const FinalComponent = TimelineComponents[step2];

  const handleCopy = () => {
    const generateCodeFn = TimelineComponentCode[step1[0].componentCode!];
    const finalCodeString = generateCodeFn({ inputData });
    navigator.clipboard.writeText(finalCodeString);
    console.log("Copied to clipboard!", finalCodeString);
    toast.success("TSX Code Copied Successfully!");
  };

  return (
    <div
      className={` rounded-md sm:py-0 flex-2 bg-special_comp_bg  my-4 break-all`}
    >
      <div className="sm:hidden relative text-[clamp(2rem,3vw+0.6rem,4rem)] bg-primary_color font-extrabold leading-tight ">
        Timeline Preview
      </div>

      <div className="flex  relative my-2 flex-col gap-4 bg-special_comp_bg transition-colors  duration-500 px-4 py-8 rounded-md">
        <div
          className={`${inputData.length > 0 ? "block" : "hidden"}  text-right rounded-md`}
        >
          <button
            onClick={() => handleCopy()}
            className="primary_btn hover:cursor-pointer"
          >
            /Copy Code
          </button>
        </div>
        {inputData.length > 0 ? (
          <FinalComponent data={inputData} />
        ) : (
          // inputData.map((event, index) => (
          //   <div key={index} className="flex relative items-start gap-4 ">
          //     {/* Left side (dot + line) */}
          //     <div className="flex flex-col items-center  h-full">
          //       <div className="w-3 h-3 bg-tertiary_color  rounded-full"></div>

          //       <div className="w-[2px] absolute h-full bg-tertiary_color  "></div>
          //     </div>

          //     <div className="grid gap-4">
          //       <div className="leading-tight">
          //         <div className="text-xl font-extrabold text-tertiary_color break-all">
          //           {event.topic}
          //         </div>
          //         <div className="text-sm text-tertiary_color">
          //           {event.date}
          //         </div>
          //       </div>
          //       <div className="text-sm break-all ">{event.description}</div>
          //     </div>
          //   </div>
          // ))

          <div className="text-[clamp(2rem,3vw+0.6rem,4rem)] h-[100vh] grid place-items-center font-extrabold leading-tight py-4 sm:py-0 text-center">
            Please Enter Data
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePreviewComp;
