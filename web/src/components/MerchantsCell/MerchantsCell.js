import { Link, routes } from '@redwoodjs/router'

import Merchants from 'src/components/Merchants'

export const QUERY = gql`
  query MERCHANTS {
    merchants {
      id
      address
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No merchants yet. '}
      <Link to={routes.newMerchant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ merchants }) => {
  return <Merchants merchants={merchants} />
}
