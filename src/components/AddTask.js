import { useState } from "react";
import axios from "axios";
 
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
 
 
function AddTask({ projectId, refreshPage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // post request to our task route handler
    axios.post(`${API_URL}/api/tasks`, {title, description, projectId})
    .then(() => refreshPage())
    .then(()=> {
        setTitle("");
        setDescription("");
    })
    .catch(err => console.log(err))
    // navigate the user to the project details page
  };
 
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
 
export default AddTask;