import ViewEdit from "@/components/ViewEdit";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function Page({params}: {params: {id: string}}){
  
  const {data, error} = await supabase.from('transaction').select().eq('id', params.id);
  if (error) return (<div></div>);
  const entry = data[0];

  return (
    <ViewEdit id={entry.id} title={entry.title} description={entry.description} amount={entry.amount}/>
  )
}