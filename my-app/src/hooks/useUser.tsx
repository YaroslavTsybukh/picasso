import { useQuery } from "@tanstack/react-query";
import { UsersService } from "../services/users.service.ts";
export const useUser = (id: number) => {
    return useQuery(
        ['user' , id],
        () => UsersService.getUser(id), {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        })
}