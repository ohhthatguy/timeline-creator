import type { createDemoDataType } from "../Create/CreateDemoData";

const Horizontal3 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-custom bg-secondary_color py-12 px-8 transition-colors duration-500">
      {/* 1. The Wrapper: min-w-max ensures the line and items stay in a row */}
      <div className="relative flex items-start gap-0 min-w-max">
        {/* 2. Horizontal Line: Positioned relative to the dots */}
        <div className="absolute top-[38px] left-0 w-full h-1 bg-tertiary_color"></div>

        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col w-72 group">
              {/* Top Section: Date + Dot */}
              <div className="flex flex-col items-center mb-6">
                {/* Date: Positioned above the dot */}
                <div className="text-sm text-text_color mb-3 font-medium">
                  {item.date}
                </div>

                {/* Dot: Acts as the anchor on the line */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-4 border-secondary_color bg-tertiary_color shadow-sm group-hover:scale-125 transition-transform hover:cursor-pointer"></div>
                </div>
              </div>

              {/* Bottom Section: Content */}
              <div className="px-6 text-center">
                <h2 className="font-bold text-lg mb-2 text-tertiary_color leading-tight">
                  {item.topic}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontal3;
