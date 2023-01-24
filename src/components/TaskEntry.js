// import React from "react";
// import { useState,useEffect } from "react";
// import firebase from '../firebase';
// import { onValue, ref, getDatabase, push } from 'firebase/database';



// const TaskEntry = () => {
//     const taskTest = {
//         taskUser: "",
//         taskCategory: "",
//         comment: ""
//     };
//     const [tasks, setTasks] = useState([taskTest]);

//     const [nameTT , setNameTT] = useState("");
//     const [categoryTT, setCategoryTT] = useState("");
//     const [commentTT, setCommentTT] = useState("");

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
//                     title:dbValue[propertyKey],
//                     id:propertyKey,
//                     userName: nameTT, 
//                     userTask: categoryTT, 
//                     userComment: commentTT

//                 });

//             };
//             setTasks(arrayTasks);
//         })
//     }, []);


//     const handleChange = (event) => {
//         setTasks(event.target.value);
//         setNameTT(event.target.value);
//         setCategoryTT(event.target.value);
//         setCommentTT(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventdefault();
//         const db = getDatabase(firebase);
//         const dbRef = ref(db);

//         const tasks = {userName: {nameTT}, userTask: {categoryTT}, userComment: {commentTT}}

//         push(dbRef,tasks);

//         setTasks("");
//     };



//     return (
//         <>
//             <h3>Enter Task</h3>
//             <form className="taskForm" onSubmit={handleSubmit}>

//                 <label html="taskUser">Enter Your Name</label>
//                 <input type="text" name="taskUser" value={nameTT} onChange={handleChange} />

//                 {/* Task Category Selection */}
//                 <label html="taskCategory" >Choose a task category</label>
//                 <select name="taskCategory" id="taskCategory" value={categoryTT} onChange={handleChange}>
//                     <option value="placeholder" disabled>Select a task</option>
//                     <option value="catAdmin">Admin</option>
//                     <option value="catBreak">Break</option>
//                     <option value="catProject">Project</option>
//                     <option value="catMeeting">Meeting</option>
//                 </select>


//                 <textarea rows="4" cols="50" name="comment" form="userForm" value={commentTT} onChange={handleChange}>
//                     Enter comment here</textarea>

//                 <button type="submit">Submit</button>
//             </form>

//             <ul>
//             </ul>
//         </>
//     )
// }

// export default TaskEntry;