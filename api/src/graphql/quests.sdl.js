export const schema = gql`
  type Quest {
    id: String!
    merchant: Merchant!
    transactions: [Transaction]!
    trigger: Trigger!
    heroes: [Hero]!
    heroesActive: [Hero]!
    contractAddress: String!
    abi: String!
    method: String!
    purchaseToken: Token
    purchaseBalance: String
    domain: String!
    name: String!
    chainId: String!
    purchaseTokenId: String
    merchantId: String!
    triggerId: String!
  }

  type Query {
    quests: [Quest!]!
    quest(id: String!): Quest
    questByTriggerId(triggerId: String!): Quest
  }

  input CreateQuestInput {
    contractAddress: String!
    method: String!
    purchaseBalance: String
    domain: String
    name: String!
    abi: String!
    chainId: String!
    tokenAddress: String
    triggerId: String!
  }

  input UpdateQuestInput {
    contractAddress: String!
    method: String!
    purchaseBalance: String
    domain: String
    abi: String!
    name: String!
    chainId: String!
    tokenAddress: String
    triggerId: String!
  }

  type Mutation {
    createQuest(input: CreateQuestInput!): Quest!
    updateQuest(id: String!, input: UpdateQuestInput!): Quest!
    deleteQuest(id: String!): Quest!
  }
`
