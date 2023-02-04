import { useEffect, useState } from "react"

async function getUser(userName,passWord){
    await fetch('http://localhost:3000/api/getUser',{
        method: "PUT",
        body: JSON.stringify({
            userName: userName,
            passWord: passWord,
        }),
      })};

      export default function Login(){
        const [userName,setUserName] = useState('');
        const [passWord,setPassword]= useState('');

        return(<>
        <input onChange={(e)=>setUserName(e.target.value)}></input>
        <input onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={()=>getUser(userName,passWord)}></button>
        </>)
      }