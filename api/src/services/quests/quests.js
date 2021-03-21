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
}

export const createQuest = async ({ input }) => {
  const heroMerchant = context.currentUser
  const merchant = await db.hero
    .findFirst({
      where: {
        address: heroMerchant.address,
      },
    })
    .merchantAccount()
  if (!merchant) {
    merchant = await db.merchant.create({
      data: {
        owner: { connect: { address: heroMerchant.address } },
      },
    })
  }
  const { chainId, tokenAddress } = input
  // let token = await db.token.findFirst({
  //   where: {
  //     contractAddress: tokenAddress,
  //     chainId,
  //   },
  // })
  // if (!token)
  //   token = await db.token.create({
  //     data: {
  //       contractAddress: tokenAddress,
  //       chainId,
  //     },
  //   })

  const {
    triggerId,
    contractAddress,
    method,
    purchaseBalance,
    name,
    domain,
    abi,
  } = input
  return db.quest.create({
    data: {
      merchant: { connect: { id: merchant.id } },
      trigger: { connect: { id: triggerId } },
      contractAddress,
      method,
      abi,
      // purchaseToken: { connect: { id: token.id } },
      purchaseBalance,
      domain,
      name,
      chainId,
    },
  })
}

export const updateQuest = async ({ id, input }) => {
  const {
    triggerId,
    contractAddress,
    method,
    abi,
    purchaseBalance,
    name,
    domain,
    chainId,
    tokenAddress,
  } = input
  // let token = await db.token.findFirst({
  //   where: {
  //     contractAddress: tokenAddress,
  //     chainId,
  //   },
  // })
  // if (!token)
  //   token = await db.token.create({
  //     data: {
  //       contractAddress: tokenAddress,
  //       chainId,
  //     },
  //   })
  return db.quest.update({
    where: { id },
    data: {
      trigger: { update: { id: triggerId } },
      contractAddress,
      method,
      abi,
      chainId,
      // purchaseToken: { connect: { id: token.id } },
      purchaseBalance,
      domain,
      name,
    },
  })
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
    db.quest.findFirst({ where: { id: root.id } }).merchant(),
  transactions: (_obj, { root }) =>
    db.quest.findFirst({ where: { id: root.id } }).transactions(),
  trigger: (_obj, { root }) =>
    db.quest.findFirst({ where: { id: root.id } }).trigger(),
  heroes: (_obj, { root }) =>
    db.quest.findFirst({ where: { id: root.id } }).heroes(),
  heroesActive: (_obj, { root }) =>
    db.quest.findFirst({ where: { id: root.id } }).heroesActive(),
  Token: (_obj, { root }) =>
    db.quest.findFirst({ where: { id: root.id } }).Token(),
}
