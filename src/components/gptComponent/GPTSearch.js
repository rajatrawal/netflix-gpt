import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggetions from './GPTSuggetions'
const GPTSearch = () => {
    return (
        <div className='bg-slate-950 w-full h-screen'>
            <div className='pt-20'>

                <GPTSearchBar />
                <GPTSuggetions />
            </div>
        </div>
    )
}

export default GPTSearch