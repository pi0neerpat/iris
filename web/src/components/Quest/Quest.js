import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

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
  const { currentUser } = useAuth()
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

  const merchantControls = (
    <>
      {currentUser?.address === quest.merchant.owner.address && (
        <>
          <nav className="rw-button-group">
            <Link
              to={routes.editQuest({ triggerId: quest.trigger.id })}
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
            <h3>(Only visible for Merchant)</h3>
          </nav>
        </>
      )}
    </>
  )

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">{quest.name}</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Contract address</th>
              <td>{quest.contractAddress}</td>
            </tr>
            <tr>
              <th>Chain Id</th>
              <td>{quest.chainId}</td>
            </tr>
            <tr>
              <th>Method</th>
              <td>{quest.method}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {merchantControls}
    </>
  )
}

export default Quest
