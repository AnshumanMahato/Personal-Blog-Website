# Personal Blog Website

My peronal website, portfolio and blog. Blog is powered by Headless Hashnode CMS.

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

## Local Development

1. Fork and clone this repository

2. Create a Hashnode account and create a blog. (ignore if you already have one)

3. Create a new Github Personal Access Token with `repo` scope. [Here's how](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). This will be used to fetch your Github pinned projects.

4. For testing locally. Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST="your-blog-name.hashnode.dev"
NEXT_PUBLIC_HASHNODE_BASE_PATH="/blogs"
NEXT_PUBLIC_MODE=development
NEXT_PUBLIC_GA_TRACKING_ID=test
HOST_URL="http://localhost:3000"
GITHUB_API_ENDPOINT=https://api.github.com/graphql
GITHUB_PERSONAL_ACCESS_TOKEN="your-github-personal-access-token"
HASHNODE_WEBHOOK_SECRET=hn_whs_XXXXXXXXXXXXXXXX

```

5. Make required adjustments. Most of the personal information can be updated from [app/lib/profile.json](/app/lib/profile.json).

6. To test locally, first install dependencies with `npm install` and then run `npm run dev`.

## Deployment to Vercel

1. Follow the steps mentioned in the [Local Development](#local-development) section.

2. Create a new Vercel account and connect your Github account. Skip if you already have one.

3. Import this repository to Vercel.

4. Add the environment variables mentioned in the [Local Development](#local-development) section to Vercel's environment variables. Make the following adjustments:

```bash
NEXT_PUBLIC_MODE=production
HOST_URL="https://your-website-url"

```

5. Deploy the project.

6. Your website should be live now.

7. If you want to use a custom domain, you can add it from the Vercel dashboard. Read more about it [here](https://vercel.com/docs/projects/domains/add-a-domain).

8. Go to your hashnode blog settings.

9. In the domain section, enable headless mode and add blog base url as `your-website-url/blogs`.

Your blog should be live now.

## License

This project is open source and available under the Apache 2.0 License. You are free to use it for personal or commercial use. If you like this project, consider giving it a star. 🌟

## Support

If you like this project, consider supporting me. You can also contribute to this project. 🚀

## Connect

- [Twitter](https://twitter.com/AnshumanMahato_)
- [LinkedIn](https://www.linkedin.com/in/anshuman-mahato/)
- [Email](mailto:hi#anshumanmahato.me)
