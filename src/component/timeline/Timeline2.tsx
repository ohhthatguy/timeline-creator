
import { useContext } from "react"
import { GlobalContext } from "@/context/context"
import GenerateCode from "./code/GenerateCode";

const Timeline2= () => {

    const context = useContext(GlobalContext);
    if(!context){
        throw new Error('context is left undefined');
    }

    const {userData} = context;

//     const code = `
// <div className="border-4 border-red-900 flex flex-col justify-between w-[50%] relative p-5 whitespace-pre-wrap break-words">
    
//     {
//     userData.length > 0 && userData.map((e,index)=>(
    
//         <div  key={index} className="flex even:justify-end even:items-end ">
    
//             <div className={\`w-[50%] \${index%2==0 ? "border-r-4 border-green-700 translate-x-1 after:right-0" : "border-l-4 border-green-700 after:left-0"} relative break-words after:border-2 after:absolute after:border-blue-900 after:w-4 p-4 after:top-[50%] \`}>
                
//                 <div className="border-2 border-gray-900 p-3 rounded ">
                                        
//                     <h2>{e.date}</h2>
//                     <h3>{e.event}</h3>
                
//                 </div>
    
//             </div>

//         </div> ))
//     }

// </div>`;

const code = `
 <div className=" p-2 overflow-x-hidden overflow-y-auto  h-[28rem] mobile:w-[20rem] tablet:w-[40rem] bigtablet:w-[50rem] laptop:w-100rem">

            
            <div  className=" grid relative whitespace-pre-wrap break-words w-full ">
           
                {
                    userData.length > 0 && userData.map((e,index)=>(

                        <div  key={index} className="flex even:justify-end even:items-end ">

                            <div className={\`w-[50%]
                            
                            \${index%2==0 ? "border-r-4 border-green-700 translate-x-1  after:right-0" : "border-l-4 border-green-700 after:left-0"}
                            
                            relative break-words after:border-2 after:absolute after:border-blue-900 after:w-4 p-4 after:top-[50%] \`}>

                            
                                <div className="border-2 border-black text-center rounded  p-1  ">
                                    
                                    <h2 className="text-lg font-bold">{e.date}</h2>

                                    <h3>{e.event}</h3>
                                
                                </div>

                            </div>

                        </div>
                       
                    ))
                }
                

            </div>

        </div>
`;

  return (
    
    <div className="">

        <div className="py-2 relative ">
            <GenerateCode data={context} code={code}/>
        </div>
        
        
        {/* border-2 border-red-600 h-full overflow-y-scroll scale-75 mobile:scale-100 grid place-items-center py-5 */}

        <div className=" p-2 overflow-x-hidden overflow-y-auto custom-scrollbar  h-[28rem] mobile:w-[20rem] tablet:w-[40rem] bigtablet:w-[50rem] laptop:w-100rem">

            
            <div  className=" grid relative whitespace-pre-wrap break-words w-full ">
           
                {
                    userData.length > 0 && userData.map((e,index)=>(

                        <div  key={index} className="flex even:justify-end even:items-end ">

                            <div className={`w-[50%]
                            
                            ${index%2==0 ? "border-r-4 border-green-700 translate-x-1  after:right-0" : "border-l-4 border-green-700 after:left-0"}
                            
                            relative break-words after:border-2 after:absolute after:border-blue-900 after:w-4 p-4 after:top-[50%] `}>

                            {/* border-2 border-blue-900  */}
                                <div className="border-2 border-black text-center rounded  p-1  ">
                                    
                                    <h2 className="text-lg font-bold">{e.date}</h2>

                                    <h3>{e.event}</h3>
                                
                                </div>

                            </div>

                        </div>
                       
                    ))
                }
                

            </div>

        </div>


           

            {/* <GenerateCode data={context} code={code}/> */}
           
       
    </div>
  )
}

export default Timeline2

