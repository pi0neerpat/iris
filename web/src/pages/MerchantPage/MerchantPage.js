import MerchantsLayout from 'src/layouts/MerchantsLayout'
import MerchantCell from 'src/components/MerchantCell'

const MerchantPage = ({ id }) => {
  return (
    <MerchantsLayout>
      <MerchantCell id={id} />
    </MerchantsLayout>
  )
}

export default MerchantPage
