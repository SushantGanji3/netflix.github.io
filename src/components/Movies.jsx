import React, { useState } from 'react'
import { FaHeart , FaRegHeart} from 'react-icons/fa'

const Movies = ({item }) => {
    const [like, setLike] = useState(false);

  return (
    <div>
      <div className='w-[160px] sm:w-[200px] md: x-[240px] lg:x-[280px] inline-block cursor-pointer relative p-4'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.id}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p>
                {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
            </p>
            
            <p className='white-space-normal text-xs md:text-sm text-bold flex justify-center items-center h-full text-center'>{item.title}</p>
        </div>
    </div>
    </div>
  )
}

export default Movies
