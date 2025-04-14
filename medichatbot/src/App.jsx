import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [question, setquestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("Loading...")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDNcaPZdw6t_7BEBFZTCw-ctU4qebwBTHQ" ,
      method: "post",
      data: {"contents":[{"parts":[{"text": question}]}]},
    });

      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
     <h1>ChatBot</h1>
     <textarea value={question} onChange={(e)=>setquestion(e.target.value)} cols="30" rows="10"></textarea>
     <button onClick={generateAnswer}> Geneate Answer</button>
     <pre>{answer}</pre>
    </>
  )
}

export default App
