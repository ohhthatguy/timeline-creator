import type { createDemoDataType } from "../Create/CreateDemoData";

export const Vertical1 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="flex flex-col gap-4 bg-secondary_color transition-colors duration-500 p-4">
      {data.map((event, index) => (
        <div key={index} className="flex relative items-start gap-4 ">
          {/* Left side (dot + line) */}
          <div className="flex flex-col items-center  h-full">
            <div className="w-3 h-3 bg-tertiary_color  rounded-full"></div>

            <div className="w-[2px] absolute h-full bg-tertiary_color  "></div>
          </div>

          {/* Content */}
          <div className="grid gap-4">
            <div className="leading-tight">
              <div className="text-xl font-extrabold text-tertiary_color">
                {event.topic}
              </div>
              <div className="text-sm text-tertiary_color">{event.date}</div>
            </div>
            <div className="text-sm">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// export default Vertical1;

export const Vertical1Code = ({
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
    <div className="flex flex-col gap-4 bg-secondary_color transition-colors duration-500 p-4">
      {data.map((event, index) => (
        <div key={index} className="flex relative items-start gap-4 ">
          {/* Left side (dot + line) */}
          <div className="flex flex-col items-center  h-full">
            <div className="w-3 h-3 bg-tertiary_color  rounded-full"></div>

            <div className="w-[2px] absolute h-full bg-tertiary_color  "></div>
          </div>

          {/* Content */}
          <div className="grid gap-4">
            <div className="leading-tight">
              <div className="text-xl font-extrabold text-tertiary_color">
                {event.topic}
              </div>
              <div className="text-sm text-tertiary_color">{event.date}</div>
            </div>
            <div className="text-sm">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TimelineComponent;

`;
};
