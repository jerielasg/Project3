import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
// import TaskData from './components/TaskData';
import TaskEntry1 from './components/TaskEntry';

import TaskHolder from './components/TaskHolder';
// import TaskFirst from './components/TaskFirst';


function App() {

  return (
   <main>
      <div className='intro'>
        <h1>Welcome to the Task Tracker</h1>
        <h2>Instructions</h2>
        <p>Click on one of the links to get started. Enter your information and click the submit button</p>
      </div>
      <nav>
        <ul className='links'>
          <button className='buttonLink'><Link to="/entry">Task Entry</Link></button>
          <button className='buttonLink'><Link to="/edit">Task View</Link></button>
          
        </ul>
      </nav>
    
    
      {/* <TaskMain />
      <TaskEntry />
      <TaskHolder />
      <TaskData /> */}
      

      <Routes>
        <Route path="/entry" element= {<TaskEntry1 />} />
        <Route path="/edit" element={<TaskHolder />} /> 

      </Routes>
   </main>
  );
}


export default App;