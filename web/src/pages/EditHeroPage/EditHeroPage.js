import HeroesLayout from 'src/layouts/HeroesLayout'
import EditHeroCell from 'src/components/EditHeroCell'

const EditHeroPage = ({ id }) => {
  return (
    <HeroesLayout>
      <EditHeroCell id={id} />
    </HeroesLayout>
  )
}

export default EditHeroPage
