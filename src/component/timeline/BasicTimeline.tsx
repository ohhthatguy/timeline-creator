
import { useContext } from "react"
import { GlobalContext } from "@/context/context"
import GenerateCode from "./code/GenerateCode";

const BasicTimeline= () => {
    
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error('context is left undefined');
    }

    const {userData} = context;

//     const code = `
//  <div className="border-l-4 border-red-900  flex flex-col justify-between gap-10 pl-3 relative  first:mt-10 last:mb-10   ">

// {
//     userData.length > 0 && userData.map((e,index)=>(
        
//             <div key={index} className=" text-[0.65rem] w-[100%] mobile:text-sm tablet:text-[0.9rem]  border-2 border-blue-900  before:h-5 before:bg-green-600 before:w-5 before:border-2 before:border-green-600 before:rounded-full before:absolute before:left-[-12px]  p-3 ">
                
//                 <h2 className="font-bold">{e.date}</h2>
//                 <h3 className="">{e.event}</h3>
            
//             </div>))
// }

// </div>

//     `

const code = `
 <div className="   p-2 overflow-x-hidden overflow-y-auto custom-scrollbar h-[20rem]">
        
            <div className="border-l-4 border-red-900  flex flex-col justify-between gap-10 pl-3 relative  first:mt-10 last:mb-10   ">

                {
                    userData.length > 0 && userData.map((e,index)=>(
                        
                            <div key={index} className=" text-[0.65rem] w-[100%] mobile:text-sm tablet:text-[0.9rem]  border-2 border-blue-900 backdrop-blur-sm rounded before:h-5 before:bg-green-600 before:w-5 before:border-2 before:border-green-600 before:rounded-full before:absolute before:left-[-12px]  p-3 ">
                                
                                <h2 className="font-bold">{e.date}</h2>
                                <h3 className="">{e.event}</h3>
                            
                            </div>

                       

                    ))
                }

            </div>

        </div>
`;

  return (
    <div className="">
       
        <div className="py-2 relative">

            <GenerateCode data={context} code={code}/>
        </div>

        {/* border-2 border-yellow-800 w-72*/} 

        <div className="   p-2 overflow-x-hidden overflow-y-auto custom-scrollbar h-[20rem]">
        
            <div className="border-l-4 border-red-900  flex flex-col justify-between gap-10 pl-3 relative  first:mt-10 last:mb-10   ">

                {
                    userData.length > 0 && userData.map((e,index)=>(
                        
                            <div key={index} className=" text-[0.65rem] w-[100%] mobile:text-sm tablet:text-[0.9rem]  border-2 border-blue-900 backdrop-blur-sm rounded before:h-5 before:bg-green-600 before:w-5 before:border-2 before:border-green-600 before:rounded-full before:absolute before:left-[-12px]  p-3 ">
                                
                                <h2 className="font-bold">{e.date}</h2>
                                <h3 className="">{e.event}</h3>
                            
                            </div>

                       

                    ))
                }

            </div>

        </div>

    </div>
  )
}

export default BasicTimeline

