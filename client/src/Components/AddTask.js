import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addTask } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddTask = () => {
    const [task, setTask] = useState(defaultValue);
    const { title, description, deadline, status } = task;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const addTaskDetails = async() => {
        await addTask(task);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">New Task</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input"> Title </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Description </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Deadline </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='deadline' value={deadline} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input"> Status </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addTaskDetails()}>Add Task</Button>
            </FormControl>
        </Container>
    )
}

export default AddTask;
