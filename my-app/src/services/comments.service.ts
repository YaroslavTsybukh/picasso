import axios from "axios";
import { CreateComment } from "../shared/comments.interface.ts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
export const CommentsService = {
    async createComment(data: CreateComment) {
        try {
            const response = await axios.post<CreateComment>('comments', {data} , {
                headers: {
                    'Content-type': 'application/json'
                }
            })

            return response
        }catch(e) {
            if(e instanceof Error) {
                console.log(e.message)
            } else if( typeof e == 'string') {
                console.log(e)
            }
        }
    }
}