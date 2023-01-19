const TaskEntry = () => {
    return (
        <>
            <h3>Enter Task</h3>
            <form>
                <label for="eName">Enter Name</label>
                <input type="text" id="eName" name="eName" value="Name" />

                {/* Category Selection */}

                <textarea rows="4" cols="50" name="comment" form="usrform">
                Enter comment here</textarea>
                
            </form>
        </>
    )
}

export default TaskEntry;