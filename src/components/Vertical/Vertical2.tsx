import type { createDemoDataType } from "../Create/CreateDemoData";

export const Vertical2 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="relative max-w-5xl mx-auto py-10 bg-secondary_color transition-colors duration-500 p-4">
      {/* vertical center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-tertiary_color"></div>

      {data.map((event, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`mb-12 flex min-w-88 max-w-full items-center   ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`relative w-[45%] bg-text_color rounded-md shadow-md p-4 ${
                isLeft ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="bg-tertiary_color break-all text-text_color text-sm font-semibold px-3 py-1 inline-block">
                {event.topic} <br />{" "}
                <span className="text-sm font-black">{event.date}</span>
              </h3>

              <p className="text-gray-600 text-sm mt-3 break-all">
                {event.description}
              </p>

              {/* <button className="mt-3 text-xs border border-red-400 text-red-400 px-3 py-1 rounded">
                Button
              </button> */}
            </div>

            {/* Timeline dot */}
            <div className="  absolute left-1/2 transform -translate-x-1/2 bg-tertiary_color border-secondary_color  w-8 h-8 rounded-full flex items-center justify-center text-text_color text-sm">
              ★
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Vertical2Code = ({
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
    <div className="relative max-w-5xl mx-auto py-10 bg-secondary_color transition-colors duration-500 p-4">
      {/* vertical center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-tertiary_color"></div>

      {data.map((event, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={\`mb-12 flex min-w-88 max-w-full items-center   \${
              isLeft ? "justify-start" : "justify-end"
            }\`}
          >
            {/* Card */}
            <div
              className={\`relative w-[45%] bg-text_color rounded-md shadow-md p-4 \${
                isLeft ? "md:mr-auto" : "md:ml-auto"
              }\`}
            >
              <h3 className="bg-tertiary_color break-all text-text_color text-sm font-semibold px-3 py-1 inline-block">
                {event.topic} <br />{" "}
                <span className="text-sm font-black">{event.date}</span>
              </h3>

              <p className="text-gray-600 text-sm mt-3 break-all">
                {event.description}
              </p>

              {/* <button className="mt-3 text-xs border border-red-400 text-red-400 px-3 py-1 rounded">
                Button
              </button> */}
            </div>

            {/* Timeline dot */}
            <div className="  absolute left-1/2 transform -translate-x-1/2 bg-tertiary_color border-secondary_color  w-8 h-8 rounded-full flex items-center justify-center text-text_color text-sm">
              ★
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TimelineComponent;

`;
};
