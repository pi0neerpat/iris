export const schema = gql`
  type Trigger {
    id: String!
    quest: Quest!
  }

  type Mutation {
    createTrigger: Trigger!
    updateTrigger(id: String!, input: UpdateTriggerInput!): Trigger!
  }

  input UpdateTriggerInput {
    questId: String
  }
`
