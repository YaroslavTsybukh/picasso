import { Box } from '@mui/system';
import { useUserPost } from "../../hooks";
import { UserPost } from "../userPost/userPost.tsx";;

interface IUserId {
    userId: number
}

export const UserPosts = ({userId}: IUserId) => {
    const { data } = useUserPost(userId)
    console.log(data)
    return (
        <Box sx={{display: 'flex' , flexDirection: 'column' , gap: '40px'}}>
            {
                data ? data.map(post => <UserPost key={post.id} {...post}/>) : null
            }
        </Box>
    )
}