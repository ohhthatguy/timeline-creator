import { createContext, ReactNode, useState } from "react";
import {userDataType, globalContextType} from "./types"



export const GlobalContext = createContext<globalContextType | undefined>(undefined);


export const GlobalContextProvider = ({children}: {children: ReactNode}) =>{

    const [userData, setUserData] = useState<userDataType[]>([]);
    const [editData, setEditData] = useState<userDataType>({});

    

    return <GlobalContext.Provider value={{userData, setUserData, editData, setEditData}}>

        {children}
    
    </GlobalContext.Provider>

}