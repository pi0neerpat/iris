import TokensLayout from 'src/layouts/TokensLayout'
import EditTokenCell from 'src/components/EditTokenCell'

const EditTokenPage = ({ id }) => {
  return (
    <TokensLayout>
      <EditTokenCell id={id} />
    </TokensLayout>
  )
}

export default EditTokenPage
