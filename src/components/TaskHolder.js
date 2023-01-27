import firebase from "../firebase";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";


const TaskHolder = () => {

    const [taskHolder, setTaskHolder] = useState([]);

    useEffect(() => {

        const db = getDatabase(firebase);
        const dbRef = ref(db);

        onValue(dbRef, (dbResponse) => {
            const dbValue = dbResponse.val();
            //console.log(dbValue)
            const arrayTasks = [];

            for (let propertyKey in dbValue) {

                //console.log(dbValue[propertyKey]);

                arrayTasks.push({
                    title: dbValue[propertyKey],
                    id: propertyKey
                });

            }
            setTaskHolder(arrayTasks);
            console.log(arrayTasks)

        });

    }, []);

    const handleDelete = (id) => {

        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${id}`);
       
        remove(dbRef)
    }

    return (
        <div className="taskHolder">
            <h3>Task View</h3>
            <ul>
                <li className="taskHeader">
                    <h5>Delete</h5>
                    <h5>Name</h5>
                    <h5>Task</h5>
                    <h5>Comment</h5>
                </li>
                {taskHolder.map((task) => {
                    //console.log(task)
                    return (
                        <li className="taskFeed">
                            <button onClick={() => handleDelete(task.id)}>🗑️</button>
                            <p>{task.title.userName}</p>
                            <p>{task.title.userTask}</p>
                            <p>{task.title.userComment}</p>
                        </li>
                    )
                })}
                <li>
                    
                    
                    
                </li>
            </ul>

            {/* Record view*/}

        </div>
    )
};

export default TaskHolder;