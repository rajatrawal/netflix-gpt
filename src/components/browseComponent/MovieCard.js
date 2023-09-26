import React from 'react'
import { IMAGE_URL } from '../../utils/constant';
const MovieCard = ({ data }) => {
    return (
        <div className='w-56 mr-3 cursor-pointer'>
            <img src={IMAGE_URL + data?.backdrop_path} alt={data?.original_title} />
        </div>
    )
}

export default MovieCard