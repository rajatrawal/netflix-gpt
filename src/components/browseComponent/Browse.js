
import useLoadData from "../../utils/hooks/useLoadData";
import Header from "../loginComponent/Header";
import VideoContainer from "./VideoContainer";
import MovieContainer from "./MovieContainer";
import GPTSearch from "../gptComponent/GPTSearch";
import { useSelector } from "react-redux";


const Browse = () => {
    useLoadData();
    const GPTSearchStatus = useSelector(store => store.gpt.GPTSearchView);


    return (
        <>




            <Header />
            {
                GPTSearchStatus ? <GPTSearch /> :
                    <>
                        <VideoContainer />
                        <MovieContainer />
                    </>

            }



        </>
    )
}

export default Browse