import { db } from 'src/lib/db'

export const quests = () => {
  return db.quest.findMany()
}

export const quest = ({ id }) => {
  return db.quest.findUnique({
    where: { id },
  })
}
export const questByTriggerId = ({ triggerId }) => {
  return db.trigger
    .findOne({
      where: { id: triggerId },
    })
    .quest()

  return quest
}

export const createQuest = ({ input }) => {
  return db.quest.create({
    data: input,
  })
}

export const updateQuest = ({ id, input }) => {
  return db.quest.update({
    data: input,
    where: { id },
  })
}

export const deleteQuest = ({ id }) => {
  return db.quest.delete({
    where: { id },
  })
}

export const Quest = {
  merchant: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).merchant(),
  transactions: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).transactions(),
  trigger: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).trigger(),
  heroes: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).heroes(),
  heroesActive: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).heroesActive(),
  Token: (_obj, { root }) =>
    db.quest.findUnique({ where: { id: root.id } }).Token(),
}
