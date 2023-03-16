import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
  <div className="bg-gradient-to-r  from-teal-900 to-black">

  <div className="flex flex-col lg:flex-row items-center justify-evenly py-12 px-4 h-screen">
  <div className="lg:w-1/2 text-white mx-auto">
    <h1 className="text-4xl font-bold mb-4">Typo Terminator</h1>
    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mauris vel tellus aliquam, id pharetra enim lobortis.</p>
    <a href="/how" className="bg-white text-blue-500 py-2 px-4 rounded-full font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out">Learn More</a>
  </div>
  <div className="object-none h-80 w-96 " style={{backgroundImage: "url('/assets/IMG_2662.PNG')", backgroundSize: "cover"}}></div>
  <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
    <a href="/login" className="text-white font-bold py-2 px-4 mr-4 rounded-full bg-blue-700 hover:bg-blue-600 transition duration-200 ease-in-out">Log In</a>
    <a href="/login" className="text-white font-bold py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out">Sign Up</a>
  </div>
</div>




<div className=" py-12">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white mb-4">Reviews</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">- Dario</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">- Dario</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">-Dario</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default MainPage;
