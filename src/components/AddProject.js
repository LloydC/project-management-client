import { useState } from "react";
import axios from "axios";
 
const API_URL = process.env.API_URL || "http://localhost:5005";
 
function AddProject({ updatePage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //send a post request with my project data
    axios.post(`${API_URL}/api/projects`, { title, description })
        .then(() => updatePage())
        .then(()=> {
          setTitle("");
          setDescription("");
        })
        .catch(err => console.log(err))
    // update my list of projects
  }
 
 
  return (
    <div className="AddProject">
      <h3>Add Project</h3>
 
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
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddProject;