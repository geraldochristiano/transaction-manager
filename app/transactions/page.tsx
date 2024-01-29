import TransactionRetriever from "@/components/TransactionRetriever";
import Link from "next/link";
import { Fragment } from "react";

export default function Page(){
  return (
    <Fragment>
      <Link href="/">
        <div className="fixed bottom-5 left-5 bg-cyan-300 py-3 px-3 rounded-lg"><img src="less-than.svg" alt="Back" width={20}/> </div>
      </Link>   
      <TransactionRetriever />
    </Fragment>
    
  )
}