import { FileInput, PawPrintIcon, Code2 } from "lucide-react";

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
          className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
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
          className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
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
          className="w-[clamp(1.5rem,2vw+0.1rem,3rem)]  h-[clamp(1.5rem,2vw+0.1rem,3rem)] "
        />
      ),
    },
  ];

  return (
    <div className="bg-primary_color  px-4 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="grid gap-6 ">
        <div className=" ">
          <div className="font-extrabold text-[clamp(1.5rem,2vw+0.3rem,4rem)]">
            WORKING
          </div>
          <div className="text-sm">
            From raw data to profesional visuals in three easy steps.
          </div>
        </div>

        <div className="grid gap-6">
          {workFlowData.map((e: workFlowDataType, index: number) => (
            <div className="flex gap-4 items-start" key={index}>
              <div className=" p-1.5 rounded-md bg-comp_bg">{e.Icon}</div>
              <div>
                <div className="font-bold">
                  {index + 1}. {e.topic}
                </div>
                <div>{e.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-5/12  ">
        <div className=" mt-4 doodle_pattern h-[clamp(6rem,12vw+4rem,22rem)] "></div>
      </div>
    </div>
  );
};

export default WorkFlow;
