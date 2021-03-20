import { heroes, hero, createHero, updateHero, deleteHero } from './heroes'

describe('heroes', () => {
  scenario('returns all heroes', async (scenario) => {
    const result = await heroes()

    expect(result.length).toEqual(Object.keys(scenario.hero).length)
  })

  scenario('returns a single hero', async (scenario) => {
    const result = await hero({ id: scenario.hero.one.id })

    expect(result).toEqual(scenario.hero.one)
  })

  scenario('creates a hero', async (scenario) => {
    const result = await createHero({
      input: { address: 'String' },
    })

    expect(result.address).toEqual('String')
  })

  scenario('updates a hero', async (scenario) => {
    const original = await hero({ id: scenario.hero.one.id })
    const result = await updateHero({
      id: original.id,
      input: { address: 'String2' },
    })

    expect(result.address).toEqual('String2')
  })

  scenario('deletes a hero', async (scenario) => {
    const original = await deleteHero({ id: scenario.hero.one.id })
    const result = await hero({ id: original.id })

    expect(result).toEqual(null)
  })
})
