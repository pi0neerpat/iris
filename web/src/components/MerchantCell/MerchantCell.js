import Merchant from 'src/components/Merchant'

export const QUERY = gql`
  query FIND_MERCHANT_BY_ID($id: String!) {
    merchant: merchant(id: $id) {
      id
      address
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Merchant not found</div>

export const Success = ({ merchant }) => {
  return <Merchant merchant={merchant} />
}
