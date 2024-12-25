import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import {ChevronRight} from "lucide-react"

import { useState } from "react"



type field = {
    id: number,
    date: number,
    event: string
}



const Form = () => {

    const [newField, setNewField] = useState<field[]>([{id: 1, date: 1999 , event: ""}]);

    const createNewField = ()=>{

        const latestFieldIndex = newField.length > 0 ? newField.length -1 : 0;

        const tempNewField: field = {id: newField[latestFieldIndex].id + 1,  date: 1999 , event: ""}

        setNewField(prev=> [...prev, tempNewField])
        
    }

    // console.log(newField)

    const removethisField = (fieldIndex: number)=>{
        // console.log(fieldIndex)

        const removeField = newField.filter(e => e.id !== fieldIndex)

        // console.log(removeField)
        setNewField(removeField)


    }

    const handleUserInput = (id:number, ele:any)=>{
       
       newField.map((e)=>{
            
            if(id === e.id){

                if(ele.target.name == 'event'){
              
                    e.event = ele.target.value
                }

                if(ele.target.name == 'date'){
        
                    e.date = ele.target.value
                }


            }
        })

    }

    const saveUserData = ()=>{
        console.log('make a timelne')
        console.log(newField)
    }

  return (

    <div className="border-2 border-red-900  p-8">

        <div >

            {
                newField.map((e)=>(

                    <form key={e.id} className="flex gap-4 m-2">
 
                            <Input type="number" min={1900} max={2026} placeholder="Date" name="date" onChange={(ele)=>{handleUserInput(e.id, ele)}}/>
                           
                            <Input type="text" placeholder="Event" name="event" onChange={(ele)=>{handleUserInput(e.id, ele)}}/>

                            <Button type="submit" className="active:scale-50" onClick={()=>removethisField(e.id)} >
                                <Trash />
                            </Button>
                    </form>
                ))
            }

        <div className="flex justify-between mt-8">
                <Button className="active:scale-90" onClick={createNewField}> Add Another </Button>

                <Button className="active:scale-90" onClick={saveUserData}>
                    <ChevronRight />
                </Button>

                </div>

        </div>
        
    </div>
  )
}

export default Form