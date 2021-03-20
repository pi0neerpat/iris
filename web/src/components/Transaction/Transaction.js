import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/TransactionsCell'

const DELETE_TRANSACTION_MUTATION = gql`
  mutation DeleteTransactionMutation($id: String!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Transaction = ({ transaction }) => {
  const { addMessage } = useFlash()
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.transactions())
      addMessage('Transaction deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete transaction ' + id + '?')) {
      deleteTransaction({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Transaction {transaction.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{transaction.id}</td>
            </tr>
            <tr>
              <th>Timestamp</th>
              <td>{timeTag(transaction.timestamp)}</td>
            </tr>
            <tr>
              <th>Block number</th>
              <td>{transaction.blockNumber}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{transaction.status}</td>
            </tr>
            <tr>
              <th>Quest id</th>
              <td>{transaction.questId}</td>
            </tr>
            <tr>
              <th>Hero id</th>
              <td>{transaction.heroId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTransaction({ id: transaction.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(transaction.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Transaction
