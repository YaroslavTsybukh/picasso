import {useQuery} from "@tanstack/react-query";
import { UsersService } from "../services/users.service.ts";

export const useCommentsPost = (id: string) => {
    return useQuery(
        ['commentsPost' , id] ,
        () => UsersService.getCommentsPost(id), {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        })
}