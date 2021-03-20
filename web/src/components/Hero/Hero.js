import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/HeroesCell'

const DELETE_HERO_MUTATION = gql`
  mutation DeleteHeroMutation($id: String!) {
    deleteHero(id: $id) {
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

const Hero = ({ hero }) => {
  const { addMessage } = useFlash()
  const [deleteHero] = useMutation(DELETE_HERO_MUTATION, {
    onCompleted: () => {
      navigate(routes.heroes())
      addMessage('Hero deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete hero ' + id + '?')) {
      deleteHero({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Hero {hero.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{hero.id}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{hero.address}</td>
            </tr>
            <tr>
              <th>Quest id</th>
              <td>{hero.questId}</td>
            </tr>
            <tr>
              <th>Auth detail id</th>
              <td>{hero.authDetailId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHero({ id: hero.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(hero.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Hero
