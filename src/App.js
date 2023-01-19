import './App.css';
// import TaskData from './components/TaskData';
// import TaskEntry from './components/TaskEntry';
// import TaskMain from './components/TaskMain';
// import TaskHolder from './components/TaskHolder';
import './firebase';

import { push, ref, getDatabase }


function App() {
  const firebaseObj = push(dbRef, "first push to Firebase");
  // const[list, setList] = useState([]);
  // useEffect(() => {
  //   const database = getDatabase(firebase)
  //   const dbRef = ref(database)

  //   onValue(dbRef, (response) => {
  //     console.log(response.val());
  //   })
  // }, [])
  return (
   <main>
      <ul>
        <h1>Test</h1>
      </ul>
      {/* <TaskMain />
      <TaskEntry />
      <TaskHolder />
      <TaskData /> */}

   </main>
  );
}


export default App;