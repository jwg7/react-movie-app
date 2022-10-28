import { Outlet } from "react-router-dom"
import MovieSidebar from "../Components /MovieSidebar"


const MovieLayout = () => {
    return (
        <div className="movie-layout">
<MovieSidebar />
<div className="movie-content">
<Outlet/>
</div>
        </div>
    )
}

export default MovieLayout