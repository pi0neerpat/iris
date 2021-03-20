import { quests, quest, createQuest, updateQuest, deleteQuest } from './quests'

describe('quests', () => {
  scenario('returns all quests', async (scenario) => {
    const result = await quests()

    expect(result.length).toEqual(Object.keys(scenario.quest).length)
  })

  scenario('returns a single quest', async (scenario) => {
    const result = await quest({ id: scenario.quest.one.id })

    expect(result).toEqual(scenario.quest.one)
  })

  scenario('creates a quest', async (scenario) => {
    const result = await createQuest({
      input: {
        contractAddress: 'String',
        methodName: 'String',
        purchaseBalance: 'String',
        domain: 'String',
        name: 'String',
      },
    })

    expect(result.contractAddress).toEqual('String')
    expect(result.methodName).toEqual('String')
    expect(result.purchaseBalance).toEqual('String')
    expect(result.domain).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a quest', async (scenario) => {
    const original = await quest({ id: scenario.quest.one.id })
    const result = await updateQuest({
      id: original.id,
      input: { contractAddress: 'String2' },
    })

    expect(result.contractAddress).toEqual('String2')
  })

  scenario('deletes a quest', async (scenario) => {
    const original = await deleteQuest({ id: scenario.quest.one.id })
    const result = await quest({ id: original.id })

    expect(result).toEqual(null)
  })
})
