export const schema = gql`
  type Trigger {
    id: String!
    quest: Quest
  }

  type Query {
    trigger: Trigger!
  }

  type Mutation {
    updateTrigger(id: String!, input: UpdateTriggerInput!): Trigger!
  }

  input UpdateTriggerInput {
    questId: String
  }
`
