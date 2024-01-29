'use client'
import Link from "next/link";

export default function TransactionLogRow({
  id, created_at, title, description, amount, deleteHandler}: 
  {id: number, created_at: string, title:string, description: string, amount: number, deleteHandler: Function}){
    const date = /^[^T]*/.exec(created_at);   
    const time = /(?<=(^[^T]*[T]))[^.]*/.exec(created_at);
  
    return (
      <tr>
        <td><div>{date![0] + " " + time![0]}</div></td>
        <td><div>{title}</div></td>
        <td><div>{Math.abs(amount)}</div></td>
        <td><div>{amount < 0 ? "Withdrawal" : "Deposit"}</div></td>
        <td> 
          <div className="flex flex-row justify-center text-sm">
            <div className="mr-3"><Link href={"/transactions/" + id}>View/Edit</Link></div>

            <button className="ml-3" type="button" onClick={() => deleteHandler(id)}>Delete</button>
          </div>
        </td>
      </tr>
    )
  }