export const schema = gql`
  type Hero {
    id: String!
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
    hero(id: String!): Hero
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
    updateHero(id: String!, input: UpdateHeroInput!): Hero!
    deleteHero(id: String!): Hero!
  }
`
