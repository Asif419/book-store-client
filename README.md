## 📚 Book Store

An interactive full-stack book marketplace built with Next.js and Redux. Users can browse, search, and purchase books in real time. Includes a responsive UI, authentication system, toast notifications, and state management using Redux Toolkit. Designed to be fast, scalable, and developer-friendly, this app is a solid example of modern e-commerce built with the latest technologies.

## 🔗 Live Link
https://book-shop-client-ashy.vercel.app

## 🚀 Features

- 🛒 Browse and view details of books
- 🔐 Auth system with role-based access
- 🧑‍💼 Admin Dashboard to manage products and users
- 👤 User profile management and order history
- 💳 Checkout system
- 📚 Add, edit, and delete books (admin)
- 📦 Manage orders (admin)

## 🧪 Tech Stack

- React
- TypeScript
- Redux Toolkit (RTK Query)
- TailwindCSS
- React Router DOM
- Vite
- DaisyUI

## 🔐 Admin Credentials

To access the admin dashboard, use the following credentials:

```json
{
  "email": "team2@gmail.com",
  "password": "72423855"
}
```

## 🛠️ Installation & Running Locally

Make sure you have **Node.js (18+)** and **npm** or **yarn** installed.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-shop-client.git
cd book-shop-client
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Setup Environment (if any)

If your project requires environment variables, create a `.env` file and add them accordingly.

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will be running at: [http://localhost:5173](http://localhost:5173)

### 📦 Dependencies

- `@radix-ui/react-label` ^2.1.4  
- `@radix-ui/react-slot` ^1.2.0  
- `@reduxjs/toolkit` ^2.7.0  
- `class-variance-authority` ^0.7.1  
- `clsx` ^2.1.1  
- `jwt-decode` ^4.0.0  
- `lucide-react` ^0.501.0  
- `next` 15.3.1  
- `react` ^19.0.0  
- `react-dom` ^19.0.0  
- `react-hook-form` ^7.56.1  
- `react-hot-toast` ^2.5.2  
- `react-redux` ^9.2.0  
- `sweetalert2` ^11.19.1  
- `tailwind-merge` ^3.2.0  
- `tailwindcss-animate` ^1.0.7  

### 🛠️ Dev Dependencies

- `@eslint/eslintrc` ^3  
- `@tailwindcss/postcss` ^4  
- `@types/node` ^20  
- `@types/react` ^19  
- `@types/react-dom` ^19  
- `eslint` ^9  
- `eslint-config-next` 15.3.1  
- `tailwindcss` ^4  
- `typescript` ^5

## 🧭 Project Routes Overview

### Public Routes:
- `/` – Home Page
- `/all-products` – All available books
- `/about` – About Us
- `/contact` – Contact Page
- `/book-details/:id` – Book Details
- `/login` – Login Page
- `/register` – Registration Page
- `*` – 404 Not Found

### User Routes (`/user`)
- `/user/orders` – View your orders
- `/user/edit-profile` – Edit your profile
- `/user/reset-password` – Reset your password
- `/user/checkout/:id` – Checkout page

### Admin Routes (`/admin`)
- `/admin` – Admin Profile
- `/admin/orders` – Manage all orders
- `/admin/products` – View and manage products
- `/admin/users` – Manage users
- `/admin/add-book` – Add a new book

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)
