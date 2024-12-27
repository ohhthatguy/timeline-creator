
import { useContext } from "react"
import { GlobalContext } from "@/context/context"

const BasicTimeline= () => {
    
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error('context is left undefined');
    }

    const {userData} = context;



  return (
    <div>
        basic timeline
        <div className=" border-2 border-yellow-700  overflow-y-scroll grid place-items-center py-5 ">

            <div className="border-l-4 border-red-900 flex flex-col justify-between gap-10 pl-3 relative scale-75 translate-x-[-30px] tablet:scale-100 mobile:translate-x-0">

                {
                    userData.length > 0 && userData.map((e,index)=>(
                     
                            <div key={index} className="border-2 border-blue-900  before:h-5 before:bg-green-600 before:w-5 before:border-2 before:border-green-600 before:rounded-full before:absolute before:left-[-12px] first:mt-10 last:mb-10 p-3 w-72">
                                
                                <h2 className="text-lg font-bold">{e.date}</h2>
                                <h3 className="text-lg">{e.event}</h3>
                            
                            </div>

                       

                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default BasicTimeline

