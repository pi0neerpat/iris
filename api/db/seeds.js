/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
const fs = require('fs-extra')
const path = require('path')

dotenv.config()
const db = new PrismaClient()

async function main() {}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
