import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "./Calander";
import { GlobalContext } from "@/context/context";

const InputData = memo(() => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("MyComponent must be used within a GlobalContextProvider");
  }

  const { userData, setUserData, editData, setEditData } = context;

  console.log(userData);

  const handleAddData = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const date = formData.get("date-input");
    const message = formData.get("area");

    console.log(date);
    console.log(message);

    if (Object.keys(editData).length > 0 && typeof date === "string" && typeof message === "string") {
      console.log("here")

      const edited =  userData.map(
          (e, ind) =>
            ind === editData.index
              ? { ...e,   date: date, event: message} // update
              : e // unchanged
        )
        console.log(editData)
        console.log(edited) 
        // console.log(edited)

      setUserData(edited);
    

    } else {
      if (typeof date === "string" && typeof message === "string") {
        setUserData((prev) => [
          ...prev,
          {
            date: date,
            event: message,
          },
        ]);

       
      } else {
        console.error("Form values are invalid");
      }
    }


     setEditData({});
        e.currentTarget.reset();
  };

  console.log(userData)
  return (
    <form
      className="sm:flex  sm:justify-center sm:item-center   "
      onSubmit={handleAddData}
    >
      <fieldset className="fieldset sm:w-9/12 laptop:w-7-12 rounded-box   p-4">
        <label className="label text-white">Date</label>

        <Dialog />

        <label className="label text-white">Text</label>
        <textarea
          className="textarea text-white w-full"
          name="area"
          placeholder="Text Here..."
          defaultValue={Object.keys(editData).length > 0 ? editData.event : ""}
          required
        ></textarea>

        <div className="flex w-full gap-3">
          <button type="submit" className="btn btn-neutral mt-4 flex-1">
            {Object.keys(editData).length > 0 ? "Edit" : "Add"}
          </button>
          <button
            onClick={() => navigate("/TemplatePage")}
            type="button"
            className="btn btn-primary mt-4 flex-1"
          >
            Generate
          </button>
        </div>
      </fieldset>
    </form>
  );
});

export default InputData;
