
import { useState, useRef } from "react";

const getOnlyYear = (dateString:string)=>{
    const year = dateString.split("/");
    return year[year.length - 1];
}


const Timeline4 = ({ userData }: { userData: any }) => {
    
  const [visibleCard, setVisibleCard] = useState(0);
  const [positionX, setpositionX] = useState(1);
  const parentRef = useRef<HTMLDivElement>(null);


  const handlePosition = (oldPos:number, newPos:number, childEle:HTMLElement)=>{

    if(!parentRef.current) return 

    const distBetnParentLeftAndClickedChild =  childEle.getBoundingClientRect().left -
          parentRef.current.getBoundingClientRect().left;

          console.log(distBetnParentLeftAndClickedChild)

    if(oldPos > newPos){
        // setpositionX(prev=> prev + 100)
        setpositionX(distBetnParentLeftAndClickedChild)

    }else{
        setpositionX((distBetnParentLeftAndClickedChild * -1));

        // setpositionX(prev=> prev - 100);
    }
  }

  const handleClick = (i: number, ele:HTMLSpanElement) => {
    if (visibleCard != i){
        setVisibleCard(i); // this card was selected. For the date and event
        handlePosition(visibleCard, i, ele);
    }

  };

  console.log(positionX)

  return (
    <>
      <div className="h-1/2 w-full overflow-auto border border-red-500  px-5 ml-3 mr-3 my-2 ">

        <div className="border border-green-500 border-t-4  overflow-x-hidden overflow-y-hidden">
        <div ref={parentRef} className="flex ml-40 border gap-3 ">
          {userData.map((e: any, index: number) => (
            <span
              key={index}
              className={`border text-4xl hover:cursor-pointer text-orange-400 transition-transform duration-300`}
                   style={{ transform: `translateX(${positionX}px)` }}
              onClick={(ele) => handleClick(index, ele.currentTarget)}
            >
              {getOnlyYear(e.date)}
            </span>
          ))}
        </div>
        </div>

        <div className="flex">
          <div>Left</div>
          <div className="grid grid-cols-1">
            <div>{userData[visibleCard].date}</div>
            <div>{userData[visibleCard].event}</div>
          </div>
          <div>Right</div>
        </div>

        {/* {
         userData?.map((e:any,index:any)=>(
         <Fragment index={index} data={e}  visibleCard={visibleCard}
          setVisibleCard={setVisibleCard}/>
        ))
      } */}
      </div>
    </>
  );
};

export default Timeline4;
