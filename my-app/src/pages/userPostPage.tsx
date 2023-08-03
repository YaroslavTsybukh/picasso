import { UserPost } from "../components/userPost/userPost.tsx";
import { UserInfo } from "../components/userInfo/userInfo.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {CommentsPost} from "../components/commentsPost/commentsPost.tsx";

export const UserPostPage = () => {
    return (
        <>
            <Grid container sx={{marginTop: '60px'}}>
                <UserPost />
                <UserInfo />
            </Grid>
            <CommentsPost />
        </>
    )
}