import React from 'react'

const loading = () => {
  return (
    <div className='pt-10 mx-2 lg:pl-52 mx-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42'>
      <div className='animated-pulse'>
      <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
      <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      <div className='h-48 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
      <div className='hidden sm:inline-flex sm:space-x-4'>
      <div className='animated-pulse'>
      <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
      <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      <div className='h-48 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
      <div className='animated-pulse'>
      <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
      <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      <div className='h-48 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>
      </div>
    </div>
  )
}

export default loading
