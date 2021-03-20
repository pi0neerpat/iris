import { Link, routes } from '@redwoodjs/router'

import Quests from 'src/components/Quests'

export const QUERY = gql`
  query QUESTS {
    quests {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No quests yet. '}
      <Link to={routes.newQuest()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ quests }) => {
  return <Quests quests={quests} />
}
