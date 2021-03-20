import Trigger from 'src/components/Trigger'

export const QUERY = gql`
  query TriggerQuery {
    trigger {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ trigger }) => {
  return <Trigger trigger={trigger} />
}
