import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-full lg:flex bg-gray-950 text-gray-50">

      <div className="lg:w-1/2 p-5">
        <form className="flex flex-col gap-5" action="#">
          <p className="text-xl font-medium pb-2">Enter your Notes Details</p>
          <input className="bg-gray-600 lg:w-[90%] px-5 py-2 border font-medium border-gray-400 rounded-md" placeholder="Enter your name" type="text" />
          <textarea className="bg-gray-600 lg:w-[90%] px-5 py-2 border font-medium border-gray-400 rounded-md h-32" placeholder="Enter your email" />
          <button className="bg-gray-50 hover:bg-gray-200 text-black lg:w-[90%] cursor-pointer font-bold py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>

      <div className="lg:w-1/2 p-5 lg:border-l-2 border-gray-50 overflow-y-scroll">
        <p className="text-xl font-medium pb-7">Your Notes Details</p>
        <div className="flex flex-row gap-5 flex-wrap">
          <div className="h-40 w-40 bg-white text-black border-gray-400 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default App