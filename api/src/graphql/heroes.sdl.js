export const schema = gql`
  type Hero {
    address: String!
    authDetail: AuthDetail!
    transactions: [Transaction]!
    quests: [Quest]!
    Quest: Quest
    questId: String
    authDetailId: String!
  }

  type Query {
    heroes: [Hero!]!
    hero(address: String!): Hero
  }

  input CreateHeroInput {
    address: String!
    questId: String
    authDetailId: String!
  }

  input UpdateHeroInput {
    address: String
    questId: String
    authDetailId: String
  }

  type Mutation {
    createHero(input: CreateHeroInput!): Hero!
    updateHero(address: String!, input: UpdateHeroInput!): Hero!
    deleteHero(address: String!): Hero!
  }
`
