import { Outlet } from "react-router-dom"
import MovieSidebar from "../Components /MovieSidebar"


const MovieLayout = (props) => {
   const movieList = props.movieList
    return (
        <div className="movie-layout">
<MovieSidebar movieList={movieList}/>
<div className="movie-content">
<Outlet/>
</div>
        </div>
    )
}

export default MovieLayout