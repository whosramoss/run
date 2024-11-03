<a href="https://github.com/whosramoss/nt3">
  <img alt="NT3" src="./public/nt3-thumbnail.png" />
  <h1 align="center">NT3</h1>
</a>

<p align="center">
  This template provides a starting point for building Next.js apps with Tailwind, TypeScript and Three.js.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-242424?style=for-the-badge&logo=nextdotjs" alt="Website">
  <img src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=React&logoColor=fff" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-FEFEFE?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript">
  <img src="https://img.shields.io/badge/Framer%20Motion-CC6699?style=for-the-badge&logo=framer" alt="Framer Motion">
  <br/>
  <img src="https://img.shields.io/badge/Prettier-242424?style=for-the-badge&logo=prettier" alt="Prettier">
  <img src="https://img.shields.io/badge/eslint-0170FE?style=for-the-badge&logo=eslint" alt="eslint">
  <img src="https://img.shields.io/badge/zod-242424?style=for-the-badge&logo=zod" alt="zod">
   <img src="https://img.shields.io/badge/three-242424?style=for-the-badge&logo=three.js" alt="three">
</div>
<br/>

<br/>



## How to install ⚡

```bash
  # Clone the project
  git clone https://github.com/whosramoss/nt3/

  # Go to the project directory
  cd nt3

  # Install dependencies
  npm install

  # Start the server 
  npm run dev
```

## How to build ⚡
- Before generating the build, don't forget to update the [metadata](./src/shared/meta.ts) file and set ```isLocalMetadata = false```.
- To generate a static compilation, the [next.config.mjs](./next.config.mjs) file must have the object below :
```bash
const staticbuild = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
}
```
- Run the command:
```bash
  npm run build
```
## Structure 📂

- [src](./src/) – Add all folders below
  - [app](./src/app/) – Contains pages, layouts, and api routes
  - [client](./src/client/) – Contains components, hooks, providers, and styles
  - [server](./src/server/) – Contains schemas and services
  - [shared](./src/shared/) – Contains methods, types, enums and constants that will be used in more than one place in the application

## Framework and Packages 🦾
- [Next.js](https://nextjs.org/) 
- [TypeScript](https://www.typescriptlang.org/) 
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) 
- [Tailwind CSS](https://tailwindcss.com/) 
- [Framer Motion](https://framer.com/motion) 
- [Zod](https://zod.dev/) 

## Hooks ⚡
- [useAnimationCursor](./src/client/hooks/useAnimationCursor.ts)
- [useAnimationFadeIn](./src/client/hooks/useAnimationFadeIn.ts)
- [useApiFetch](./src/client/hooks/useApiFetch.ts)


## Contributing 📄
If you want to contribute to `nt3`, please make sure to review the [contribution guidelines](https://github.com/whosramoss/nt3/blob/master/CONTRIBUTING.md). This project makes use of [GitHub issues](https://github.com/whosramoss/nt3/issues) for
tracking requests and bugs.

## License 📄

MIT License. [LICENSE](./LICENSE)

## Author ✍️

Gabriel Ramos ([@whosramoss](https://github.com/whosramoss))

