import { Link } from "react-router-dom";


const MovieSidebar = (props) => {
  const movieList = props.movieList
  return (
    <div class="movie-sidebar">
      <h2>Movie Sidebar</h2>
      {movieList.map((movie, index)=>{
        return (
          <Link to={`/movies/${movie.Title}`} key={index}>{movie.Title}</Link>
        )
      })}
    </div>
  );
};

export default MovieSidebar;
