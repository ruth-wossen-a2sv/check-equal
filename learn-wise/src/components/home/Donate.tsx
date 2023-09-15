import React from 'react'

const Donate = () => {
  return (
    <div className='w-full flex flex-col h-48 bg-purple-800 rounded shadow-lg my-10 text-white bg-gradient-to-t from-transparent-to-white text-center'>
        <p className='pb-6 text-2xl font-light pt-10'>
            Help us to help others
        </p>
        
        <button className='bg-white rounded-full w-40 h-12 text-purple-900 font-semibold hover:font-bold mx-auto'>
           Donate Now 
        </button>
        

    </div>
  )
}

export default Donate