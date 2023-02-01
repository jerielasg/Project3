import firebase from "../firebase";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";


const TaskHolder = () => {

    const [taskHolder, setTaskHolder] = useState([]);

    // pull firebase into component
    useEffect(() => {

        const db = getDatabase(firebase);
        const dbRef = ref(db);

        onValue(dbRef, (dbResponse) => {
            const dbValue = dbResponse.val();
            //console.log(dbValue)
            const arrayTasks = [];

            for (let propertyKey in dbValue) {

                arrayTasks.push({
                    title: dbValue[propertyKey],
                    id: propertyKey
                });

            }
            setTaskHolder(arrayTasks);
           

        });

    }, []);
    // function to delete entries
    const handleDelete = (title) => {

        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${title}`);
       
        remove(dbRef)
    }

    return (
        <div className="taskHolder">
            <h3>Task View</h3>
            {/* Table data feed from firebase */}
            <table id="taskData">
                <tr>
                    <th>Delete</th>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Comment</th>
                </tr>
                {taskHolder.map((task) => {
                                    return (
                    <tr>
                        <td><button onClick={() => handleDelete(task.id)}>🗑️</button></td>
                        <td>{task.title.userName}</td>
                        <td>{task.title.userTask}</td>
                        <td>{task.title.userComment}</td>
                    </tr>
                    )
                })}

            </table>

        </div>
    )
};

export default TaskHolder;