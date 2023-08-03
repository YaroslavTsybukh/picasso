import { useContext } from "react";
import { UserInfoContext } from "../../context/appContextProvider.tsx";
import { Select , SelectChangeEvent , InputLabel , MenuItem , FormControl} from "@mui/material";

export const SelectComponent = () => {
    const { users: userResponse , setUserId } = useContext(UserInfoContext)

    const handleChange = (e: SelectChangeEvent) => {
        // mutation.mutate(Number(e.target.value))
        setUserId(Number(e.target.value))
    };

    // if(isLoading || isLoadingUserPost) {
    //     return <div>...Loading</div>
    // } else if (isError || isErrorUserPost) {
    //     return <div>Ooops , mistake(</div>
    // }

    return (
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue={'Default Value'}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>

                { userResponse ?
                    userResponse.map((item: any) => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    )) : null
                }
            </Select>
        </FormControl>
    )
}