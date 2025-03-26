# Auth Kick - Next.js Template with NextAuth

Auth Kick is an open-source Next.js template designed to save developers time by providing a pre-configured authentication setup using [NextAuth.js](https://next-auth.js.org/). It includes authentication with Google and GitHub out of the box, making it easy to get started with secure and scalable user authentication.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/auth-kick.git
cd auth-kick
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Next.js**: A powerful React framework for building modern web applications.
- **NextAuth.js**: Pre-configured authentication with Google and GitHub providers.
- **TypeScript**: Fully typed for better developer experience.
- **Scalable**: Easily extendable to add more providers or custom authentication logic.

## Configuration

To configure the authentication providers, create a `.env.local` file in the root of your project and add the following environment variables:

```env
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

Replace `your-google-client-id`, `your-google-client-secret`, `your-github-client-id`, and `your-github-client-secret` with your actual credentials from Google and GitHub.

## Learn More

To learn more about the technologies used in this template, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - Learn how to configure and extend NextAuth.js.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript and its features.

## Contributing

Contributions are welcome! If you have ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request on [GitHub](https://github.com/your-repo/auth-kick).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

