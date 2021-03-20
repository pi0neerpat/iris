import QuestsLayout from 'src/layouts/QuestsLayout'
import QuestCell from 'src/components/QuestCell'

const QuestPage = ({ id }) => {
  return (
    <QuestsLayout>
      <QuestCell id={id} />
    </QuestsLayout>
  )
}

export default QuestPage
