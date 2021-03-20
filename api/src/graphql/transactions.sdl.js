export const schema = gql`
  type Transaction {
    id: String!
    timestamp: DateTime!
    blockNumber: String!
    status: String!
    quest: Quest!
    hero: Hero!
    questId: String!
    heroId: String!
  }

  type Query {
    transactions: [Transaction!]!
    transaction(id: String!): Transaction
  }

  input CreateTransactionInput {
    timestamp: DateTime!
    blockNumber: String!
    status: String!
    questId: String!
    heroId: String!
  }

  input UpdateTransactionInput {
    timestamp: DateTime
    blockNumber: String
    status: String
    questId: String
    heroId: String
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction!
    updateTransaction(id: String!, input: UpdateTransactionInput!): Transaction!
    deleteTransaction(id: String!): Transaction!
  }
`
