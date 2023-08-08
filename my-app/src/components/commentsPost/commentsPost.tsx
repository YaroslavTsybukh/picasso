import {Card, CardContent, Typography, Box, Toolbar} from "@mui/material";
import { useCommentsPost } from "../../hooks";
import {useParams} from "react-router-dom";

export const CommentsPost = () => {
    const params = useParams()
    const {data: postComments} = useCommentsPost(params.postId!)

    return (
        <>
            {
                postComments ?
                postComments.map( ({ id, name , body , email}) => (
                    <Card key={id} raised={true} sx={{marginTop: '50px'}}>
                        <CardContent>
                            <Box>
                                <Toolbar>
                                    <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} variant={'h2'} >Name:</Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '0 0 0 20px'}} paragraph={true}>{name}</Typography>
                                </Toolbar>
                                <Toolbar>
                                    <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} variant={'h2'} >Email:</Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '0 0 0 20px'}} paragraph={true}>{email}</Typography>
                                </Toolbar>
                                <Toolbar>
                                    <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} variant={'h2'} >Comment:</Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '0 0 0 20px'}} paragraph={true}>{body}</Typography>
                                </Toolbar>
                            </Box>
                        </CardContent>
                    </Card>
                )) : null
            }
        </>
    )
}