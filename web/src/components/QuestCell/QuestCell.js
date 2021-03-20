import Quest from 'src/components/Quest'
import { routes, navigate, Link } from '@redwoodjs/router'

export const QUERY = gql`
  query FIND_QUEST_BY_TRIGGER_ID($triggerId: String!) {
    quest: questByTriggerId(triggerId: $triggerId) {
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

export const Empty = ({ variables: { triggerId } }) => {
  navigate(routes.newQuest({ triggerId }))
}

export const Success = ({ quest }) => {
  location.load()
  return <Quest quest={quest} />
}
