import { useUserPost } from "../../hooks";
import { useParams } from "react-router-dom";
import { Box , CircularProgress , Card , Typography , CardContent} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export const UserPost = () => {
    const params = useParams()
    const { data: postResponse  , isLoading} = useUserPost(params.postId!)

    if(isLoading) {
        return (
                <Box sx={{display : 'flex' , justifyContent: 'center' , height: '100%' , alignItems: 'center'}}>
                    <CircularProgress />
                </Box>
            )
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