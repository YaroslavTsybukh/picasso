import axios from "axios";
import { IUser , IUserPost } from "../shared/userInfo.interface.ts";
import { IPostComment } from "../shared/postComments.interface.ts";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const UsersService = {
    async getUsers(): Promise<IUser[] | undefined> {
        try {
            const {data} = await axios.get('users', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        } catch(e) {
            if(e instanceof Error) {
                console.log(e.message)
            } else if(typeof e == 'string') {
                console.log(e)
            }
        }

    },
    async getUser (id: number): Promise<IUser | undefined> {
        try {
            const { data } = await axios.get(`users/${id}` , {
                headers: {
                    'Content-type': 'application/json'
                }
            })

            return data

        }catch(e) {
            if(e instanceof Error) {
                console.log(e.message)
            } else if(typeof e == 'string') {
                console.log(e)
            }
        }
    },
    async getUserPosts(id:number): Promise<IUserPost[] | undefined> {
        try {
            const { data } = await axios.get(`posts/?userId=${id}` , {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        } catch(e) {
            if(e instanceof Error) {
                console.log(e.message)
            }
        }
    },
    async getUserPost(id: string): Promise<IUserPost | undefined> {
        try {
            const { data } = await axios.get(`posts/${id}` , {
                headers: {
                    'Content-type': 'application/json'
                }
            })

            return data
        }catch(e) {

            if(e instanceof Error) {
                console.log(e.message)
            } else if(typeof e == "string") {
                console.log(e)
            }
        }
    },
    async getCommentsPost(id:string): Promise<IPostComment[] | undefined> {
        try {
            const { data } = await axios.get(`post/${id}/comments` , {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        }catch(e) {
            if(e instanceof Error){
                console.log(e.message)
            } else if(typeof e == 'string') {
                console.log(e)
            }
        }
    }
}