This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

You can check [demo](https://next-typescript-material-ui-starter.vercel.app/)

## Features

- [React.js 19](https://react.dev/blog/2024/12/05/react-19) - Latest React with improved performance
- [Next.js 15](https://nextjs.org/blog/next-15) - Latest Next.js with Turbopack and React 19 support
- [TypeScript 5](https://www.typescriptlang.org/) - Strict type checking with latest features
- [Material UI 7](https://mui.com/material-ui/getting-started/) - Latest Material Design components
- [Biome](https://biomejs.dev/) - Fast linter and formatter (replaces ESLint + Prettier)
- [Serwist 9](https://serwist.pages.dev/) - Modern PWA framework with advanced caching strategies
- [Docker](https://docs.docker.com/) - Multi-stage optimized builds with Node.js 22
- [Husky 9](https://typicode.github.io/husky/) - Git hooks with simplified setup
- [Lint Staged 16](https://github.com/okonet/lint-staged) - Run linters on staged files

## Requirements

- Node.js >= 22.0.0
- pnpm >= 9.0.0

## Usage

### Installation

```bash
git clone https://github.com/danangekal/next-typescript-material-ui-starter.git
cd next-typescript-material-ui-starter
pnpm install
```

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Code Quality

```bash
pnpm lint         # Run Biome linter (check only)
pnpm lint:fix     # Run Biome and auto-fix issues
pnpm format       # Format code with Biome
pnpm check        # Run Biome check and auto-fix (linting + formatting)
```

### Docker

```bash
# Build Docker image
docker build -t next-typescript-material-ui-starter .

# Run Docker container
docker run --rm -it -p 3000:3000 next-typescript-material-ui-starter
```

The Docker setup uses:
- Multi-stage build for optimized image size
- Node.js 22 Alpine for minimal footprint
- Non-root user for security
- pnpm for fast, efficient package management
- Next.js standalone output mode

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

#### Docker Build

```bash
docker build -t next-typescript-material-ui-starter .
```

#### Docker Run

```bash
docker run --rm -it -p 3000:3000 next-typescript-material-ui-starter
```

#### Docker Compose

```bash
docker-compose up
```

#### Docker Images

You can use images available on docker hub [next-typescript-material-ui-starter](https://hub.docker.com/r/danangekal/next-typescript-material-ui-starter).

```bash
docker pull danangekal/next-typescript-material-ui-starter
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

Copyright © 2021 by Danang Eko Alfianto
