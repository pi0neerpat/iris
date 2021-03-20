import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MerchantsCell'

const DELETE_MERCHANT_MUTATION = gql`
  mutation DeleteMerchantMutation($id: String!) {
    deleteMerchant(id: $id) {
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

const MerchantsList = ({ merchants }) => {
  const { addMessage } = useFlash()
  const [deleteMerchant] = useMutation(DELETE_MERCHANT_MUTATION, {
    onCompleted: () => {
      addMessage('Merchant deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete merchant ' + id + '?')) {
      deleteMerchant({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Auth detail id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.id}>
              <td>{truncate(merchant.id)}</td>
              <td>{truncate(merchant.address)}</td>
              <td>{truncate(merchant.authDetailId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.merchant({ id: merchant.id })}
                    title={'Show merchant ' + merchant.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMerchant({ id: merchant.id })}
                    title={'Edit merchant ' + merchant.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete merchant ' + merchant.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(merchant.id)}
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

export default MerchantsList
