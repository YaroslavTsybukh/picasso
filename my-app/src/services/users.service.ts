import axios from "axios";

const _apiBase = "https://jsonplaceholder.typicode.com/users"

export const UsersService = {
    async getUsers() {
        const response = await axios.get(_apiBase , {
            headers: {
                "Content-Type": 'application/json'
            }
        })

        return response.data
    }
}