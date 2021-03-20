import HeroesLayout from 'src/layouts/HeroesLayout'
import HeroCell from 'src/components/HeroCell'

const HeroPage = ({ id }) => {
  return (
    <HeroesLayout>
      <HeroCell id={id} />
    </HeroesLayout>
  )
}

export default HeroPage
