import { db } from 'src/lib/db'

export const heroes = () => {
  return db.hero.findMany()
}

export const hero = ({ id }) => {
  return db.hero.findUnique({
    where: { id },
  })
}

export const createHero = ({ input }) => {
  return db.hero.create({
    data: input,
  })
}

export const updateHero = ({ id, input }) => {
  return db.hero.update({
    data: input,
    where: { id },
  })
}

export const deleteHero = ({ id }) => {
  return db.hero.delete({
    where: { id },
  })
}

export const Hero = {
  authDetail: (_obj, { root }) =>
    db.hero.findUnique({ where: { id: root.id } }).authDetail(),
  transactions: (_obj, { root }) =>
    db.hero.findUnique({ where: { id: root.id } }).transactions(),
  quests: (_obj, { root }) =>
    db.hero.findUnique({ where: { id: root.id } }).quests(),
  Quest: (_obj, { root }) =>
    db.hero.findUnique({ where: { id: root.id } }).Quest(),
}
