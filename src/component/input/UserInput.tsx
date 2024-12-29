import { useContext, useState } from "react"
import { GlobalContext } from "@/context/context"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import {ChevronRight} from "lucide-react"

import { formType, GlobalFromContext } from "./schemas"
import { useFieldArray } from "react-hook-form"

import BasicTimeline from "../timeline/BasicTimeline"
import Timeline2 from "../timeline/Timeline2"
import Timeline3 from "../timeline/Timeline3"


const UserInput = ({name}:{name:string}) => {

    console.log(name)
    const [back,setBack] = useState(true)
    const {control, handleSubmit, formState:{errors}} = GlobalFromContext();

    const {fields, append, remove} = useFieldArray({
        control,
        name: "userInputData"
        
    })

   
    
    const contextData= useContext(GlobalContext)
    if (!contextData) {
        // You can return null, throw an error, or display a fallback UI
        throw new Error("GlobalContext is not provided properly.");
    }

    const {userData, setUserData} = contextData
    console.log(userData)

    const handleSubmission = (data:formType)=>{
        
        setUserData(data.userInputData)
        setBack(prev=>!prev)
    }

    
  return (<>
  
  
        <div >
            {
                back ?
                        (<form onSubmit={handleSubmit(handleSubmission)}>
                            <div className=" max-h-[30rem] custom-scrollbar overflow-auto">
                            {
                                fields.map((e, index)=>(
                                
                                    <section key={e.id} className="shadow-md border-2  backdrop-blur-sm p-2 flex flex-col gap-3 m-2 tablet:flex-row tablet:justify-between">
                
                                            <Input type="number" placeholder="Date" {...control.register(`userInputData.${index}.date`, {valueAsNumber: true})} className={errors.userInputData?.[index]?.date ? 'border-red-700' : '' } />

                                            {errors.userInputData?.[index]?.date && (
                                                <p className="text-blue-800">
                                                    {errors.userInputData[index].date.message}
                                                </p>
                                            )}
                                        
                                            <Input type="text" placeholder="Event" {...control.register(`userInputData.${index}.event`)}  className={errors.userInputData?.[index]?.event ? 'border-red-700' : '' }  />

                                            {errors.userInputData?.[index]?.event && (
                                                <p className="text-red-700">
                                                    {errors.userInputData[index].event.message}
                                                </p>
                                            )}

                                            <Button className="active:scale-50" onClick={()=> remove(index)}>
                                                <Trash />
                                            </Button>
                                    </section>
                                ))
                            }
                            </div>

                            <section className="flex justify-between mt-4 mb-2 mx-2">
                                <Button className="active:scale-90" type="button" onClick={()=> append({date: 1500, event: ""})}> Add Another </Button>

                                <Button className="active:scale-90" type="submit">
                                    <ChevronRight />
                                </Button>

                            </section>

                        </form>)
                      :

                      (<div className="">
                       
                        {/* <section className="flex justify-between mt-4 mb-2 mx-2 border-2"> */}
                    
                                <Button className="rotate-180" onClick={()=>setBack(prev=>!prev)}>
                                    <ChevronRight />
                                </Button>

                        {/* </section> */}
                        
                        {(name == 'Basic Timeline') && <BasicTimeline />}

                        {(name == 'Basic Timeline2') && <Timeline2 />}

                        {(name == 'Horizontal Timeline') && <Timeline3 />}
                    </div>)
            
            }
        </div>
        
  
    </>)
}

export default UserInput