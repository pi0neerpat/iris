import TokensLayout from 'src/layouts/TokensLayout'
import TokenCell from 'src/components/TokenCell'

const TokenPage = ({ id }) => {
  return (
    <TokensLayout>
      <TokenCell id={id} />
    </TokensLayout>
  )
}

export default TokenPage
