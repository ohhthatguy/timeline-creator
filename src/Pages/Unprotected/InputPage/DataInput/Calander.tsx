import { useEffect, useId, useRef, useState, useContext } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import { GlobalContext } from "@/context/context";

export function Dialog() {

  const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("MyComponent must be used within a GlobalContextProvider");
    }
    const { editData, setEditData } = context;

    

  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const headerId = useId();

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState(new Date());

  // Hold the selected date in state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Hold the input value in state
  const [inputValue, setInputValue] = useState("");

  // Hold the dialog visibility in state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to toggle the dialog visibility
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  // Hook to handle the body scroll behavior and focus trapping
  useEffect(() => {
    const handleBodyScroll = (isOpen: boolean) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
    }
    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen]);

  useEffect(()=>{

    if(Object.keys(editData).length > 0){
      setInputValue(editData.date ?? "")
    }

  },[editData]);

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      
      setInputValue(format(date, "MM/dd/yyyy"));
    }
    dialogRef.current?.close();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    

    setInputValue(e.target.value); // Keep the input value in sync

    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div>
      {/* <label htmlFor="date-input">
        <strong>Pick a Date: </strong>
      </label> */}
      <input
        // style={{ fontSize: "inherit" }}
        className="input text-white w-full"
        id="date-input"
        type="text"
        name="date-input"
        value={inputValue}
        placeholder="MM/dd/yyyy"
        onChange={handleInputChange}
        onClick={toggleDialog}
        readOnly
        required
      />{" "}

      {/* <button
        style={{ fontSize: "inherit" }}
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Open calendar to choose booking date"
      >
        📆
      </button>
      <p aria-live="assertive" aria-atomic="true">
        {selectedDate !== undefined
          ? selectedDate.toDateString()
          : "Please type or pick a date"}
      </p> */}

      <dialog
        role="dialog"
        ref={dialogRef}
        id={dialogId}
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
        <DayPicker
          month={month}
          onMonthChange={setMonth}
          autoFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleDayPickerSelect}
        
        />
      </dialog>
    </div>
  );
}