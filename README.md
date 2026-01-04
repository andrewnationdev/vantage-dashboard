# 🚀 Overview

The Vantage Dashboard is financial analytics platform template built with Next.js. By using Recharts for data visualization and Tailwind CSS for a refined dark-mode aesthetic, the application offers a clear overview of monthly income, expenses, and investment availability through a clean and responsive interface. You can easily customize it to tailor it to your needs, because the app is split into components you can reuse. It was built with a focus on precision, performance, and modern UI/UX principles.

# 🛠 Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Data Visualization: Recharts
- Architecture: Internal API Routes (Full-stack simulation)

# ✨ Key Features

- Full-Stack Architecture: Implements native Next.js API Routes to serve financial data asynchronously.
- Analytical Visualization: Responsive line charts illustrating income vs. expense trends.
- Modular Component Design: Clean separation of concerns with isolated components for cards, charts, and layout logic.
- Refined UI/UX: Dark-mode optimized interface with smooth transitions and fade-in animations.
- Mobile First.

📐 Architectural Decisions

- Data is fetched from an internal endpoint (/api/finance) instead of being hardcoded into the UI. If needed, you can easily expand that endpoint to add DB connection.
- Type Safety: use of TypeScript interfaces to ensure data consistency across the entire application.
- Optimization: Next.js metadata for improved SEO and branding (custom favicons and dynamic titles).

# 🚦 Getting Started

1-Extract the .zip file

2-Install dependencies:
Bash

```bash
npm install
```

3-Run the development server:

```bash
npm run dev
```

4-Open the application: Navigate to http://localhost:3000 to view the dashboard.