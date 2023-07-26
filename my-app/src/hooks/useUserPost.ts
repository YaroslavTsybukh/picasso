import { useQuery } from "@tanstack/react-query";
import { UsersService } from "../services/users.service.ts";

export const useUserPost = (userId: number) => {

    const {isLoading , data, isError} = useQuery(
        ['userPost' , userId],
        () => UsersService.getUserPosts(userId),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            enabled: !!userId
        }
    )

    return { isLoading , data , isError }
}