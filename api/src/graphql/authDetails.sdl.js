export const schema = gql`
  type AuthDetail {
    id: String!
    nonce: String!
    timestamp: DateTime!
    Hero: [Hero]!
  }

  type Query {
    authDetails: [AuthDetail!]!
  }

  input CreateAuthDetailInput {
    nonce: String!
    timestamp: DateTime!
  }

  input UpdateAuthDetailInput {
    nonce: String
    timestamp: DateTime
  }
`
