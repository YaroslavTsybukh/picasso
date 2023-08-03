import { useQuery } from "@tanstack/react-query";
import { UsersService } from "../services/users.service.ts";

export const useUserPosts = (userId: number) => {

    return useQuery(
        ['userPosts' , userId],
        () => UsersService.getUserPosts(userId),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            enabled: !!userId
        }
    )
}