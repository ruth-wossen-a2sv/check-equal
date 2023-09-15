import React from 'react'

const MiddlePart = () => {
  return (
    <div className='1/2 flex flex-col'>
        {/* nav */}
        <div className='flex justify-between items-center h-24'>
            <div>Hello Rut</div>
            <div className='space-x-1 flex'>
                <div className='bg-white hover:bg-black/20 rounded-full border-purple-800 border-1 font-semibold text-gray-800 text-center h-2/3'>Following</div>
                <div className='bg-white hover:bg-black/20 rounded-full border-purple-800 border-1 font-semibold text-gray-800 text-center h-2/3'>Follower</div>
                 
            </div>
        </div>

    </div>
  )
}

export default MiddlePart