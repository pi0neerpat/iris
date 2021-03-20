import Quest from 'src/components/Quest'

export const QUERY = gql`
  query FIND_QUEST_BY_ID($id: String!) {
    quest: quest(id: $id) {
      id
      contractAddress
      methodName
      purchaseBalance
      domain
      name
      tokenId
      merchantId
      triggerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Quest not found</div>

export const Success = ({ quest }) => {
  return <Quest quest={quest} />
}
