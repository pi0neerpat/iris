import Hero from 'src/components/Hero'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Hero not found</div>

export const Success = ({ hero }) => {
  return <Hero hero={hero} />
}
