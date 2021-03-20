import { Link, routes } from '@redwoodjs/router'

import Tokens from 'src/components/Tokens'

export const QUERY = gql`
  query TOKENS {
    tokens {
      id
      chainId
      contractAddress
      website
      iconUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tokens yet. '}
      <Link to={routes.newToken()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tokens }) => {
  return <Tokens tokens={tokens} />
}
