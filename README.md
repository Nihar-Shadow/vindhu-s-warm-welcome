# Vindhu – South Indian Restaurant Website

Live site: **https://vindhu.netlify.app/**

This repository contains the marketing website for **Vindhu**, a fast, friendly South Indian restaurant located in Kendriya Vihar, Bhubaneswar.  
The site focuses on simple, homely South Indian food, clean ambience, and honest prices, highlighting why locals choose Vindhu for everyday meals.

## Overview

The website is a single-page React application that presents:

- A hero section introducing Vindhu and its core promise
- An About section describing the restaurant’s philosophy and location
- A Menu highlight section for popular South Indian dishes and pricing range
- A Reviews section showcasing real guest feedback and ratings
- A Gallery with photos of food and the restaurant space
- A Contact section with address and call-to-book details
- A mobile-friendly sticky call button for quick phone calls

The design is fully responsive so guests can easily browse the site on mobile, tablet, and desktop.

## Tech Stack

This project is built with:

- **React** (SPA structure and components)
- **TypeScript**
- **Vite** (bundler and dev server)
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui + Radix UI** (accessible, composable UI primitives)

## Project Structure (high level)

- `src/pages/Index.tsx` – main landing page that composes all sections
- `src/components` – feature components (Hero, About, Menu, Reviews, Gallery, Contact, Header, Footer, MobileCallButton)
- `src/components/ui` – reusable UI building blocks from shadcn/ui
- `public` – static assets such as favicon and meta files

## Getting Started (Local Development)

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Move into the project folder
cd vindhu-s-warm-welcome

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder and can be deployed to any static hosting provider (such as Netlify, which is used for the live site).

## Available Scripts

- `npm run dev` – start the Vite development server
- `npm run build` – build the project for production
- `npm run build:dev` – build in development mode
- `npm run lint` – run ESLint over the codebase

## Deployment

The live version of this site is deployed on **Netlify**:

- Live URL: **https://vindhu.netlify.app/**

You can deploy your own instance by building the project (`npm run build`) and connecting the repository to Netlify (or any other static hosting service), using `npm run build` as the build command and `dist` as the publish directory.
