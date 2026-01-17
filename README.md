# Local Marketplace

A digital destination for slow living and artisanal excellence, connecting users with the finest local makers through a modern, glassmorphic UI.

## 🔗 Links

- **GitHub Repository**: [https://github.com/TanvirulAbrar/local-shop](https://github.com/TanvirulAbrar/local-shop)
- **Live Site**: [https://local-market-seven.vercel.app/](https://local-market-seven.vercel.app/)

## Setup & Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:

   ```bash
   cd my-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔑 Test Credentials

For testing protected routes (`/seller`, `/seller/add-product`):

- **Email**: `admin@example.com`
- **Password**: `123Qwe$`

## Route Summary

- **`/`**: Homepage featuring hero sections, featured collections, and artisan spotlights.
- **`/products`**: Browse the full collection of artisanal products.
- **`/products/[id]`**: Detailed view for individual products.
- **`/makers`**: "Meet the Makers" page showcasing local artisans and their stories.
- **`/events-workshops`**: A curated bento-grid layout for local activities and community workshops.
- **`/mission-impact`**: Overview of the marketplace's mission, sustainability goals, and impact.
- **`/help-center`**: FAQ and support resources for customers and makers.
- **`/auth/login`**: User login page.
- **`/auth/register`**: New user registration page.
- **`/seller`**: Seller dashboard (Protected route).
- **`/seller/add-product`**: Interface for artisans to list new products (Protected route).

## Implemented Features

- **Modern Glassmorphic UI**: High-end aesthetic using Tailwind CSS 4 with glass effects and backdrop blurs.
- **Authentication System**: Secure login and registration powered by **NextAuth.js**, featuring:
  - **Google OAuth**: One-click social login integration.
  - **Credentials Provider**: Email/Password login for administrative access.
- **Route Protection**: Custom middleware to secure seller and dashboard routes based on session tokens.
- **Responsive Navigation**: Dynamic navbar with active state tracking and auth-aware buttons (Login/Logout).
- **Bento-Grid Layouts**: Specialized layouts for events and workshops to maximize visual engagement.
- **Dynamic Product Routing**: Support for individual product pages with dynamic IDs.

## Brief Feature Explanation

### Glassmorphism UI

Utilizes advanced Tailwind CSS utilities to create a "frosted glass" look across headers, cards, and input fields, emphasizing a premium, artisanal feel.

### Middleware Security

A custom `middleware.js` interceptor checks for NextAuth session tokens (`next-auth.session-token`) before allowing access to `/seller` or `/dashboard` routes, redirecting unauthenticated users to the login page.

### Auth-Aware Navigation

The `MarketplaceLayout` component dynamically updates based on the user's authentication state, showing "Login" for guests and "Logout" for authenticated users.

### Artisan Spotlights

Dedicated pages for "Makers" allow the community to connect with the people behind the products, supporting the "slow living" mission.
