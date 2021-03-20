export const schema = gql`
  type Token {
    id: String!
    chainId: String!
    contractAddress: String!
    quests: [Quest]!
    website: String
    iconUrl: String
  }

  type Query {
    tokens: [Token!]!
  }

  input CreateTokenInput {
    chainId: String!
    contractAddress: String!
    website: String
    iconUrl: String
  }

  input UpdateTokenInput {
    chainId: String
    contractAddress: String
    website: String
    iconUrl: String
  }
`
