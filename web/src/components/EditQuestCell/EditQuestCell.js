import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import QuestForm from 'src/components/QuestForm'

export const QUERY = gql`
  query FIND_QUEST_BY_TRIGGER_ID($triggerId: String!) {
    quest: questByTriggerId(triggerId: $triggerId) {
      id
      contractAddress
      methodName
      purchaseBalance
      domain
      name
      trigger {
        id
      }
      merchant {
        id
        owner {
          address
        }
      }
    }
  }
`
const UPDATE_QUEST_MUTATION = gql`
  mutation UpdateQuestMutation($id: String!, $input: UpdateQuestInput!) {
    updateQuest(id: $id, input: $input) {
      id
      contractAddress
      methodName
      purchaseBalance
      domain
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ quest }) => {
  const { addMessage } = useFlash()
  const [updateQuest, { loading, error }] = useMutation(UPDATE_QUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.quest({ triggerId: quest.trigger.id }))
      addMessage('Quest updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateQuest({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Quest {quest.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <QuestForm
          quest={{ ...quest, triggerId: quest.trigger.id }}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
