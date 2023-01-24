// import {useState, useEffect} from "react";
// import firebase from '../firebase';
// import { onValue, ref, getDatabase, remove, push } from 'firebase/database';


// const TaskFirst = () => {

//     const [tasks, setTasks] = useState([]);

//     const [ taskObject, setTaskObject ] = useState("");

//     useEffect(() => {

//         const db = getDatabase(firebase);
//         const dbRef = ref(db);

//         onValue(dbRef, (dbResponse) => {
//             const dbValue = dbResponse.val();
//             //console.log(dbValue);

//             const arrayTasks = [];

//             for (let propertyKey in dbValue) {
            
//                 console.log(dbValue[propertyKey]);

//                 arrayTasks.push({
//                     name: dbValue[propertyKey],
//                     id: propertyKey,
//                     //taskCategory:{taskCategory} ,
//                     //comment: {comment}
                    
//                 });
//             }

//             setTasks(arrayTasks);


//         });
//     }, []);


//     const handleClick = (TaskKey) => {

//         const db = getDatabase(firebase);
//         const dbRef = ref(db, `/${TaskKey}`);

//         remove(dbRef);

//     }

//     const handleChange = (event) => {
//         setTaskInput(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // create a reference to our database
//         const db = getDatabase(firebase);
//         const dbRef = ref(db);

//         const taskObject = {userName: taskInput, userTask: taskCategory, userComment: comment}

//         push(dbRef, taskObject);


//         setTaskObject("")
//     }
//     return (
//         <section>
           
//             <form action="" onSubmit={(event)}>
//                 <label html ="taskInput">Task Description</label>

//                 <input type="text" name="taskInput" onChange={handleChange} value={taskInput} />
                
//                 {/* Task Category Selection */}
//                 <label htmlfor="taskCategory" onChange={handleChange}>Choose a task category</label>
//                 <select name="taskCategory" id="taskCategory">
//                     <option value="placeholder" disabled>Pick a photo orientation</option>  
//                     <option value="catAdmin">Admin</option>
//                     <option value="catBreak">Break</option>
//                     <option value="catProject">Project</option>
//                     <option value="catMeeting">Meeting</option>
//                 </select>
//                 <textarea rows="4" cols="50" name="comment" form="userForm">
//                     Enter comment here</textarea>

//                 <button>Add</button>
//             </form>

//             <ul>
//                 {
//                     // 7. map through the books piece of state and generate a <li> fore each book within the array.
//                     tasks.map((task) => {
//                         return <li key={task.id}>
//                             {task.name}
//                             <button onClick={() => { handleClick(task.id) }
//                             }>
//                                 submitted
//                             </button>
//                         </li>
//                     })

//                 }
//             </ul>
//         </section>
//     )


// }


// export default TaskFirst;