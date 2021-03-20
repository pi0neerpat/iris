import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/TransactionsCell'

const DELETE_TRANSACTION_MUTATION = gql`
  mutation DeleteTransactionMutation($id: String!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const TransactionsList = ({ transactions }) => {
  const { addMessage } = useFlash()
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION_MUTATION, {
    onCompleted: () => {
      addMessage('Transaction deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete transaction ' + id + '?')) {
      deleteTransaction({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Timestamp</th>
            <th>Block number</th>
            <th>Status</th>
            <th>Quest id</th>
            <th>Hero id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{truncate(transaction.id)}</td>
              <td>{timeTag(transaction.timestamp)}</td>
              <td>{truncate(transaction.blockNumber)}</td>
              <td>{truncate(transaction.status)}</td>
              <td>{truncate(transaction.questId)}</td>
              <td>{truncate(transaction.heroId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.transaction({ id: transaction.id })}
                    title={'Show transaction ' + transaction.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTransaction({ id: transaction.id })}
                    title={'Edit transaction ' + transaction.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete transaction ' + transaction.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(transaction.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsList
