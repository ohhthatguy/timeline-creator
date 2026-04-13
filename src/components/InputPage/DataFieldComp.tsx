import type { createDemoDataType } from "../Create/CreateDemoData";
import EnteredSequence from "./EnteredSequence";
const DataFieldComp = ({
  inputData,
  setInputData,
  localInput,
  setLocalInput,
  isEdit,
  setIsEdit,
}: {
  inputData: createDemoDataType[];
  setInputData: React.Dispatch<React.SetStateAction<createDemoDataType[]>>;
  localInput: createDemoDataType;
  setLocalInput: React.Dispatch<React.SetStateAction<createDemoDataType>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAnotherEvent = () => {
    if (!localInput.id) {
      setInputData((prev) => [...prev, { ...localInput, id: Date.now() }]);
    } else {
      setInputData((prev) => {
        return prev.map((item) =>
          item.id === localInput.id ? { ...localInput } : item,
        );
      });
    }

    setLocalInput({
      id: undefined,
      topic: "",
      description: "",
      date: "",
    });

    setIsEdit(false);
  };

  return (
    <div className="flex-1  sm:min-w-72 ">
      <div className="text-[clamp(2.5rem,3vw+0.6rem,4rem)] font-extrabold text-white">
        Project Editor
      </div>

      {/* input field */}
      <div className=" rounded-md px-4 py-8 bg-special_comp_bg ">
        <div className="mb-6">
          <label className="">Date / TimeStamp</label>
          <input
            className="border rounded-xl w-full px-4 py-2  mt-2 bg-primary_color"
            type="date"
            value={localInput.date}
            onChange={(e) =>
              setLocalInput((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>

        <div className="mb-6">
          <label className="">EVENT TOPIC</label>
          <input
            className="border rounded-xl w-full px-4 py-2 bg-primary_color mt-2 "
            placeholder=" John Doe"
            value={localInput.topic}
            onChange={(e) =>
              setLocalInput((prev) => ({ ...prev, topic: e.target.value }))
            }
            type="text"
          />
        </div>

        <div className="">
          <label className="">EVENT DESCRIPTION</label>
          <textarea
            className="border rounded-xl w-full bg-primary_color px-4 py-2  mt-2 "
            placeholder=" John Doe"
            rows={4}
            value={localInput.description}
            onChange={(e) =>
              setLocalInput((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="my-4 flex justify-center items-center">
          <button className="primary_btn" onClick={handleAnotherEvent}>
            {isEdit ? "Update Event" : "+ Add Another Event"}
          </button>
        </div>
      </div>

      {/* timelineSequence inputed field */}
      <EnteredSequence
        inputData={inputData}
        setInputData={setInputData}
        setLocalInput={setLocalInput}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};

export default DataFieldComp;
