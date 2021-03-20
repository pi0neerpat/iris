import QuestsLayout from 'src/layouts/QuestsLayout'
import EditQuestCell from 'src/components/EditQuestCell'

const EditQuestPage = ({ id }) => {
  return (
    <QuestsLayout>
      <EditQuestCell id={id} />
    </QuestsLayout>
  )
}

export default EditQuestPage
