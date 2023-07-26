import { Select , SelectChangeEvent , InputLabel , MenuItem , FormControl} from "@mui/material";
import { UsersService } from "../../services/users.service";
import { useQuery } from "@tanstack/react-query";


interface IUserPost {
    setUserId: (value: number) => void
}

export const SelectComponent = ({setUserId}: IUserPost) => {
    // const [userId , setUserId] = useState<number|null>(null)

    const { data: userResponse } = useQuery(
        ['users'] ,
         () => UsersService.getUsers(),
        {
            retry: false,
            keepPreviousData: true,
            refetchOnWindowFocus: false
        }
    )

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