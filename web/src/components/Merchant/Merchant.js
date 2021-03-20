import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/MerchantsCell'

const DELETE_MERCHANT_MUTATION = gql`
  mutation DeleteMerchantMutation($id: String!) {
    deleteMerchant(id: $id) {
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

const Merchant = ({ merchant }) => {
  const { addMessage } = useFlash()
  const [deleteMerchant] = useMutation(DELETE_MERCHANT_MUTATION, {
    onCompleted: () => {
      navigate(routes.merchants())
      addMessage('Merchant deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete merchant ' + id + '?')) {
      deleteMerchant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Merchant {merchant.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{merchant.id}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{merchant.address}</td>
            </tr>
            <tr>
              <th>Auth detail id</th>
              <td>{merchant.authDetailId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMerchant({ id: merchant.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(merchant.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Merchant
