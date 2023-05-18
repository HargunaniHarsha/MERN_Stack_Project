import Task from '../schema/userSchema.js'

// Get all tasks
export const getTasks = async (request, response) => {
    try{
        const tasks = await Task.find();
        response.status(200).json(tasks);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of task in database
export const addTask = async (request, response) => {
    const task = request.body;
    
    const newTask = new Task(task);
    try{
        await newTask.save();
        response.status(201).json(newTask);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getTaskById = async (request, response) => {
    try{
        const task = await Task.findById(request.params.id);
        response.status(200).json(task);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited task in the database
export const editTask = async (request, response) => {
    let task = request.body;

    const editTask = new Task(task);
    try{
        await Task.updateOne({_id: request.params.id}, editTask);
        response.status(201).json(editTask);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteTask = async (request, response) => {
    try{
        await Task.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
