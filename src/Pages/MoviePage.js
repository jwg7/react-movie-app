import { useParams } from "react-router-dom";

const MoviePage = (props) => {
  const movieList = props.movieList;

  const params = useParams();
  const titleParam = params.title;

  const foundMovie = movieList.find((movie) => {
    return movie.Title === titleParam
  });

  if (foundMovie.Title === params.title) {
  return (
    <div>
      <h1>Movie Page</h1>
      <h2>{foundMovie.Title}</h2>
      <p>{foundMovie.Director}</p>
      <p>{foundMovie.Actors}</p>
      <p>{foundMovie.Plot}</p>
      <img src={foundMovie.Images[0]} width='600px'/>
    </div>
  );
};
}

export default MoviePage;
