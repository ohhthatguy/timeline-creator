import type { createDemoDataType } from "../Create/CreateDemoData";

const Horizontal1 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="flex flex-row gap-4 bg-secondary_color transition-colors duration-500 p-4">
      {data.map((event, index) => (
        <div
          key={index}
          className="flex relative items-start gap-4 min-w-[300px]"
        >
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

export default Horizontal1;
