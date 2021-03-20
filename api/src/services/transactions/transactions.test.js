import {
  transactions,
  transaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from './transactions'

describe('transactions', () => {
  scenario('returns all transactions', async (scenario) => {
    const result = await transactions()

    expect(result.length).toEqual(Object.keys(scenario.transaction).length)
  })

  scenario('returns a single transaction', async (scenario) => {
    const result = await transaction({ id: scenario.transaction.one.id })

    expect(result).toEqual(scenario.transaction.one)
  })

  scenario('creates a transaction', async (scenario) => {
    const result = await createTransaction({
      input: {
        id: 'String',
        timestamp: '2021-03-20T17:14:03Z',
        blockNumber: 'String',
        status: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.timestamp).toEqual('2021-03-20T17:14:03Z')
    expect(result.blockNumber).toEqual('String')
    expect(result.status).toEqual('String')
  })

  scenario('updates a transaction', async (scenario) => {
    const original = await transaction({ id: scenario.transaction.one.id })
    const result = await updateTransaction({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a transaction', async (scenario) => {
    const original = await deleteTransaction({
      id: scenario.transaction.one.id,
    })

    const result = await transaction({ id: original.id })

    expect(result).toEqual(null)
  })
})
