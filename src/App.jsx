import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5)

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  // useRef hook

   const passwordRef = useRef(null)


  const passwordGenerator = useCallback (() =>{
    let pass = ""
    let str = "ABCDEFGHabcdefg"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!#@$%&"

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length +1)

       pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
   <div className='w-full max-width-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white ' placeholder='password' readOnly ref={passwordRef}/>
      <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>  
        <input 
        type="range"
        min={6}   
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={
          () => {
            setNumberAllowed((prev) => !prev);
          }
        }
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'> 
        <input type="checkbox" 
        defaultChecked = {charAllowed}
        id = "characterInput"
        onChange={() =>{
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
