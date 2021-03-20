export const standard = defineScenario({
  transaction: {
    one: {
      id: 'String',
      timestamp: '2021-03-20T17:14:03Z',
      blockNumber: 'String',
      status: 'String',
      quest: {
        create: {
          contractAddress: 'String',
          methodName: 'String',
          purchaseBalance: 'String',
          domain: 'String',
          name: 'String',
          merchant: { create: {} },
          trigger: { create: {} },
        },
      },

      hero: {
        create: {
          address: 'String',
          authDetail: { create: { nonce: 'String' } },
        },
      },
    },

    two: {
      id: 'String',
      timestamp: '2021-03-20T17:14:04Z',
      blockNumber: 'String',
      status: 'String',
      quest: {
        create: {
          contractAddress: 'String',
          methodName: 'String',
          purchaseBalance: 'String',
          domain: 'String',
          name: 'String',
          merchant: { create: {} },
          trigger: { create: {} },
        },
      },

      hero: {
        create: {
          address: 'String',
          authDetail: { create: { nonce: 'String' } },
        },
      },
    },
  },
})
