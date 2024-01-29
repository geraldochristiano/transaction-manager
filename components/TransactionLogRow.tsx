export default function TransactionLogRow({
  created_at, 
  title, 
  amount
}: 
  {created_at: string,
  title: string,
  amount: number}) {
  return (
    <tr>
      <td><div>{created_at}</div></td>
      <td><div>{title}</div></td>
      <td><div>{Math.abs(amount)}</div></td>
      <td><div>{amount < 0 ? "Withdrawal" : "Deposit"}</div></td>
    </tr>
  )
}