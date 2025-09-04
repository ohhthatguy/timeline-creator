export type userDataType = {
    date?: string,
    event?: string,
    index?: number
}


export type globalContextType = {
    userData: userDataType[],
    setUserData: React.Dispatch<React.SetStateAction<userDataType[]>>;
    editData: userDataType,
    setEditData: React.Dispatch<React.SetStateAction<userDataType>>;
}

export type layoutFinal = {
    photo: string,
    description: string
}