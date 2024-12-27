
import React from "react";
    
const Test = () =>{
        
const userData = [{date: 1500, event: "asdads"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsad"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsad"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadv"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsad"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsad"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsad"},{date: 1500, event: "dv"},{date: 1500, event: "sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsad"}];
    
return(
                
<div className="border-2 border-red-800 h-screen grid place-items-center  overflow-x-scroll ">

        <div className="border-b-2  border-blue-800 pl-4 pr-4 pt-4 pb-3  flex gap-20  mobile:gap-28 scale-75 translate-x-[-15rem] mobile:translate-x-0 mobile:scale-100">

            {
                userData?.map((e,index)=>(

                    <div key={index} className="border-2 relative p-4 border-green-600 grid place-items-center">
                        
                        <div className=" w-28  mobile:w-36  text-center  break-words  max-h-60 overflow-y-auto">
                            {e.event}
                        </div>

                        
                        <div after-dynamic-value={e.date} className={`h-2 w-2 rounded-full absolute bg-black bottom-[-20px] left-[50%] before:border-2 before:border-red-600 before:h-5 before:w-1 before:absolute before:left-[25%] before:bottom-[0%]
                        
                        after:h-fit after:w-fit after:content-[attr(after-dynamic-value)] after:absolute after:top-2 after:left-[-15px] after:text-lg after:font-bold`}>
                        </div>


                    </div>

                    
                ))
            }



        </div>


        </div>

    );
}
    export default Test;
    