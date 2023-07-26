import { IUserPost } from "../../shared/userPosts.interface.ts";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const UserPost = (props: IUserPost) => {
    const { body, title  } = props

    const handleClick = () => {

    }

    return (
        <Box sx={{boxShadow:'2px 2px 10px red', border: '1px solid black;' , padding: '20px'}} onClick={() => handleClick()}>
            <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} gutterBottom={true} variant={'h2'}>{title}</Typography>
            <Typography sx={{ fontSize: '18px'}} paragraph={true}>{body}</Typography>
        </Box>
    )
}