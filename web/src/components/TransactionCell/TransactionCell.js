import Transaction from 'src/components/Transaction'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Transaction not found</div>

export const Success = ({ transaction }) => {
  return <Transaction transaction={transaction} />
}
