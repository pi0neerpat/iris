import TransactionsLayout from 'src/layouts/TransactionsLayout'
import TransactionCell from 'src/components/TransactionCell'

const TransactionPage = ({ id }) => {
  return (
    <TransactionsLayout>
      <TransactionCell id={id} />
    </TransactionsLayout>
  )
}

export default TransactionPage
