import {Box, CircularProgress} from "@mui/material";

export const ProgressBar = () => {
    return (
        <Box sx={{display : 'flex' , justifyContent: 'center' , height: '100%' , alignItems: 'center'}}>
            <CircularProgress />
        </Box>
    )
}