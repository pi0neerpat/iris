import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TokenForm from 'src/components/TokenForm'

export const QUERY = gql`
  query FIND_TOKEN_BY_ID($id: String!) {
    token: token(id: $id) {
      id
      chainId
      contractAddress
      website
      iconUrl
    }
  }
`
const UPDATE_TOKEN_MUTATION = gql`
  mutation UpdateTokenMutation($id: String!, $input: UpdateTokenInput!) {
    updateToken(id: $id, input: $input) {
      id
      chainId
      contractAddress
      website
      iconUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ token }) => {
  const { addMessage } = useFlash()
  const [updateToken, { loading, error }] = useMutation(UPDATE_TOKEN_MUTATION, {
    onCompleted: () => {
      navigate(routes.tokens())
      addMessage('Token updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateToken({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Token {token.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TokenForm
          token={token}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
