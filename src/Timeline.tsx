
import React from "react";
    
const Timeline = () =>{
        
const userData = [{date: 1500, event: "asdasdasd"},{date: 1500, event: "asdasdasd"}];
    
return(
                
<div className="backdrop-blur-sm rounded overflow-x-auto h-[32rem] w-[17.5rem] tablet:w-[40rem] bigtablet:w-[50rem] laptop:w-100rem grid place-items-center px-2 custom-scrollbar ">
    <div className="border-b-2  border-blue-800 pl-4 pr-4 pt-4 pb-3  flex gap-5  tablet:gap-28 ">

        {
            userData?.map((e,index)=>(

                <div key={index} className="border-2 relative p-4 border-blue-600 bg-slate-600 grid place-items-center">
                    
                    <div className=" w-10  tablet:w-36  text-center  break-words  max-h-60 overflow-y-auto">
                        {e.event}
                    </div>

                    
                    <div after-dynamic-value={e.date} className={`h-2 w-2 rounded-full absolute bg-black bottom-[-20px] left-[50%] before:border-2 before:border-green-600 before:h-5 before:w-1 before:absolute before:left-[25%] before:bottom-[0%]
                    
                    after:h-fit after:w-fit after:content-[attr(after-dynamic-value)] after:absolute after:top-2 after:left-[-15px] after:text-lg after:font-bold`}>
                    </div>


                </div>

                
            ))
        }



    </div>

</div>

    );
}
    export default Timeline;
    