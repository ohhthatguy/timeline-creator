import { createContext, ReactNode, useState } from "react";
import {userDataType, globalContextType} from "./types"



export const GlobalContext = createContext<globalContextType | undefined>(undefined);


export const GlobalContextProvider = ({children}: {children: ReactNode}) =>{

    const [userData, setUserData] = useState<userDataType[]>([])
    // const [moreData, setMoreData] = useState('l')

    return <GlobalContext.Provider value={{userData, setUserData}}>

        {children}
    
    </GlobalContext.Provider>

}
