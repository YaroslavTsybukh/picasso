import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../services/users.service.ts";

export const useUsers = () => {
    return useQuery(
        ['users'] ,
        () => UsersService.getUsers(),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        }
    )
}