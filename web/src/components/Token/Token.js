import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/TokensCell'

const DELETE_TOKEN_MUTATION = gql`
  mutation DeleteTokenMutation($id: String!) {
    deleteToken(id: $id) {
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

const Token = ({ token }) => {
  const { addMessage } = useFlash()
  const [deleteToken] = useMutation(DELETE_TOKEN_MUTATION, {
    onCompleted: () => {
      navigate(routes.tokens())
      addMessage('Token deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete token ' + id + '?')) {
      deleteToken({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Token {token.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{token.id}</td>
            </tr>
            <tr>
              <th>Chain id</th>
              <td>{token.chainId}</td>
            </tr>
            <tr>
              <th>Contract address</th>
              <td>{token.contractAddress}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{token.website}</td>
            </tr>
            <tr>
              <th>Icon url</th>
              <td>{token.iconUrl}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editToken({ id: token.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(token.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Token
