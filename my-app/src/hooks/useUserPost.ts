import { useQuery } from "@tanstack/react-query";
import { UsersService } from "../services/users.service.ts";

export const useUserPost = (id:string) => {
    return useQuery(
        ['userPost' , id],
        () => UsersService.getUserPost(id)
        , {
            retry: false,
            refetchOnWindowFocus: false,
        }
    )
}