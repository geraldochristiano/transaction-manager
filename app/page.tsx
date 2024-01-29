import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import TransactionRetriever from "@/components/TransactionRetriever";
import DepositWithdraw from "@/components/DepositWithdraw";
import Link from "next/link";

export default function Index() {

  return (
    <div className="w-full flex flex-col items-center font-mono h-svh justify-center">
      
      <DepositWithdraw />

      <div className="mt-5 text-blue-400 text-xl">
        <Link href="/transactions">See transaction list</Link>
      </div>
      

    </div>  
  );

}
