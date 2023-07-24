import { useState , useEffect} from "react";
import { Select , SelectChangeEvent , InputLabel , MenuItem , FormControl} from "@mui/material";
import { UsersService } from "../../services/users.service";

export const SelectComponent = () => {
    const [age , setAge] = useState()
    const { getUsers } = UsersService

    console.log(getUsers())

    const handleChange = (e: SelectChangeEvent) => {
        setAge(e.target.value);
    };

    return (
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}