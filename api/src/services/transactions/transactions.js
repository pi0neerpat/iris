import { db } from 'src/lib/db'

export const transactions = () => {
  return db.transaction.findMany()
}

export const transaction = ({ id }) => {
  return db.transaction.findUnique({
    where: { id },
  })
}

export const createTransaction = ({ input }) => {
  return db.transaction.create({
    data: input,
  })
}

export const updateTransaction = ({ id, input }) => {
  return db.transaction.update({
    data: input,
    where: { id },
  })
}

export const deleteTransaction = ({ id }) => {
  return db.transaction.delete({
    where: { id },
  })
}

export const Transaction = {
  quest: (_obj, { root }) =>
    db.transaction.findUnique({ where: { id: root.id } }).quest(),
  hero: (_obj, { root }) =>
    db.transaction.findUnique({ where: { id: root.id } }).hero(),
}
