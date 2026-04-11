import { TextAlignJustify, Pencil, Delete } from "lucide-react";
import type { createDemoDataType } from "../Create/CreateDemoData";

const EnteredSequence = ({
  inputData,
  setInputData,
  setLocalInput,
  setIsEdit,
}: {
  inputData: createDemoDataType[];
  setInputData: React.Dispatch<React.SetStateAction<createDemoDataType[]>>;
  setLocalInput: React.Dispatch<React.SetStateAction<createDemoDataType>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleDelete = (id: number) => {
    const afterDeleteData = inputData.filter((e) => e.id !== id);
    setInputData(afterDeleteData);
  };

  const handleEdit = (id: number) => {
    const toEditData = inputData.find((e) => e.id === id);
    setLocalInput(toEditData!);
    setIsEdit(true);
  };
  return (
    <div className={`py-8 ${inputData.length > 0 ? "block" : "hidden"}`}>
      <div className="flex justify-between items-center gap-4">
        <div className="grid gap-2">
          <div className="text-[clamp(2rem,3vw+0.6rem,4rem)] font-extrabold leading-tight">
            Timeline Sequence
          </div>
          <div className="text-text_muted_color leading-tight text-sm">
            {inputData.length > 0
              ? "You can Delete and Edit certain Events"
              : "Your entered data will be shown here."}
          </div>
        </div>
      </div>
      {/* <div
        className={` ${inputData.length ? "block" : "hidden"} w-fit px-3 py-0.5 rounded-md mt-2 border border-tertiary_color`}
      >
        Preview Timeline
      </div> */}

      <div className="mt-4 grid gap-4 overflow-auto scrollbar-custom sm:h-78">
        {inputData.map((e: createDemoDataType) => (
          <div
            className="flex h-fit items-center gap-4  border-tertiary_color/40 bg-comp_bg rounded-md px-4 py-2"
            key={e.id}
          >
            <div className="">
              {" "}
              {/* Prevents the icon from getting squished */}
              <TextAlignJustify />
            </div>

            {/* 1. Added min-w-0 here to allow the container to be smaller than the text */}
            <div className="grid gap-4  w-full min-w-0">
              <div className="flex justify-between gap-4">
                {/* 2. Added min-w-0 here as well */}
                <div className="min-w-0">
                  <div className="font-bold break-all">{e.topic}</div>
                  <div className="text-sm opacity-70">{e.date}</div>
                </div>

                <div className="flex gap-6 shrink-0">
                  <Pencil
                    onClick={() => handleEdit(e.id!)}
                    className="hover:cursor-pointer w-[clamp(1.05rem,2vw+0.1rem,1.5rem)] h-[clamp(1.05rem,2vw+0.1rem,1.5rem)]"
                  />
                  <Delete
                    onClick={() => handleDelete(e.id!)}
                    className="hover:cursor-pointer w-[clamp(1.05rem,2vw+0.1rem,1.5rem)] h-[clamp(1.05rem,2vw+0.1rem,1.5rem)]"
                  />
                </div>
              </div>

              {/* 3. Added break-words to ensure long descriptions wrap */}
              <div className="border border-tertiary_color/10  text-sm break-all">
                {e.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnteredSequence;
