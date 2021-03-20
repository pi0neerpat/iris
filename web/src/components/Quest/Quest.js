import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/QuestsCell'

const DELETE_QUEST_MUTATION = gql`
  mutation DeleteQuestMutation($id: String!) {
    deleteQuest(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Quest = ({ quest }) => {
  const { addMessage } = useFlash()
  const [deleteQuest] = useMutation(DELETE_QUEST_MUTATION, {
    onCompleted: () => {
      navigate(routes.quests())
      addMessage('Quest deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete quest ' + id + '?')) {
      deleteQuest({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Quest {quest.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{quest.id}</td>
            </tr>
            <tr>
              <th>Contract address</th>
              <td>{quest.contractAddress}</td>
            </tr>
            <tr>
              <th>Method name</th>
              <td>{quest.methodName}</td>
            </tr>
            <tr>
              <th>Purchase balance</th>
              <td>{quest.purchaseBalance}</td>
            </tr>
            <tr>
              <th>Domain</th>
              <td>{quest.domain}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{quest.name}</td>
            </tr>
            <tr>
              <th>Token id</th>
              <td>{quest.tokenId}</td>
            </tr>
            <tr>
              <th>Merchant id</th>
              <td>{quest.merchantId}</td>
            </tr>
            <tr>
              <th>Trigger id</th>
              <td>{quest.triggerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editQuest({ id: quest.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(quest.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Quest
