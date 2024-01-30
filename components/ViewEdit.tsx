'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ViewEdit(
  {id, title, description, amount, updateHandler} : 
  {id:number, title:string, description:string, amount:number, updateHandler: Function})
{ 
  const router = useRouter();

  const update = async () => {
    const updatedTitle = (document.getElementById('title') as HTMLInputElement).value;
    const updatedDescription = (document.getElementById('description') as HTMLTextAreaElement).value;
    const updatedAmountText = (document.getElementById('amount') as HTMLInputElement).value;
    const type = (document.getElementById('transaction-type') as HTMLInputElement).textContent;

    if (updatedAmountText === ""){
      document.getElementById("info_text")!.className = "text-red-500";
      document.getElementById("info_text")!.textContent = "Fill amount";
      return;
    }
    
    const updatedAmount = Number(updatedAmountText);
    if (!isNaN(updatedAmount)){
      if (updatedAmount < 0){
        document.getElementById("info_text")!.className = "text-red-500";
        document.getElementById("info_text")!.textContent = "Negative amount invalid";
      } else {
        if (type == "Withdrawal"){
          await updateHandler({id: id,title: updatedTitle, description: updatedDescription, amount: -updatedAmount});
        } else if (type == "Deposit"){
          await updateHandler({id: id,title: updatedTitle, description: updatedDescription, amount: updatedAmount});
        }

        router.push("/transactions");
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-svh font-mono gap-y-2">
      <input type="text" id="title" className="text-2xl text-black" defaultValue={title}/>

      <input type="text" id="amount" className="text-m text-black"defaultValue={Math.abs(amount)}/>
      <p id="transaction-type">{amount < 0 ? "Withdrawal" : "Deposit"}</p>
      
      <textarea id="description" className="text-lg mt-3 text-black" rows={10} cols={30} defaultValue={description}></textarea>

      <button type="button" className="mt-3" onClick={update}>Save changes</button>
      <p id="info_text" className="text-red-500">&nbsp;</p>

    </div>
  )
}