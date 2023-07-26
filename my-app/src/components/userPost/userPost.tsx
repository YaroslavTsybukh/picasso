import { IUserPost } from "../../shared/userPosts.interface.ts";
import { Typography, CardActions, CardContent , Button , Card } from '@mui/material';


export const UserPost = (props: IUserPost) => {
    const { body, title  } = props

    const handleClick = () => {
        console.log(1)
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} gutterBottom={true} variant={'h2'}>{title}</Typography>
                <Typography sx={{ fontSize: '18px'}} paragraph={true}>{body}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleClick    } size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}