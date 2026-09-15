import React from 'react'

function Quote() {
  return (
    <div className='py-10 px-2 flex justify-center items-center w-full'>
    <div className='w-full lg:w-1/2 bg-gradient-to-r from-gray-300 to-gray-200 flex items-center justify-between p-4 rounded-2xl shadow-lg'>
      <span className='md:text-2xl text-blue-600'>💬</span>
      <p className='text-black font-semibold text-lg mx-4 flex-1 text-center'>Get Free Consultations For Tech Solutions</p>
      <a 
        href="" 
        className=' text-blue-600 p-1 md:px-6 md:py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg'
      >
        Get A Quote
      </a>
    </div>
    </div>
  )
}

export default Quote