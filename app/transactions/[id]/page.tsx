import ViewEdit from "@/components/ViewEdit";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function Page({params}: {params: {id: string}}){
  
  // Server Action for updating entry, pass to ViewEdit children component
  async function updateLog({id, title, description, amount}: {id:number, title:string, description:string, amount: number}){
    'use server'
    await supabase.from('transaction').update({title: title, description: description, amount: amount}).eq('id', id);
  }
  // Fetch entry
  const {data, error} = await supabase.from('transaction').select().eq('id', params.id);
  if (error) return (<div></div>);
  const entry = data[0];

  return (
    <>
      <Link href="/transactions">
        <div className="fixed bottom-5 left-5 bg-cyan-300 py-3 px-3 rounded-lg"><img src="/less-than.svg" alt="Back" width={20}/> </div>
      </Link>   
      <ViewEdit id={entry.id} title={entry.title} description={entry.description} amount={entry.amount} updateHandler={updateLog}/>
    </>
    
  )
}