import { useState } from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box} from '@mui/material';
import { useForm  , Controller , SubmitHandler} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {isError, useMutation} from "@tanstack/react-query";
import { CommentsService } from "../../services/comments.service.ts";
import { useParams } from "react-router-dom";
import { CreateComment } from "../../shared/comments.interface.ts";
import { ProgressBar } from "../progressBar/progressBar.tsx";

interface IFormInputs {
    name: string,
    email: string,
    body: string
}

export default function Modal() {
    const {control , reset , handleSubmit} = useForm<IFormInputs>({
        defaultValues: {
            name: '',
            email: '',
            body: ''
        }
    })
    const [open, setOpen] = useState(false);
    const {postId} = useParams()

    const {mutate , isLoading} = useMutation({
        mutationFn: (newComment: CreateComment) => CommentsService.createComment(newComment)
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit:SubmitHandler<IFormInputs> = (data) => {
        if(postId) {
            const newObj = {
                ...data,
                postId

            }
            mutate(newObj)
        }

        reset()
    }

    if(isLoading) {
        return <ProgressBar />
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Write a new comment
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    You can write your new comment below
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <Controller
                            name='name'
                            control={control}
                            render={({field: {onChange , value} , fieldState: {error}}) => (
                                <>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="User name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        required={true}
                                        onChange={(e) => onChange(e.target.value) }
                                        value={value}
                                    />
                                    { error && <div>{error.message}</div> }
                                </>
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        required={true}
                                        onChange={(e) => onChange(e.target.value)}
                                        value={value}
                                    />
                                    { error && <div>{error.message}</div>}
                                </>
                            )}
                        />
                        <Controller
                            control={control}
                            name='body'
                            render={({field: {onChange , value}, fieldState: {error}}) => (
                                <>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Comment"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        required={true}
                                        onChange={(e) => onChange(e.target.value)}
                                        value={value}
                                    />
                                    { error && <div>{error.message}</div>}
                                </>
                            )}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <DevTool control={control} />
        </div>
    );
}
