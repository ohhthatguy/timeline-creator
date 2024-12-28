export type userDataType = {
    date: number,
    event: string
}


export type globalContextType = {
    userData: userDataType[],
    setUserData: React.Dispatch<React.SetStateAction<userDataType[]>>;

}

export type layoutFinal = {
    photo: string,
    description: string
}

