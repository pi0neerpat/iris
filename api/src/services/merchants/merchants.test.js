import {
  merchants,
  merchant,
  createMerchant,
  updateMerchant,
  deleteMerchant,
} from './merchants'

describe('merchants', () => {
  scenario('returns all merchants', async (scenario) => {
    const result = await merchants()

    expect(result.length).toEqual(Object.keys(scenario.merchant).length)
  })

  scenario('returns a single merchant', async (scenario) => {
    const result = await merchant({ id: scenario.merchant.one.id })

    expect(result).toEqual(scenario.merchant.one)
  })

  scenario('creates a merchant', async (scenario) => {
    const result = await createMerchant({
      input: { address: 'String' },
    })

    expect(result.address).toEqual('String')
  })

  scenario('updates a merchant', async (scenario) => {
    const original = await merchant({ id: scenario.merchant.one.id })
    const result = await updateMerchant({
      id: original.id,
      input: { address: 'String2' },
    })

    expect(result.address).toEqual('String2')
  })

  scenario('deletes a merchant', async (scenario) => {
    const original = await deleteMerchant({ id: scenario.merchant.one.id })
    const result = await merchant({ id: original.id })

    expect(result).toEqual(null)
  })
})
