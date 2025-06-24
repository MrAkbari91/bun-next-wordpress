# WanderCity Blog

## About the Project

WanderCity Blog is a modern blog application built with Next.js that specifically integrates with the WordPress REST API. It fetches posts and categories directly from a WordPress backend and displays them in a clean, responsive interface. The blog features infinite scrolling to load more posts seamlessly as the user scrolls down. It includes reusable components for displaying blog cards, images, headers, and footers, and uses Flowbite React and react-icons for UI elements.

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Navigate to the project directory:
```bash
cd your-project-directory
```

3. Install dependencies using your preferred package manager:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. Create a `.env.local` file in the root directory and add your WordPress API URL:
```
NEXT_PUBLIC_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## What I Have Done

- Integrated the application with the WordPress REST API to fetch and display blog posts and categories.
- Implemented fetching and displaying blog posts with images, categories, titles, excerpts, and publication dates from WordPress.
- Created reusable components such as BlogCard for post previews and ImageById for fetching and displaying WordPress media by ID.
- Developed a custom hook `useCategories` to fetch and manage WordPress blog categories.
- Added infinite scrolling functionality to load more posts dynamically as the user scrolls.
- Built a responsive header with navigation links and a footer with social media links using Flowbite React and react-icons.
- Ensured the application is responsive and optimized for different screen sizes.
- Configured API client using Axios with environment-based base URL for flexibility.

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
