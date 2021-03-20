import MerchantsLayout from 'src/layouts/MerchantsLayout'
import EditMerchantCell from 'src/components/EditMerchantCell'

const EditMerchantPage = ({ id }) => {
  return (
    <MerchantsLayout>
      <EditMerchantCell id={id} />
    </MerchantsLayout>
  )
}

export default EditMerchantPage
