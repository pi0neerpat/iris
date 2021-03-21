import QuestsLayout from 'src/layouts/QuestsLayout'
import QuestCell from 'src/components/QuestCell'

const QuestPage = ({ triggerId }) => {
  return (
    <>
      <QuestCell triggerId={triggerId} />
    </>
  )
}

export default QuestPage
