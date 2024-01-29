'use client'
import { useEffect } from "react";

export default function ({id, title, description, amount} : {id:number, title:string, description:string, amount:number}){

  return (
    <div className="flex flex-col justify-center items-center h-svh font-mono gap-y-2">
      <input type="text" id="title" className="text-2xl text-black" defaultValue={title}/>

      <input type="text" id="amount" className="text-m text-black"defaultValue={Math.abs(amount)}/>
      <p>{amount < 0 ? "Withdrawal" : "Deposit"}</p>
      
      <textarea id="description" className="text-lg mt-3 text-black" rows={10} cols={30} defaultValue={description}></textarea>
    </div>
  )
}