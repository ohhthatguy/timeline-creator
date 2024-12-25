import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode } from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import {z} from "zod"


//this is the schema of individual component of dyanmic array
export const componentSchema = z.object({
    date: z.number()
            .min(1500,{
                message: "minimum number is 1500"
            })
            .max(2026, {
                message: "maximum number is 2026"
            }),
    
    event: z.string()
            .nonempty("cannont leave this field empty!")
})

//this is the schema of final dyanmic array
export const formSchema = z.object({
    userInputData: z.array(componentSchema)
})

//we make a type of final schema and infer/add it to zod
export type formType = z.infer<typeof formSchema>

//create a hook such that when called it calls a functions that binds react-hook-form and zod to work together using resolver having final form schema
export const useFormSchema = ()=>{
    return useForm<formType>({

        defaultValues:{
            userInputData: [{date: 1500, event: ""}]
            },

        resolver: zodResolver(formSchema)
    })
}

//now instead of prop drilling, lets create and share this using context and provider



//provider
export const GlobalFormProvider = ({children}: {children: ReactNode})=>{

    const methodUseForm = useFormSchema();
   

    return <FormProvider {...methodUseForm}>
            {children}
    </FormProvider>

}

//context
export const GlobalFromContext = ()=>{
   return useFormContext<formType>()
}