import { useState } from "react";
import { Select , SelectChangeEvent , InputLabel , MenuItem , FormControl} from "@mui/material";
import { UsersService } from "../../services/users.service";
import { useQuery , useMutation } from "@tanstack/react-query";

export const SelectComponent = () => {
    const [userId , setUserId] = useState<number>(0)
    const { getUsers } = UsersService
    const { isLoading , data , isError} = useQuery(
        ['users'] ,
         () => UsersService.getUsers(),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        }
    )

    const mutation = useMutation(
        (userId:number) => UsersService.getUserPost(userId),
        {
            onSuccess: () => alert('success')
        }
    )

    const handleChange = (e: SelectChangeEvent) => {
        mutation.mutate(e.target.value)
        setUserId(e.target.value)
    };

    if(isLoading) {
        return <div>...Loading</div>
    } else if (isError) {
        return <div>Ooops , mistake(</div>
    }

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

                { data ?
                    data.map(item => (
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    )) : null
                }
            </Select>
        </FormControl>
    )
}