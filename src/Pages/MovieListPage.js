import MovieCard from "../Components /MovieCard";


const MovieListPage = (props) => {
  const movieList = props.movieList;
  return (
    <div>
      <h1>Movie List Page</h1>
      <div className="movie-list">
        {movieList.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MovieListPage;
