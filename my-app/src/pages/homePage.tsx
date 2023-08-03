import { SelectComponent } from "../components/select/select.tsx";
import { Box , Typography } from "@mui/material";
import { UserPosts } from "../components/userPosts/userPosts.tsx";
import { useContext } from "react";
import { UserInfoContext } from "../context/appContextProvider.tsx";

export const HomePage = () => {
    const {userId} = useContext(UserInfoContext)

    return (
        <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' , marginTop: '60px'}}>
            <SelectComponent />
            <Box sx={{ width: '50%' }}>
                {
                    userId ? <UserPosts /> : <Typography paragraph={true}>Выберите пользователя</Typography>
                }
            </Box>
        </Box>
    )
}