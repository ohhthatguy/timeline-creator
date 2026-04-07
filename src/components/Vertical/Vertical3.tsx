import type { createDemoDataType } from "../Create/CreateDemoData";

const Vertical3 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-secondary_color transition-colors duration-500">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-18 top-0 bottom-0 w-1 bg-tertiary_color"></div>

        {data.map((item, index) => {
          return (
            <div key={index} className="flex mb-10 items-start ">
              {/* year */}
              <div className="flex justify-between">
                <div
                  className={`w-16 text-right pr-4 text-sm text-text_color `}
                >
                  {item.date}
                </div>

                {/* dot */}
                <div className="relative flex flex-col items-center ">
                  <div
                    className={`w-5 h-5 rounded-full border-3 bg-tertiary_color border-tertiary_color`}
                  ></div>
                </div>
              </div>

              {/* content */}
              <div className="ml-6 max-w-xl ">
                <h2 className="font-bold text-lg mb-2 text-tertiary_color">
                  {item.topic}
                </h2>

                <p
                  className={`text-sm 
                    "text-gray-400"
                  `}
                >
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

export default Vertical3;
