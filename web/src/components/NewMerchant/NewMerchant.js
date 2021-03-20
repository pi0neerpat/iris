import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MerchantForm from 'src/components/MerchantForm'

import { QUERY } from 'src/components/MerchantsCell'

const CREATE_MERCHANT_MUTATION = gql`
  mutation CreateMerchantMutation($input: CreateMerchantInput!) {
    createMerchant(input: $input) {
      id
    }
  }
`

const NewMerchant = () => {
  const { addMessage } = useFlash()
  const [createMerchant, { loading, error }] = useMutation(
    CREATE_MERCHANT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.merchants())
        addMessage('Merchant created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createMerchant({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Merchant</h2>
      </header>
      <div className="rw-segment-main">
        <MerchantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMerchant
