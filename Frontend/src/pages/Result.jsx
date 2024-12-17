// import React from 'react'

import { useState } from "react"
import { assets } from "../assets/assets"

const Result = () => {
  // eslint-disable-next-line no-unused-vars
  const [image,setImage] = useState(assets.sample_img_1)
  return (
    <form action="" className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={assets.sample_img_1} alt="" className=" max-w-sm rounded"/>
          <span className=" absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]"/>
        </div>
        <p>Loading...</p>
      </div>
      <div className="flex w-full max-w-xl bg-neutral-500 text-white mt-10 text-sm p-0.5 rounded-full">
        <input type="text" placeholder="Describe what you want to generate" className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-slate-300"/>
        <button type="submit" className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full">Generate</button>
      </div>

      <div className="flex flex-wrap justify-center text-white gap-2 text-sm p-0.5 mt-10 rounded-full">
        <p className="bg-transparent border text-black border-zinc-900 px-8 py-3 rounded-full cursor-pointer">Generate Another</p>
        <a className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer" download href="">Download</a>
      </div>
    </form>
  )
}

export default Result