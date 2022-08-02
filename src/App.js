import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [data,setData] = useState()
  async function getData(){
    await axios.get("https://api.adviceslip.com/advice")
    .then(
      response=> setData(data => data=response.data.slip.advice)
    )
    .catch((error)=>alert(error))
  }
  getData()
  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center" >


    <div className="font-custom text-xl rounded-xl bg-gray-700 p-3 sm-p-1 w-3/6 lg:w-2/6 h-80 flex-col text-center" >
        <h1 className=' text-white bg-[#050708]  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50'>RANDOM QUOTES</h1>
        <div className='flex h-64 text-center justify-center items-center'>
          <div className='text-gray-300'>
            {data}
            </div>
          </div>
    <button onClick={getData}  className='text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30'>generate a quote</button>
    </div>
    </div>
  )
}

export default App;
