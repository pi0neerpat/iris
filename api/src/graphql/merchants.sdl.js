export const schema = gql`
  type Merchant {
    id: String!
    quests: [Quest]!
    address: String!
    authDetail: AuthDetail!
    authDetailId: String!
  }

  type Query {
    merchants: [Merchant!]!
    merchant(id: String!): Merchant
  }

  input CreateMerchantInput {
    address: String!
    authDetailId: String!
  }

  input UpdateMerchantInput {
    address: String
    authDetailId: String
  }

  type Mutation {
    createMerchant(input: CreateMerchantInput!): Merchant!
    updateMerchant(id: String!, input: UpdateMerchantInput!): Merchant!
    deleteMerchant(id: String!): Merchant!
  }
`
