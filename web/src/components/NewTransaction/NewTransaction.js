import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TransactionForm from 'src/components/TransactionForm'

import { QUERY } from 'src/components/TransactionsCell'

const CREATE_TRANSACTION_MUTATION = gql`
  mutation CreateTransactionMutation($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      id
    }
  }
`

const NewTransaction = () => {
  const { addMessage } = useFlash()
  const [createTransaction, { loading, error }] = useMutation(
    CREATE_TRANSACTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.transactions())
        addMessage('Transaction created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createTransaction({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Transaction</h2>
      </header>
      <div className="rw-segment-main">
        <TransactionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTransaction
