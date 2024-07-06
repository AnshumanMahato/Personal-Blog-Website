# Personal Website 

My peronal website, portfolio and blog. Blog is powered by Headless Hashnode CMS.

If you like this, do consider giving it a star ⭐. Feel free to fork and use it for your own website.

## Features

- [x] Simple and clean UI
- [x] Blog via Headless Hashnode CMS
- [x] Portfolio with Github pinned projects
- [x] Responsive design
- [x] Dark mode

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/) (for requests)

# Headless Hashnode CMS

This website uses Headless Hashnode CMS to fetch and display blog posts. You can use it for free. It consumes [Hashnode's Public APIs](https://apidocs.hashnode.com/), and gives you a fully customizable blog that can be deployed anywhere, including a subpath of a custom domain. Combined with [Hashnode's headless](https://hashnode.com/headless) mode, it unlocks entirely new possibilities. You can now use [Hashnode's world class editor](https://hashnode.com/neptune) and dashboard to author content and collaborate.

## How to deploy for yourself

1. Fork and clone this repository
2. Create a Hashnode account and create a blog. (ignore if you already have one) 
3. Create a new Github Personal Access Token with `repo` scope. [Here's how](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). This will be used to fetch your Github pinned projects.
4. For testing locally. Create a `.env.local` file in the root of the project and add the following environment variables:
    
    ```bash
    NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
    NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST="your-blog-name.hashnode.dev"
    NEXT_PUBLIC_BASE_URL="/blogs"
    NEXT_PUBLIC_MODE=development
    HOST_URL="http://localhost:3000"
    GITHUB_API_ENDPOINT=https://api.github.com/graphql
    GITHUB_PERSONAL_ACCESS_TOKEN="your-github-personal-access-token"
    ```
5. Make required adjustments. Most of the personal information can be updated from [app/lib/profile.json](/app/lib/profile.json). You can test locally by running `npm run dev`.
6. 

## Getting Started

First, run the development server:

```bash {"id":"01J21MEVQTB8WMQ07AWE7J0DJY"}
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
