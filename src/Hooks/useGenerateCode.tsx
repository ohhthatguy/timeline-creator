

const template1Code = `
 <div className="h-1/2 w-full overflow-x-auto  flex  ml-3 mr-3  my-10  shadow-2xl  px-5 scale-90 rounded hover:cursor-pointer transition-all delay-150">

          {userData?.map((data: any, index: any) => (
        
         <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0">
              <div className="h-full relative">
                <div className="  font-bold text-lg pb-2 ">
                  {data.date}
                </div>
        
                <hr className="w-full  border-t-4  border-[#498CF1] my-2 absolute " />
        
                <div className=" h-1/6 text-center   mt-0  overflow-auto  ">
                
           
              
                  <div className="h-1/2 w-px bg-[#498CF1] mx-2 "></div>
        
                  <div className="font-semibold text-lg absolute  w-full  text-start pr-3 break-words leading-tight tracking-tight">{data.event}</div>
                   
                </div>
                
              </div>
            </div>


      ))}


    </div>

     `;

const template2Code = `
 <div className="h-1/2 w-full overflow-auto   flex  px-5 ml-3 mr-3  my-10  shadow-2xl  scale-90   hover:cursor-pointer transition-all delay-150 ">

      
      {userData?.map((e: any, index: any) => (
        <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0  ">
          <div className="  flex flex-col    h-full relative">
            <div className="   max-h-72 overflow-auto w-full text-start pb-2 ">
              <div className="  font-bold text-2xl ">
                {" "}
                {e.date}{" "}
              </div>
              <div className="font-semibold text-lg w-full text-start leading-tight break-words tracking-tight pr-3">
                {e.event}
              </div>
            </div>

            <div className="flex-1 border-l-4 border-dashed border-[#498CF1]  flex flex-col justify-end relative">
              <span className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-0.6rem] bottom-[-0.6rem]"></span>
            </div>

            <hr className="w-full  border-t-4  border-[#498CF1]   " />
          </div>
        </div>
      ))}
    </div>
`;
const template3Code = `<div className="h-1/2 w-full overflow-auto flex px-5 ml-3 mr-3 my-10 shadow-2xl scale-90 hover:cursor-pointer transition-all delay-150">
        {userData?.map((data: any, index: any) => (
          <div key={index} className="h-full w-[200px] sm:w-1/4 shrink-0">
            <div className="grid h-full relative ">
              <div className="h-full pt-4 font-bold text-lg ">{data.date}</div>

              {/* vertical line */}
              <div
                className={
                  visibleCard == index
                    ? "h-3 w-1 bg-[#498CF1] mx-2 absolute mt-16 ml-[46px]"
                    : "hidden"
                }
              ></div>

              {/* horizontal line */}
              <hr
                className={\`w-full border-t-4 \${visibleCard >= index ? "border-[#498CF1]" : "bg-[#48648d]"} mt-14 absolute\`}
              />

              {/* circle */}
              <div
                className={\`text-center mt-11 ml-9 hover:cursor-pointer absolute w-6 h-6 \${visibleCard == index ? "bg-blue-900" : visibleCard >= index ? "bg-[#48648d]" : "bg-blue-200"} rounded-full\`}
                onClick={() => handleClick(index)}
              ></div>

              {/* card */}
              <div
                className={\`\${visibleCard >= index ? "h-56 break-all p-2 grid place-items-center mt-8 bg-[#48648d]" : "hidden"}\`}
              >
                {data.event}
              </div>
            </div>
          </div>
        ))} </div>`;

