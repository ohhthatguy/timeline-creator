import { FileInput, PawPrintIcon, Code2 } from "lucide-react";
import PreFooter from "./PreFooter";

const WorkFlow = () => {
  type workFlowDataType = {
    topic: "Input Data" | "Choose Style" | "Export Code";
    description:
      | "Enter Valid data into the website"
      | "Select from Vertical and horizontal types with many options shown accordingly."
      | "Download the production ready JSX component to be used Directly";
    Icon: React.ReactNode;
  };
  const workFlowData: workFlowDataType[] = [
    {
      topic: "Input Data",
      description: "Enter Valid data into the website",
      Icon: (
        <FileInput
          color="brown"
          size={56}
          className={`p-2 rounded-md  `}
          // className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
        />
      ),
    },
    {
      topic: "Choose Style",
      description:
        "Select from Vertical and horizontal types with many options shown accordingly.",
      Icon: (
        <PawPrintIcon
          color="purple"
          size={56}
          className={`p-2 rounded-md  `}
          // className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
        />
      ),
    },
    {
      topic: "Export Code",
      description:
        "Download the production ready JSX component to be used Directly",
      Icon: (
        <Code2
          color="brown"
          size={56}
          className={`p-2 rounded-md  `}
          // className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
        />
      ),
    },
  ];

  return (
    <div className="bg-primary_color  px-4 sm:px-12 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="grid gap-6 ">
        <div className="  text-white">
          <div className="font-extrabold text-[clamp(2.5rem,3.5vw,4.5rem)] ">
            WORKING
          </div>
          <div className="text-lg sm:text-xl ">
            From raw data to profesional visuals in three easy steps.
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 text-card_text_color xs:px-12 xl:px-48 ">
          {workFlowData.map((e: workFlowDataType, index: number) => (
            <div
              key={index}
              className={`
        p-4 rounded-2xl text-text_color bg-ele_bg flex flex-col card_hover justify-between 
        ${index === 2 ? "md:col-span-2" : "md:col-span-1"}
      `}
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {e.Icon}
                </div>
              </div>

              <div className="">
                <h3 className="text-2xl font-bold tracking-tight">
                  {" "}
                  <span className=" select-none">0{index + 1}. </span>
                  {e.topic}
                </h3>
                <p className="mt-2 text-sm font-medium opacity-70 leading-relaxed max-w-prose">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
