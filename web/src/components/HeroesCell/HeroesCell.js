import { Link, routes } from '@redwoodjs/router'

import Heroes from 'src/components/Heroes'

export const QUERY = gql`
  query HEROES {
    heroes {
      id
      address
      questId
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No heroes yet. '}
      <Link to={routes.newHero()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ heroes }) => {
  return <Heroes heroes={heroes} />
}
