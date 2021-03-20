import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TokenForm from 'src/components/TokenForm'

import { QUERY } from 'src/components/TokensCell'

const CREATE_TOKEN_MUTATION = gql`
  mutation CreateTokenMutation($input: CreateTokenInput!) {
    createToken(input: $input) {
      id
    }
  }
`

const NewToken = () => {
  const { addMessage } = useFlash()
  const [createToken, { loading, error }] = useMutation(CREATE_TOKEN_MUTATION, {
    onCompleted: () => {
      navigate(routes.tokens())
      addMessage('Token created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createToken({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Token</h2>
      </header>
      <div className="rw-segment-main">
        <TokenForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewToken
