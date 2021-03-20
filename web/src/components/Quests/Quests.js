import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/QuestsCell'

const DELETE_QUEST_MUTATION = gql`
  mutation DeleteQuestMutation($id: String!) {
    deleteQuest(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const QuestsList = ({ quests }) => {
  const { addMessage } = useFlash()
  const [deleteQuest] = useMutation(DELETE_QUEST_MUTATION, {
    onCompleted: () => {
      addMessage('Quest deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete quest ' + id + '?')) {
      deleteQuest({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Contract address</th>
            <th>Method name</th>
            <th>Purchase balance</th>
            <th>Domain</th>
            <th>Name</th>
            <th>Token id</th>
            <th>Merchant id</th>
            <th>Trigger id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {quests.map((quest) => (
            <tr key={quest.id}>
              <td>{truncate(quest.id)}</td>
              <td>{truncate(quest.contractAddress)}</td>
              <td>{truncate(quest.methodName)}</td>
              <td>{truncate(quest.purchaseBalance)}</td>
              <td>{truncate(quest.domain)}</td>
              <td>{truncate(quest.name)}</td>
              <td>{truncate(quest.tokenId)}</td>
              <td>{truncate(quest.merchantId)}</td>
              <td>{truncate(quest.triggerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.quest({ id: quest.id })}
                    title={'Show quest ' + quest.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editQuest({ id: quest.id })}
                    title={'Edit quest ' + quest.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete quest ' + quest.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(quest.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuestsList
