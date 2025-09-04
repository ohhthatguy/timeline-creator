import { useState } from "react";

const getOnlyYear = (dateString: string) => {
  const year = dateString.split("/");
  return year[year.length - 1];
};

const Timeline4 = ({ userData }: { userData: any }) => {
  const [visibleCard, setVisibleCard] = useState(0);


  const [positionX, setpositionX] = useState(1);

  const handlePosition = (
    oldPos: number,
    newPos: number,
    childEle: HTMLElement
  ) => {
    if (oldPos > newPos) {
      setpositionX(
        (prev) => prev + (childEle.clientWidth + 10) * (oldPos - newPos)
      ); //to right
    } else {
      setpositionX((childEle.clientWidth + 10) * -1 * newPos); //to eft
    }

  };

  const handleClick = (i: number, ele: HTMLSpanElement) => {
    if (visibleCard != i) {
      setVisibleCard(i); // this card was selected. For the date and event
      handlePosition(visibleCard, i, ele);
    }
  };


  return (
    <>
      <div className="h-1/2 w-full overflow-auto shadow-2xl px-5 ml-3 mr-3 my-10 scale-90 hover:scale-95  hover:cursor-pointer transition-all delay-150">
        <div className=" overflow-x-hidden overflow-y-hidden">
          <div className="flex ml-52  gap-3 mt-3">
            {userData.map((e: any, index: number) => (
              <span
                key={index}
                className={` ${
                  visibleCard == index
                    ? "text-5xl text-orange-500 font-bold font-serif"
                    : "text-4xl text-orange-400"
                } hover:cursor-pointer  transition-all duration-300 `}
                style={{ transform: `translateX(${positionX}px)` }}
                onClick={(ele) => handleClick(index, ele.currentTarget)}
              >
                {getOnlyYear(e.date)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex  justify-center items-center mt-9 ">
          <div
            key={userData[visibleCard].date}
            className={` grid grid-cols-1 place-items-center text-3xl gap-3 w-full opacity-100 transition-all duration-1000`}
          >
            <div className="text-4xl text-orange-500 font-bold font-serif">
              {userData[visibleCard].date }
            </div>
            <div className="text-2xl break-all whitespace-normal  text-center  ">{userData[visibleCard].event }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline4;
