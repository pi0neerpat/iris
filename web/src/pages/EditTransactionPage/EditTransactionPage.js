import TransactionsLayout from 'src/layouts/TransactionsLayout'
import EditTransactionCell from 'src/components/EditTransactionCell'

const EditTransactionPage = ({ id }) => {
  return (
    <TransactionsLayout>
      <EditTransactionCell id={id} />
    </TransactionsLayout>
  )
}

export default EditTransactionPage
