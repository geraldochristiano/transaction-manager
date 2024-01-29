'use client'
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function DepositWithdraw() {

  const redInfoText = (str: string) => {
    document.getElementById("info_text")!.className = "text-red-500";
    document.getElementById("info_text")!.textContent = str;
  }
  const greenInfoText = (str: string) => {
    document.getElementById("info_text")!.className = "text-green-500";
    document.getElementById("info_text")!.textContent = str;
  }

  const deposit = async () => {
    const title = (document.getElementById("title_input") as HTMLInputElement).value;
    const descr = (document.getElementById("description_input") as HTMLTextAreaElement).value;
    const amountText = (document.getElementById("amount_input") as HTMLInputElement).value;
    if (amountText === ""){
      redInfoText("Fill amount");
      return;
    }
    const amount = Number(amountText);
    if (!isNaN(amount)){
      if (amount < 0){
        redInfoText("Negative amount invalid");
      } else {
        await supabase.from('transaction').insert({'title': title, 'description': descr, 'amount': amount});
        greenInfoText("Deposit successful!");
      }
    }
  };

  const withdraw = async () => {
    const title = (document.getElementById("title_input") as HTMLInputElement).value;
    const descr = (document.getElementById("description_input") as HTMLTextAreaElement).value;
    const amountText = (document.getElementById("amount_input") as HTMLInputElement).value;
    if (amountText === ""){
      redInfoText("Fill amount");
      return;
    }
    const amount = Number(amountText);
    if (!isNaN(amount)){
      if (amount < 0){
        redInfoText("Negative amount invalid");
      } else {
        await supabase.from('transaction').insert({title: title, description: descr, amount: -amount});
        greenInfoText("Withdraw successful!");
      }
    }
  }
  
  return (
    <div className="flex flex-col">

      <div className="flex flex-col gap-y-3 text-lg items-center w-96">
        <input type="text" placeholder="Title" className="text-black w-full" id="title_input"/>
        <textarea placeholder="Description" rows={10} className="text-black w-full" id="description_input"></textarea>
        <input type="text" placeholder="Amount in &euro;" className="text-black" id="amount_input"></input>
        <p id="info_text" className="text-green-500">&nbsp;</p>
      </div>
   
      <div className="flex flex-row justify-center mt-5 text-xl">
        <button className="mx-5 text-green-400" type="button" onClick={deposit}>Deposit</button>
        <button className="mx-5 text-red-400" type="button" onClick={withdraw}>Withdraw</button>
      </div>
   

    </div>
  )
}