export const standard = defineScenario({
  merchant: {
    one: { address: 'String', authDetail: { create: { nonce: 'String' } } },
    two: { address: 'String', authDetail: { create: { nonce: 'String' } } },
  },
})
