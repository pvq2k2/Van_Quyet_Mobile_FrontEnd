This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Cấu trúc thư mục Next.js với `src/`

```bash
/my-nextjs-project
│── /src                  # Thư mục chứa toàn bộ mã nguồn
│   ├── /app              # App Router (Next.js 13+)
│   │   ├── /(public)     # Layout công khai (Header, Footer)
│   │   ├── /dashboard    # Layout dành cho user đã đăng nhập
│   │   ├── /api          # Route API (Server Actions)
│   │   ├── /auth         # Xác thực (sign-in, sign-up)
│   │   ├── /profile      # Trang cá nhân
│   │   ├── layout.tsx    # Layout chính của ứng dụng
│   │   ├── page.tsx      # Trang chính (home page)
│   ├── /components       # Các component tái sử dụng
│   ├── /hooks            # Custom React Hooks
│   ├── /lib              # Helper functions, API clients
│   ├── /services         # Services (call API, database)
│   ├── /store            # State management (Zustand, Redux)
│   ├── /styles           # File CSS, SCSS hoặc Tailwind
│   ├── /config           # Cấu hình hệ thống (env, constants)
│   ├── /middleware       # Middleware xử lý request
│   ├── /tests            # Unit & integration tests
│── /public               # Static assets (ảnh, favicon, fonts)
│── /node_modules         # Thư viện cài đặt từ npm
│── next.config.mjs       # Cấu hình Next.js
│── tsconfig.json         # Cấu hình TypeScript
│── tailwind.config.ts    # Cấu hình Tailwind CSS
│── package.json          # Dependencies & scripts
│── .env.local            # Biến môi trường
│── .gitignore            # Ignore file không cần commit
```
