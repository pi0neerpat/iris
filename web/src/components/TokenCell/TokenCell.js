import Token from 'src/components/Token'

export const QUERY = gql`
  query FIND_TOKEN_BY_ID($id: String!) {
    token: token(id: $id) {
      id
      chainId
      contractAddress
      website
      iconUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Token not found</div>

export const Success = ({ token }) => {
  return <Token token={token} />
}
