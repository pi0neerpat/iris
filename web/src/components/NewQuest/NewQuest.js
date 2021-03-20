import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
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
  const { addMessage } = useFlash()
  const [createQuest, { loading, error }] = useMutation(CREATE_QUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.quests())
      addMessage('Quest created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createQuest({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Quest</h2>
      </header>
      <div className="rw-segment-main">
        <QuestForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewQuest
