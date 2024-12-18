import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState("black")
  const[heading, setHeading] = useState("My Background Color Changer")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>

          <h1 className='text-2xl pt-5 pb-5 text-center text-white shadow-lg '>{heading}</h1>
          
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
             <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
             rounded-3xl">
              <button onClick = {() => {setColor("red"); setHeading("I'm Red Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>

              <button onClick = {() => {setColor("green"); setHeading("I'm Green Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>

              <button onClick = {() => {setColor("blue"); setHeading("I'm Blue Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

              <button onClick = {() => {setColor("yellow"); setHeading("I'm Yellow Now")}} className='outline-none px-4 py-1 rounded-full
               text-black shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>

              <button onClick = {() => {setColor("magenta"); setHeading("I'm Magenta Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "magenta"}}>Magenta</button>

              <button onClick = {() => {setColor("purple"); setHeading("I'm Purple Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>

              <button onClick = {() => {setColor("black"); setHeading("I'm Black Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>

              <button onClick = {() => {setColor("grey"); setHeading("I'm Grey Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "grey"}}>Grey</button>
               
              <button onClick = {() => {setColor("orange"); setHeading("I'm Orange Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>

              <button onClick = {() => {setColor("olive"); setHeading("I'm Olive Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "olive"}}>Olive</button>

              <button onClick = {() => {setColor("violet"); setHeading("I'm violet Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "violet"}}>violet</button>

              <button onClick = {() => {setColor("pink"); setHeading("I'm pink Now")}} className='outline-none px-4 py-1 rounded-full
               text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>

             </div>
          </div>
      </div>
    </>
  )
}

export default App
