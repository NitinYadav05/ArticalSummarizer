import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [text, setText] = useState("")
  const [summary, setSummary]=useState("")

  const handle =(e)=>{
    setText(e.target.value)
  }
  
  const summarizer = async () =>{
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': '351b9c6334mshfdf1f7c412532dap1b04d0jsn6c2ebd71bbd5',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
    setSummary(response.data.summary)

  }

  return (
   

      <div className="text-blue-600 text-xl">
        <div className='h-screen w-screen  flex items-center justify-center flex-col gap-y-10'style={{ backgroundColor: '#D8D9CF', height: '100vh' }}>
          <h1 className='text-2xl font-bold text-slate-500 underline'>Article summarizer </h1>
         
          <div className='felx item-center justify-center gap-x-2'>
            <input type="text" placeholder='Drop your link here ' className='outline-none border-none rounded-lg px-5 text-center' onChange={handle} />
            <button className='bg-black text-white px-2 rounded'onClick={summarizer}>Go</button>
        </div>
        <div className='w-150 h-80 bg-olive-200 rounded-lg text-black overflow-x-hidden px-5 '>
          {summary}
        </div>
       </div>
         </div>
      
  )
}

export default App
