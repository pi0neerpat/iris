import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import HeroForm from 'src/components/HeroForm'

export const QUERY = gql`
  query FIND_HERO_BY_ID($id: String!) {
    hero: hero(id: $id) {
      id
      address
      questId
      authDetailId
    }
  }
`
const UPDATE_HERO_MUTATION = gql`
  mutation UpdateHeroMutation($id: String!, $input: UpdateHeroInput!) {
    updateHero(id: $id, input: $input) {
      id
      address
      questId
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ hero }) => {
  const { addMessage } = useFlash()
  const [updateHero, { loading, error }] = useMutation(UPDATE_HERO_MUTATION, {
    onCompleted: () => {
      navigate(routes.heroes())
      addMessage('Hero updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateHero({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Hero {hero.id}</h2>
      </header>
      <div className="rw-segment-main">
        <HeroForm hero={hero} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
