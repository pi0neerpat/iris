import QuestsLayout from 'src/layouts/QuestsLayout'
import QuestCell from 'src/components/QuestCell'

const QuestPage = ({ triggerId }) => {
  return (
    <QuestsLayout>
      <QuestCell triggerId={triggerId} />
    </QuestsLayout>
  )
}

export default QuestPage
