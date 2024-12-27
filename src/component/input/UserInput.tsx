import { useContext } from "react"
import { GlobalContext } from "@/context/context"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import {ChevronRight} from "lucide-react"

import { formType, GlobalFromContext } from "./schemas"
import { useFieldArray } from "react-hook-form"




const UserInput = () => {


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
    }

  return (

    <div className="  ">

        <form onSubmit={handleSubmit(handleSubmission)}>

            {
                fields.map((e, index)=>(
                    // border-2 border-green-800
                    <section key={e.id} className="shadow-md p-2 flex flex-col gap-3 m-2 tablet:flex-row tablet:justify-between">
 
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

            <section className="flex justify-between mt-8 mb-2 mx-2">
                <Button className="active:scale-90" type="button" onClick={()=> append({date: 1500, event: ""})}> Add Another </Button>

                <Button className="active:scale-90" type="submit">
                    <ChevronRight />
                </Button>

            </section>

        </form>
        
    </div>
  )
}

export default UserInput