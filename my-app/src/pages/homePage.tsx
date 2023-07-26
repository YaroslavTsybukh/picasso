import {SelectComponent} from "../components/select/select.tsx";
import {Box} from "@mui/material";
import {UserPosts} from "../components/userPosts/userPosts.tsx";
import {useState} from "react";

export const HomePage = () => {
    const [userId , setUserId] = useState<number | null>(null)

    return (
        <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'space-between' , marginTop: '60px'}}>
            <SelectComponent setUserId={setUserId}/>
            <Box sx={{ width: '50%' }}>
                {
                    userId ? <UserPosts userId={userId} /> : null
                }
            </Box>
        </Box>
    )
}