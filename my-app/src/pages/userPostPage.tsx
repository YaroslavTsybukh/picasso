import { UserPost } from "../components/userPost/userPost.tsx";
import { UserInfo } from "../components/userInfo/userInfo.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {CommentsPost} from "../components/commentsPost/commentsPost.tsx";
import {Toolbar, Typography} from "@mui/material";
import Modal from "../components/modal/modal.tsx";

export const UserPostPage = () => {
    return (
        <>
            <Grid container sx={{marginTop: '60px'}}>
                <UserPost />
                <UserInfo />
            </Grid>
            <Toolbar sx={{justifyContent: 'space-between' , marginTop: '30px'}}>
                <Typography sx={{ fontSize: '20px' , fontWeight: 'bold' , margin: "0"}} variant={'h1'}>Comments from users</Typography>
                <Modal />
            </Toolbar>
            <CommentsPost />
        </>
    )
}