import { useUserPost } from "../../hooks";
import { useParams } from "react-router-dom";
import { Card , Typography , CardContent} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { ProgressBar } from "../progressBar/progressBar.tsx";

export const UserPost = () => {
    const params = useParams()
    const { data: postResponse  , isLoading} = useUserPost(params.postId!)

    if(isLoading) {
        return <ProgressBar />
    }

    return (
        <Grid xs={5}>
            <Card>
                <CardContent>
                    {
                        postResponse ? (
                                <>
                                    <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} variant={'h2'} >{postResponse.title}</Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '20px 0 0'}} paragraph={true}>{postResponse.body}</Typography>
                                </> ) : null
                    }
                </CardContent>
            </Card>
        </Grid>
    )
}