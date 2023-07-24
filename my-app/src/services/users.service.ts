import axios from "axios";

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
    async getUserPost(id:number) {
        const { data } = await axios.get(`posts/${id}` , {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return data
    }
}