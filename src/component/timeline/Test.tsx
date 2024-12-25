
import React from "react";


const Test = () =>{
    
const userData = [{date: 1500, event: "asdasd"}];
   
    return(
                
<div className="border-4 border-red-900 flex flex-col justify-between w-[50%] relative p-5 whitespace-pre-wrap break-words">
    
    {
       userData.length > 0 && userData.map((e,index)=>(
     
        <div  key={index} className="flex even:justify-end even:items-end ">
     
             <div className={`w-[50%] ${index%2==0 ? "border-r-4 border-green-700 translate-x-1 after:right-0" : "border-l-4 border-green-700 after:left-0"} relative break-words after:border-2 after:absolute after:border-blue-900 after:w-4 p-4 after:top-[50%] `}>
                   
                <div className="border-2 border-gray-900 p-3 rounded ">
                                         
                    <h2>{e.date}</h2>
                    <h3>{e.event}</h3>
                
                </div>
     
            </div>

        </div> ))
    }

 </div>
    );
}
    export default Test;