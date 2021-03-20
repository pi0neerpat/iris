import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TransactionForm from 'src/components/TransactionForm'

export const QUERY = gql`
  query FIND_TRANSACTION_BY_ID($id: String!) {
    transaction: transaction(id: $id) {
      id
      timestamp
      blockNumber
      status
      questId
      heroId
    }
  }
`
const UPDATE_TRANSACTION_MUTATION = gql`
  mutation UpdateTransactionMutation(
    $id: String!
    $input: UpdateTransactionInput!
  ) {
    updateTransaction(id: $id, input: $input) {
      id
      timestamp
      blockNumber
      status
      questId
      heroId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ transaction }) => {
  const { addMessage } = useFlash()
  const [updateTransaction, { loading, error }] = useMutation(
    UPDATE_TRANSACTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.transactions())
        addMessage('Transaction updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateTransaction({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Transaction {transaction.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TransactionForm
          transaction={transaction}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
