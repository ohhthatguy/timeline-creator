import type { createDemoDataType } from "../Create/CreateDemoData";

export const Horizontal2 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="relative min-w-max h-78 w-full overflow-x-auto scrollbar-custom bg-secondary_color py-24 px-10 transition-colors duration-500">
      {/* <div className="relative min-w-max "> */}
      <div className="absolute top-2/5  left-0 w-full h-[3px] bg-tertiary_color transform -translate-y-1/2"></div>

      {/* 2. Timeline Wrapper */}
      <div className="flex   items-center gap-20 min-w-max ">
        {data.map((event, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center w-[300px]"
            >
              {/* Card (Alternates Above and Below) */}
              <div
                className={`absolute w-full bg-text_color rounded-md shadow-lg p-4 transition-transform hover:scale-105 ${
                  isTop
                    ? "bottom-12" // Position above the line
                    : "top-12" // Position below the line
                }`}
              >
                {/* Small indicator arrow pointing to the dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-text_color rotate-45 ${
                    isTop ? "-bottom-1.5" : "-top-1.5"
                  }`}
                />

                <h3 className="bg-tertiary_color text-text_color text-xs font-bold px-3 py-1 inline-block rounded-sm">
                  {event.topic}
                </h3>
                <p className="text-gray-600 text-[13px] mt-3 leading-snug">
                  {event.description}
                </p>
                <span className="block mt-2 text-[10px] font-mono text-tertiary_color/70">
                  {event.date}
                </span>
              </div>

              {/* Timeline Dot (Fixed on the center line) */}
              <div className="z-10 bg-tertiary_color border-4 border-secondary_color w-10 h-10 rounded-full flex items-center justify-center text-text_color text-lg shadow-xl">
                ★
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export const Horizontal2Code = ({
  inputData,
}: {
  inputData: createDemoDataType[];
}) => {
  const dataString = JSON.stringify(inputData, null, 2);
  return `
type createDemoDataType = {
  topic: string;
  description: string;
  date: string; //yyyy-mm-dd
  id: number | undefined;
};

const TimelineComponent = () => {
const data: createDemoDataType[] = ${dataString};
   return (
    <div className="relative min-w-max h-78 w-full overflow-x-auto scrollbar-custom bg-secondary_color py-24 px-10 transition-colors duration-500">
      {/* <div className="relative min-w-max "> */}
      <div className="absolute top-2/5  left-0 w-full h-[3px] bg-tertiary_color transform -translate-y-1/2"></div>

      {/* 2. Timeline Wrapper */}
      <div className="flex   items-center gap-20 min-w-max ">
        {data.map((event, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center w-[300px]"
            >
              {/* Card (Alternates Above and Below) */}
              <div
                className={\`absolute w-full bg-text_color rounded-md shadow-lg p-4 transition-transform hover:scale-105 \${
                  isTop
                    ? "bottom-12" // Position above the line
                    : "top-12" // Position below the line
                }\`}
              >
                {/* Small indicator arrow pointing to the dot */}
                <div
                  className={\`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-text_color rotate-45 \${
                    isTop ? "-bottom-1.5" : "-top-1.5"
                  }\`}
                />

                <h3 className="bg-tertiary_color text-text_color text-xs font-bold px-3 py-1 inline-block rounded-sm">
                  {event.topic}
                </h3>
                <p className="text-gray-600 text-[13px] mt-3 leading-snug">
                  {event.description}
                </p>
                <span className="block mt-2 text-[10px] font-mono text-tertiary_color/70">
                  {event.date}
                </span>
              </div>

              {/* Timeline Dot (Fixed on the center line) */}
              <div className="z-10 bg-tertiary_color border-4 border-secondary_color w-10 h-10 rounded-full flex items-center justify-center text-text_color text-lg shadow-xl">
                ★
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};
export default TimelineComponent;

`;
};
