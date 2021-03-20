import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MerchantForm from 'src/components/MerchantForm'

export const QUERY = gql`
  query FIND_MERCHANT_BY_ID($id: String!) {
    merchant: merchant(id: $id) {
      id
      address
      authDetailId
    }
  }
`
const UPDATE_MERCHANT_MUTATION = gql`
  mutation UpdateMerchantMutation($id: String!, $input: UpdateMerchantInput!) {
    updateMerchant(id: $id, input: $input) {
      id
      address
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ merchant }) => {
  const { addMessage } = useFlash()
  const [updateMerchant, { loading, error }] = useMutation(
    UPDATE_MERCHANT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.merchants())
        addMessage('Merchant updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateMerchant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Merchant {merchant.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MerchantForm
          merchant={merchant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
