import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../services/users.service.ts";

export const useUsers = () => {
    const { data } = useQuery(
        ['users'] ,
        () => UsersService.getUsers(),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        }
    )

    return { data }
}