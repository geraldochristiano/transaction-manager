'use client'
import { createClient } from "@supabase/supabase-js"
import TransactionLogRow from "./TransactionLogRow";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function TransactionRetriever(){
  type transaction = {id: number, created_at: string, title: string, description: string, amount: number}
  const {data, error} = await supabase.from('transaction').select("");

  return (
    <div className= "w-full flex flex-col items-center font-mono">
      <h1 className="font-bold text-xl mb-2">Transaction List</h1>
      <div className="overflow-auto">
        <table className="border-separate border-spacing-2 table-fixed w-full text-center">
          <thead>
            <tr>
              <th>Time and Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
            
          <tbody>
            {!error && data.map(val => (
              <TransactionLogRow key={val.id} created_at={val.created_at} title={val.title} amount={val.amount}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}