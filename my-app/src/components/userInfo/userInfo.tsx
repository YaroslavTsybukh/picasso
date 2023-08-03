import { useContext } from "react";
import { UserInfoContext } from "../../context/appContextProvider.tsx";
import { useUser } from "../../hooks";
import {Card, CardContent, Typography , Toolbar} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const UserInfo = () => {
    const { userId} = useContext(UserInfoContext)
    const { data: user } = useUser(userId!)

    return (
        <Grid xs={5} xsOffset={2}>
            <Card>
                <CardContent>
                    {
                        user ? (
                            <>
                                <Toolbar sx={{justifyContent: 'space-between'}}>
                                    <Typography sx={{ fontSize: '18px' , marginRight: '20px'}} paragraph={true} >Name: </Typography>
                                    <Typography sx={{ fontSize: '18px'}} paragraph={true} >{user.name}</Typography>
                                </Toolbar>
                                <Toolbar sx={{justifyContent: 'space-between'}}>
                                    <Typography sx={{ fontSize: '18px', marginRight: '20px'}} paragraph={true}>UserName: </Typography>
                                    <Typography sx={{ fontSize: '18px'}} paragraph={true}>{user.username}</Typography>
                                </Toolbar>
                                <Toolbar sx={{justifyContent: 'space-between'}}>
                                    <Typography sx={{ fontSize: '18px', marginRight: '20px'}} paragraph={true}>Email: </Typography>
                                    <Typography sx={{ fontSize: '18px'}} paragraph={true}>{user.email}</Typography>
                                </Toolbar>
                                <Toolbar sx={{justifyContent: 'space-between'}}>
                                    <Typography sx={{ fontSize: '18px', marginRight: '20px'}} paragraph={true}>Phone: </Typography>
                                    <Typography sx={{ fontSize: '18px'}} paragraph={true}>{user.phone}</Typography>
                                </Toolbar>
                                <Toolbar sx={{justifyContent: 'space-between'}}>
                                    <Typography sx={{ fontSize: '18px', marginRight: '20px'}} paragraph={true}>Street: </Typography>
                                    <Typography sx={{ fontSize: '18px'}} paragraph={true}>{user.address.street}</Typography>
                                </Toolbar>
                            </> ) : null
                    }
                </CardContent>
            </Card>
        </Grid>
    )
}