import React from "react";
import { useState,useEffect } from 'react';

// import { useState,useEffect } from "react";
import firebase from '../firebase';
import { onValue, ref, getDatabase, push } from 'firebase/database';



function App() {

    //const  [tasks, setTasks] = useState([]);
    const [name, setName] = useState();
    const [taskCat, setTaskCat] = useState();
    const [comment, setComment] = useState();

    useEffect(() => {

        const db = getDatabase(firebase);
        const dbRef = ref(db);

        onValue(dbRef, (dbResponse) => {
            const dbValue = dbResponse.val();
            console.log(dbValue)
            const arrayTasks = [];

                for (let propertyKey in dbValue) {

                console.log(dbValue[propertyKey]);
            
                arrayTasks.push({
                    title: dbValue[propertyKey],
                    id: propertyKey
                });

            }
            setName(arrayTasks);

        });

    }, []);

        const handleSubmit = (event) => {
            event.preventDefault();
        const db = getDatabase(firebase);
        const dbRef = ref(db);

        const tasks = {
            userName: name,
            userTask: taskCat,
            userComment: comment
            
        };
        // if (!event.target[0].value && !event.target[2].value){alert("Please enter a name and a comment")} 
        // else {
        //     setName("");
        //     setComment("");
        //     push(dbRef,tasks);
        // }
            if (!event.target[0].value && !event.target[2].value ) {alert("Please enter a name and a comment")}
        else {

            push(dbRef, tasks);
            setName("");
            setComment("");   
        }

        // push(dbRef, tasks);
        // setName("");
        // setComment("");

        
            
        
    };


    return (
        <div className="taskEntry" >
            <h3>Task Entry</h3>

            <div className="taskForm">
                <form onSubmit={handleSubmit}>
                    {/* <label for="formName">Enter your Name</label> */}
                    <input id="formName" placeholder="Enter your name" 
                        onChange={(e) => setName(e.target.value)} />
                    
                    {/* <label for="formTask">Select a Task</label> */}
                    <select id="formTask" placeholder="Select a task" value={taskCat}
                        onChange={(e) => setTaskCat(e.target.value)} >
                        
                        <option value="Admin">Admin</option>
                        <option value="Break">Break</option>
                        <option value="Project">Project</option>
                        <option value="Meeting">Meeting</option>
                    </select>

                    {/* <label for="formComment">Enter a comment/description</label> */}
                    <input id="formComment" placeholder="Comment" value={comment}
                        onChange={(e) => setComment(e.target.value)} />


                    <button className="entrySubmit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;