import { db } from 'src/lib/db'

export const trigger = ({ input }) => {
  return db.trigger.create({ data: { input } })
}

export const updateTrigger = async ({ id, input }) => {
  const trigger = await db.trigger.findUnique({ where: { id } })
  if (trigger.quest) throw Error('This trigger is already connected to a Quest')
  return db.trigger.update({
    data: input,
    where: { id },
  })
}

export const Trigger = {
  quest: (_obj, { root }) =>
    db.trigger.findUnique({ where: { id: root.id } }).quest(),
}
