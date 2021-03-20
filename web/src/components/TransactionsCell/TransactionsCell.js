import { Link, routes } from '@redwoodjs/router'

import Transactions from 'src/components/Transactions'

export const QUERY = gql`
  query TRANSACTIONS {
    transactions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No transactions yet. '}
      <Link to={routes.newTransaction()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ transactions }) => {
  return <Transactions transactions={transactions} />
}
