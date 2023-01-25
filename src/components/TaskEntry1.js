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
        }

        push(dbRef,tasks);
            
        setName("");
        setComment("");
    };


    return (
        <div className="taskEntry" >
           <form onSubmit={handleSubmit}>
                <input placeholder="Enter your name" value={name}
                    onChange={(e) => setName(e.target.value)} />
                
                <select placeholder="Select a task" value={taskCat}
                    onChange={(e) => setTaskCat(e.target.value)} >
                    
                    <option value="catAdmin">Admin</option>
                    <option value="catBreak">Break</option>
                    <option value="catProject">Project</option>
                    <option value="catMeeting">Meeting</option>
                </select>

                <input placeholder="Comment" value={comment}
                    onChange={(e) => setComment(e.target.value)} />


                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;