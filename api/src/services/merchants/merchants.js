import { db } from 'src/lib/db'

export const merchants = () => {
  return db.merchant.findMany()
}

export const merchant = ({ id }) => {
  return db.merchant.findUnique({
    where: { id },
  })
}

export const createMerchant = ({ input }) => {
  return db.merchant.create({
    data: input,
  })
}

export const updateMerchant = ({ id, input }) => {
  return db.merchant.update({
    data: input,
    where: { id },
  })
}

export const deleteMerchant = ({ id }) => {
  return db.merchant.delete({
    where: { id },
  })
}

export const Merchant = {
  owner: (_obj, { root }) =>
    db.merchant.findFirst({ where: { id: root.id } }).owner(),
  quests: (_obj, { root }) =>
    db.merchant.findFirst({ where: { id: root.id } }).quests(),
  authDetail: (_obj, { root }) =>
    db.merchant.findFirst({ where: { id: root.id } }).authDetail(),
}
