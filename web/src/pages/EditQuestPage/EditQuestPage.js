import QuestsLayout from 'src/layouts/QuestsLayout'
import EditQuestCell from 'src/components/EditQuestCell'

const EditQuestPage = ({ triggerId }) => {
  return (
    <QuestsLayout>
      <EditQuestCell triggerId={triggerId} />
    </QuestsLayout>
  )
}

export default EditQuestPage
