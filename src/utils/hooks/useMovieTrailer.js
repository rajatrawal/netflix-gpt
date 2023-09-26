import { useEffect } from "react"
import { API_OPT } from '../../utils/constant';
import { useDispatch } from "react-redux";
import { addTrailer } from "../moviesSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const fetchMovieVideo = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPT);

        const videos = await data.json();
        const filterVideos = await videos?.results.filter((e) => e.type === "Trailer");
        let trailer = videos[0];
        if (filterVideos.length > 0) {
            trailer = filterVideos[0];
        }
        dispatch(addTrailer(trailer))
    }
    useEffect(() => {
        fetchMovieVideo();
    }, [])

}

export default useMovieTrailer;