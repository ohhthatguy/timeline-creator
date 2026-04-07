import type { createDemoDataType } from "../Create/CreateDemoData";

const Vertical4 = ({ data }: { data: createDemoDataType[] }) => {
  return (
    <div className="relative mx-auto w-full max-w-4xl py-10 px-6 bg-secondary_color transition-colors duration-500">
      {/* 1. The Vertical Line (Moved to the right) */}
      <div className="absolute left-10 top-0 h-full w-[2px] bg-neutral_color/20 dark:bg-tertiary_color/30" />

      {/* 2. Timeline Items Wrapper */}
      <div className="space-y-16">
        {data.map((item, i) => {
          // const Icon = item.icon || Calendar;

          return (
            <div key={i} className="relative flex items-center justify-end ">
              {/* CONTENT (Aligned Right) */}
              <div className="ml-12 w-full ">
                <div className="text-tertiary_color">
                  <div className="text-[clamp(1rem,2vw,1.3rem)] font-extrabold">
                    {item.topic}
                  </div>
                  <div className="text-xs font-mono ">{item.date}</div>
                </div>

                <div className="mt-4">{item.description}</div>
                {/* <h3 className="text-[clamp(1rem,2vw,1.3rem)] font-bold text-neutral_color mb-1">
                  {item.topic}
                </h3>
                <p className="text-sm text-neutral_color/60 leading-relaxed max-w-md ml-auto">
                  {item.description}
                </p> */}
              </div>

              {/* ICON CIRCLE (Fixed on the right line) */}
              <div className="absolute top-2 left-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-tertiary_color bg-secondary_color shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {/* <Icon className="size-6 text-primary_color" /> */}*
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vertical4;
