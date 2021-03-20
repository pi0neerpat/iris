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
      merchant {
        id
        owner {
          address
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ variables: { triggerId } }) => {
  navigate(routes.newQuest({ triggerId }))
  return <></>
}

export const Success = ({ quest }) => {
  return <Quest quest={quest} />
}
