import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const MovieContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className=" bg-black">

            <div className="mx-10 pb-4 -mt-56  relative z-20">
                {
                    movies?.moviesList?.map((movies) => (

                        <MovieList title={movies.title} key={movies.title} movies={movies.list} />
                    ))
                }

            </div>
        </div>
    )
}

export default MovieContainer;