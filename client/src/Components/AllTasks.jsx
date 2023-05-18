import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getTasks, deleteTask } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        getAllTasks();
    }, []);

    const deleteTaskData = async (id) => {
        await deleteTask(id);
        getAllTasks();
    }

    const getAllTasks = async () => {
        let response = await getTasks();
        setTasks(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {tasks.map((task) => (
                    <TRow key={task.id}>
                        <TableCell>{task._id}</TableCell> {/* change it to task.id to use JSON Server */}
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>{task.deadline}</TableCell>
                        <TableCell>{task.status}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${task._id}`}>Edit</Button> {/* change it to task.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteTaskData(task._id)}>Delete</Button> {/* change it to task.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllTasks;