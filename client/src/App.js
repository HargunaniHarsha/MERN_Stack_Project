import './App.css';
import AllTasks from './Components/AllTasks';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
import NavBar from './Components/NavBar';
import Code from './Components/Code';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Code /> } />
        <Route path="/all" element={<AllTasks /> } />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;