import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import HeroForm from 'src/components/HeroForm'

import { QUERY } from 'src/components/HeroesCell'

const CREATE_HERO_MUTATION = gql`
  mutation CreateHeroMutation($input: CreateHeroInput!) {
    createHero(input: $input) {
      id
    }
  }
`

const NewHero = () => {
  const { addMessage } = useFlash()
  const [createHero, { loading, error }] = useMutation(CREATE_HERO_MUTATION, {
    onCompleted: () => {
      navigate(routes.heroes())
      addMessage('Hero created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createHero({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Hero</h2>
      </header>
      <div className="rw-segment-main">
        <HeroForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewHero
