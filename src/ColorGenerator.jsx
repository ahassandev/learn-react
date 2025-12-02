import React from 'react'
import { useState } from 'react'

const ColorGenerator = () => {
    const [color, setcolor] = useState("#ffffff");

    const generateColor = () => {
const randomColor  =  '#' + Math.floor(Math.random()*16777215).toString(16);
    setcolor(randomColor);
    };
  return (
    <div className='h-screen flex flex-col items-center justify-center'  style={{ backgroundColor: color }}>
        <h1 className="text-3xl font-bold mb-4 text-white">Random Color Generator</h1>
        <p className="text-white mb-4 text-xl">{color}</p>
        <button onClick={generateColor} className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition cursor-pointer">Generate Color</button>
      
    </div>
  )
}

export default ColorGenerator
