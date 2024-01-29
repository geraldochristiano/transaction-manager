'use client'
import { createClient } from "@supabase/supabase-js"
import TransactionLogRow from "./TransactionLogRow";
import { useEffect, useState } from "react";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const fetchCache = 'no-store';

export default function TransactionRetriever(){
  const [transactionLog, setTransactionLog] = useState<any[]>([]);
  const [balance, setBalance] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [refreshToggle, setRefreshToggle] = useState(false);

  async function deleteLog(id: number){
    const {status} = await supabase.from('transaction').delete().eq('id', id);
    if (status == 204 || status === 200){
      setRefreshToggle(!refreshToggle);
    }
  }

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      const {data, error} = await supabase.from('transaction').select();
      if (!error){
        var balanceSum = 0.;
        data!.forEach(val => {
          balanceSum += val.amount;
        });
        setBalance(balanceSum);
        setTransactionLog(data);  
        setIsFetching(false);
      }
    })();
  },[refreshToggle]);

  return (
    <div className= "w-full flex flex-col items-center font-mono">
      
      <h1 className="font-bold text-xl mb-2">Transaction Log</h1>
 
      <h2 className="mb-2"> Balance: &euro;{balance}</h2>
      
      <div className="overflow-auto">
      {isFetching ? <h1>Loading....</h1> :
        <table className="border-separate border-spacing-2 table-fixed w-11/12 text-center">
          <thead>
            <tr>
              <th>Date and Time</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th className="w-1/12"></th>
            </tr>
          </thead>
          
          <tbody>
            {transactionLog.map((entry) => (
              <TransactionLogRow key={entry.id} id={entry.id} created_at={entry.created_at} title={entry.title} 
              description={entry.description} amount={entry.amount} deleteHandler={deleteLog}/>
            ))}
          </tbody>
        </table>
      }
      </div> 
    </div>
  )
}
