import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getTasks, editTask } from '../Service/api';

const defaultValue = {
    title: '',
    description: '',
    deadline: '',
    status: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditTask = () => {
    const [task, setTask] = useState(defaultValue);
    const { title, description, deadline, status } = task;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadTaskDetails();
    }, []);

    const loadTaskDetails = async() => {
        const response = await getTasks(id);
        setTask(response.data);
    }

    const editTaskDetails = async() => {
        const response = await editTask(id, task);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input"> Title </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Description </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Deadline </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='deadline' value={deadline} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Status </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editTaskDetails()}>Edit Task</Button>
            </FormControl>
        </Container>
    )
}

export default EditTask;