import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes, useParams } from '@redwoodjs/router'
import QuestForm from 'src/components/QuestForm'

import { QUERY } from 'src/components/QuestsCell'

const CREATE_QUEST_MUTATION = gql`
  mutation CreateQuestMutation($input: CreateQuestInput!) {
    createQuest(input: $input) {
      id
    }
  }
`

const NewQuest = () => {
  const { triggerId } = useParams()
  const { addMessage } = useFlash()

  const [createQuest, { loading, error }] = useMutation(CREATE_QUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.quest({ triggerId }))
      addMessage('Quest created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createQuest({ variables: { input: { ...input, triggerId } } })
  }

  const quest = {
    triggerId,
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Quest</h2>
      </header>
      <div className="rw-segment-main">
        <QuestForm
          quest={quest}
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewQuest
