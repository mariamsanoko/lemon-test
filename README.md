# Supersaas Lite

A minimal fullstack starter template deployed on the Edge using [NuxtHub](https://hub.nuxt.com).

Demo - [https://supersaas-lite.nuxt.dev/](https://supersaas-lite.nuxt.dev/?ref=github-readme-supersaas-lite)


## Features

- Google, Github & Discord login
- Database setup
- Typescript
- CRUD APIs
- User Settings
- Simple Note app use case

Supersaas lite is a part of [Supersaas Pro](https://supersaas.dev?ref=supersaas-lite-github-readme) - The fullstack Nuxt 3 template that comes with 

- Auth - Email/Password, Magic Link, One time passwords, Passkeys, Social Auth
- DB - Turso, NuxtHub or Postgres
- Payments - Manage user payment subscriptions using Stripe or Lemonsqueezy
- Emails - send emails with 5 providers to choose from - Sendgrid, Postmark, Resend, Plunk and Mailgun
- File storage - Upload, Delete and manipulate files - AWS S3, Nuxthub, Cloudflare R2 or even local file storage
- Super Admin Mode - Add users, send password reset links, ban/unban and delete users.

## Setup

Make sure to install the dependencies with [pnpm](https://pnpm.io/installation#using-corepack):

```bash
pnpm install
```

Set the environment variables

```bash
NUXT_OAUTH_GITHUB_CLIENT_ID
NUXT_OAUTH_GITHUB_CLIENT_SECRET
NUXT_OAUTH_GOOGLE_CLIENT_ID
NUXT_OAUTH_GOOGLE_CLIENT_SECRET
NUXT_OAUTH_DISCORD_CLIENT_ID
NUXT_OAUTH_DISCORD_CLIENT_SECRET
NUXT_SESSION_PASSWORD=32_CHAR_ALPHA_NUMERIC_STRING
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

## Deploy


Deploy the application on the Edge with [NuxtHub](https://hub.nuxt.com) on your Cloudflare account:

```bash
npx nuxthub deploy
```

Then checkout your server logs, analaytics and more in the [NuxtHub Admin](https://admin.hub.nuxt.com).

You can also deploy using [Cloudflare Pages CI](https://hub.nuxt.com/docs/getting-started/deploy#cloudflare-pages-ci).