const template4Code = `   <>
      <div className="h-1/2 w-full  overflow-auto shadow-2xl px-5 ml-3 mr-3 my-10 scale-90   hover:cursor-pointer transition-all delay-150">
  
        
        <div className=" overflow-x-hidden overflow-y-hidden">
          <div className="flex ml-52  gap-3 mt-3">
            {userData.map((e: any, index: number) => (
              <span
                key={index}
                className={\` \${
                  visibleCard == index
                    ? "text-5xl text-orange-500 font-bold font-serif"
                    : "text-4xl text-orange-400"
                } hover:cursor-pointer  transition-all duration-300 \`}
                style={{ transform: \`translateX(\${positionX}px)\` }}
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
            className={\` grid grid-cols-1 place-items-center text-3xl gap-3 w-full opacity-100 transition-all duration-1000\`}
          >
            <div className="text-4xl text-orange-500 font-bold font-serif">
              {userData[visibleCard].date }
            </div>
            <div className="text-2xl break-all whitespace-normal  text-center  ">{userData[visibleCard].event }</div>
          </div>
        </div>
      </div>
    </>`;
const template5Code = `
 <>
      
        <div
  className="h-1/2 w-full overflow-auto  px-10 py-3 ml-3 mr-3 my-10 shadow-2xl scale-90 hover:cursor-pointer transition-all delay-150"
  onMouseMove={handleMouseMove}
  ref={containerRef} // attach ref to scrollable parent
>
    

  <div className="flex gap-2 h-full">
    {userData.map((e: any, index: number) => (
      <div
        key={index}
        className="border w-72 px-2 hover:cursor-pointer rounded-sm shadow-md shadow-ring "
      >
        <section className="text-3xl text-white">{e.date}</section>
        <section className="text-sm text-white mt-2 overflow-y-auto break-words whitespace-normal">
          {e.event}
        </section>
      </div>
    ))}
  </div>

</div>

    </>
`;

export const useGenerateCode = (
 
  userData: any,
  templateCode: number
) => {
  return `
    import React from "react";
    
    const Test = () =>{
        
    const userData = [${userData.map(
      (e: any) => `{date: "${e.date}", event: "${e.event}"}`
    )}];
       
        return(
      /* Please maintain the height of the parentDiv here accordingly!  */

         <div className="h-screen overflow-y-auto overflow-x-hidden">
                    ${
                      templateCode == 1
                        ? template1Code
                        :  template2Code
                   
                    }
        </div>
        );
    }
        export default Test;
    `;
};

export const useGenerateCodeTemplate3 = (
  userData: any
) => {
  return `
import React, { useState } from "react";

const Test = () => {
  const [visibleCard, setVisibleCard] = useState(0);
  const handleClick = (i: number) => {
    if (visibleCard != i) setVisibleCard(i);
  };
  const userData = [${userData.map(
      (e: any) => `{date: "${e.date}", event: "${e.event}"}`
    )}];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      ${template3Code}
    </div>
  );
};

export default Test;
`
};

export const useGenerateCodeTemplate4 = (
  userData: any
) => {
  return `
import React, { useState } from "react";

const getOnlyYear = (dateString: string) => {
  const year = dateString.split("/");
  return year[year.length - 1];
};

const Test = () => {
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

  const userData = [${userData.map(
      (e: any) => `{date: "${e.date}", event: "${e.event}"}`
    )}];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      ${template4Code}
    </div>
  );
};

export default Test;
`
};

export const useGenerateCodeTemplate5 = (
  userData: any
) => {
  return `
import { useRef } from "react";


const Test = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const container = containerRef.current;
      if (!container) return;
    
      const { left, width } = container.getBoundingClientRect();
    
      // mouse position inside container (0 → width)
      const mouseX = e.clientX - left;
    
      // progress (0 → 1)
      const progress = mouseX / width;
    
      // how much we can scroll
      const maxScroll = container.scrollWidth - container.clientWidth;
    
      // final scroll position
      const scrollPos = progress * maxScroll;
    
      // Apply scroll
      container.scrollLeft = scrollPos;
    };

  const userData = [${userData.map(
      (e: any) => `{date: "${e.date}", event: "${e.event}"}`
    )}];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      ${template5Code}
    </div>
  );
};

export default Test;
`
};



