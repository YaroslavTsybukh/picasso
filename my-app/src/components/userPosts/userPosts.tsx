import { useUserPosts } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { Typography, CardActions, CardContent , Card , Box } from '@mui/material';
import { useContext } from "react";
import { UserInfoContext } from "../../context/appContextProvider.tsx";

export const UserPosts = () => {
    const { userId } = useContext(UserInfoContext)
    const { data } = useUserPosts(userId!)
    const navigate = useNavigate()

    const handleClick = (id: number) => {
        navigate(`posts/${id}`)
    }

    return (
        <Box sx={{display: 'flex' , flexDirection: 'column' , gap: '40px'}}>
            {
                data ? data.map(({title , id}) => (
                    <Card key={id} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: '20px' , fontWeight: 'bold'}} variant={'h2'}>{title}</Typography>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ cursor: "pointer" , color: '#1976d2'}} onClick={() => handleClick(id)}>Learn More</Box>
                        </CardActions>
                    </Card>
                )) : null
            }
        </Box>
    )
}