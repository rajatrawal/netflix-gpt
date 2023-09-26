import React from 'react'
import lang from '../../utils/lagnConst'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const currentLang = useSelector(store => store.lang.currentLang);
  return (
    <div>
      <form action="" className='text-center'>
        <input type="text" className='bg-slate-800 w-3/4 text-gray-50 px-4 py-2 mt-4 rounded-s-full rounded-e-full border-cyan-600 border-2 caret-cyan-500 ' placeholder={lang[currentLang].searchBarPlaceholder} />

        <button className='bg-cyan-600 px-3 ml-5 py-2 fw-bold  text-white rounded border-cyan-300 border-2'>
          {lang[currentLang].search}
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar