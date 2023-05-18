import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    deadline: String,
    status: String
});


const postTask = mongoose.model('ToDoList', taskSchema);

export default postTask;
