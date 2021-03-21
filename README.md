<h1 align="center">Welcome to Iris Quest 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A flexible, sharable transaction builder for web3.

Made with ❤️ @ [NFT Hack 2021](https://nft.ethglobal.co/)

<!-- ### 🏠 [Homepage](TODO) -->

![](./example.png)

## Tech stack

See `Notes.md` for a full overview of how I made this.

- `@redwoodjs` for the React and Prisma database tooling
- `@oneclickdapp/ethereum-auth` for wallet authentication [docs](https://github.com/oneclickdapp/ethereum-auth/blob/master/README.md)
- ethers for web3 interaction

### Code + Developer stuff

The UI was built with RedwoodJS. See `notes.md` for a complete walkthrough of how it was made.

## Install

```sh
yarn install
```

copy `.env.template` to `.env` and add the required variables

## Usage

```sh
# Do these commands once
yarn rw db save
yarn rw db up

# Run this to start the app
yarn rw dev
```

### Ngrok it

```bash
# In VM
yarn rw dev --fwd="--host=0.0.0.0"

# on host machine
./ngrok http 8910 --host-header=rewrite
```

## New to Redwood?

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

## Author

👤 **Patrick Gallagher** - Dev

- Website: https://patrickgallagher.dev

  - Twitter: [@pi0neerpat](https://twitter.com/pi0neerpat)
  - GitHub: [@pi0neerpat](https://github.com/pi0neerpat)

👤 **Luke Bateman** - Design

- Website: https://lukebateman.studio
  - Twitter: [@lukebateman\_](https://twitter.com/lukebateman_)
  - GitHub: [@lukebateman1](https://github.com/lukebateman1)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
