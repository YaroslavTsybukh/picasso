import {ReactNode, createContext, useState} from "react";
import { useUsers } from "../hooks";
import { IUser } from "../shared/userInfo.interface.ts";

interface IProviderProps {
    children: ReactNode
}

interface IUserInfoContext {
    users: [] | IUser[] | undefined,
    userId: number | null,
    setUserId: (value: number) => void
}

export const UserInfoContext = createContext<IUserInfoContext>({
    users: [],
    userId: null,
    setUserId: () => {}
})

export const AppContextProvider = ({children}: IProviderProps) => {
    const {data: users} = useUsers()
    const [userId , setUserId] = useState<number | null>(null)

    const value = {
        users,
        userId,
        setUserId
    }

    return (
        <UserInfoContext.Provider value={value}>
            {children}
        </UserInfoContext.Provider>
    )
}