import axios from "axios";
import { IUserPost } from "../shared/userPosts.interface.ts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";


export const UsersService = {
    async getUsers() {
        const {data} = await axios.get('users', {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return data
    },
    async getUserPosts(id:number) {
        const { data } = await axios.get<IUserPost[]>(`posts/?userId=${id}` , {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return data
    }
}