import { useState } from "react";

const MovieFormPage = (props) => {

    const [title, setTitle] = useState('')
  return (
    <div>
      <h1>Movie Form Page</h1>
      <label>Enter movie title: </label>
      <input type='text' onChange={(event)=>{
setTitle(event.target.value)
      }}></input>
      <button onClick={()=>{
        props.handleAddMovie(title)
        setTitle('')
      }}>Add Movie</button>
    </div>
  );
};

export default MovieFormPage;
