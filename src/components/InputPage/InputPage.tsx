import { useState } from "react";
import type { createDemoDataType } from "../Create/CreateDemoData";
import DataFieldComp from "./DataFieldComp";
import TimelinePreviewComp from "./TimelinePreviewComp";

const InputPage = () => {
  const [inputData, setInputData] = useState<createDemoDataType[] | []>([]);
  const [localInput, setLocalInput] = useState<createDemoDataType>({
    id: undefined,
    topic: "",
    description: "",
    date: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className="bg-primary_color px-4 sm:px-4 ">
      <div className="flex flex-col sm:flex-row gap-4  ">
        <DataFieldComp
          inputData={inputData}
          setInputData={setInputData}
          localInput={localInput}
          setLocalInput={setLocalInput}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />

        <TimelinePreviewComp inputData={inputData} />
      </div>
    </div>
  );
};

export default InputPage;
