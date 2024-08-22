# Groovy

https://groovy-sigma.vercel.app

## Description

Groovy is an interactive music website where users can explore some of my favorite artists, hear some of their music, find out about and keep track of their upcoming shows and chat with an AI assistant to learn more about them.

I built this app to get more experience with React/Next.js, AI and working with external APIs. I wanted to create a project that integrates my love for music and includes everything I would want to know about an artist in one convenient place. This project not only showcases my technical skills but also allows the user to learn more about me through the music I love.

## Demo

<img src="./public/images/groovy.gif" alt="Groovy GIF" width="600" height="350">

## Tech Stack

- [Next.js](https://nextjs.org/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Language
- [Tailwind](https://tailwindcss.com/) - CSS
- [Prisma](https://www.prisma.io/) - ORM
- [NeonDB](https://neon.tech/) - Database
- [Clerk](https://clerk.com/) - Authentication
- [Vercel](https://vercel.com) - Hosting
- [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) - API for accessing event information
- [OpenAI API](https://openai.com/api/) - API for integrating AI capabilities

## Getting Started

### Clone this repository

    git clone https://github.com/victoriaraya/groovy.git

### Install dependencies

    npm install

### Create .env file

The .env file will be used to store database urls for prisma to access. There is a pooled and unpooled connection string to accommodate both pooled and unpooled connections. Once you have a project set up in your NeonDB profile, these can be found in your project where it says connection string.

    DATABASE_URL='your-pooled-database-url-here'
    DATABASE_URL_UNPOOLED='your-unpooled-database-url-here'

### Create .env.local file

The .env.local file will be used for all other env variables needed for the app. All keys can be found in their respective profiles. The next public clerk urls are to ensure proper routing with clerk.

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='your-public-clerk-key-here'
    CLERK_SECRET_KEY='your-secret-clerk-key-here'

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/profile
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user

    TICKETMASTER_API='your-ticketmaster-key-here'
    OPENAI_API_KEY='your-openAI-key-here'

### Initialize the database

    npx prisma generate
    npx prisma migrate deploy

### Run the development server:

    npm run dev

### Open the app in your browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome, maybe add some artists that you like!
