# Du Lịch Quảng Bá - Website Giới Thiệu & Quảng Báo Du Lịch

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
3. [Tính năng](#tính-năng)
4. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
5. [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
6. [Tài khoản demo](#tài-khoản-demo)
7. [API Endpoints](#api-endpoints)
8. [Database Schema](#database-schema)
9. [Scripts](#scripts)
10. [Environment Variables](#environment-variables)

---

## Giới thiệu

**Du Lịch Quảng Bá** là đồ án tốt nghiệp - website giới thiệu và quảng bá du lịch Việt Nam. Hệ thống tích hợp các tính năng thông minh bao gồm gợi ý địa điểm bằng AI và chatbot tư vấn du lịch 24/7.

---

## Công nghệ sử dụng

| Layer | Công nghệ |
|-------|-----------|
| **Frontend** | Angular 17, Angular Material, TypeScript, SCSS, Highcharts |
| **Backend** | Node.js, Express.js, Prisma ORM |
| **Database** | MySQL 8.0 |
| **Auth** | JWT, bcryptjs |
| **Utilities** | Multer (file upload), Nodemailer (email), express-validator |

---

## Tính năng

### Website người dùng

- [x] Trang chủ với banner, điểm đến nổi bật, tour, bài viết
- [x] Danh sách & chi tiết địa điểm du lịch
- [x] Danh sách & chi tiết tour du lịch
- [x] Danh sách & chi tiết bài viết cẩm nang
- [x] Tìm kiếm và lọc theo nhiều tiêu chí
- [x] Đăng ký / đăng nhập / đăng xuất
- [x] Cập nhật hồ sơ & đổi mật khẩu
- [x] Lưu địa điểm yêu thích
- [x] Đánh giá & bình luận địa điểm/tour
- [x] Gửi yêu cầu tư vấn / liên hệ
- [x] Xem lịch sử yêu cầu của mình
- [x] Đặt tour trực tuyến
- [x] Xem & quản lý đặt tour của mình

### Tính năng thông minh (AI)

- [x] **Chatbot tư vấn du lịch** - Hybrid chatbot với keyword detection, intent classification, knowledge base retrieval, và rule-based response generation
- [x] **Gợi ý địa điểm thông minh** - Rule-based scoring engine với các tiêu chí: rating, review count, region match, category match, budget match

### Trang quản trị (Admin)

- [x] Dashboard thống kê tổng quan (Highcharts)
- [x] CRUD địa điểm du lịch
- [x] CRUD tour du lịch
- [x] CRUD bài viết cẩm nang
- [x] Quản lý danh mục
- [x] Quản lý người dùng
- [x] Quản lý đánh giá/bình luận
- [x] Quản lý yêu cầu tư vấn/liên hệ
- [x] Quản lý đặt tour
- [x] Quản lý cài đặt trang web

---

## Cấu trúc thư mục

```
webquangbadulich/
├── backend/
│   ├── src/
│   │   ├── index.js              # Entry point
│   │   ├── controllers/           # Route controllers (15 files)
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── destination.controller.js
│   │   │   ├── tour.controller.js
│   │   │   ├── article.controller.js
│   │   │   ├── review.controller.js
│   │   │   ├── favorite.controller.js
│   │   │   ├── inquiry.controller.js
│   │   │   ├── category.controller.js
│   │   │   ├── chatbot.controller.js
│   │   │   ├── recommendation.controller.js
│   │   │   ├── upload.controller.js
│   │   │   ├── dashboard.controller.js
│   │   │   ├── settings.controller.js
│   │   │   └── booking.controller.js
│   │   ├── services/             # Business logic (16 files)
│   │   │   ├── auth.service.js
│   │   │   ├── user.service.js
│   │   │   ├── destination.service.js
│   │   │   ├── tour.service.js
│   │   │   ├── article.service.js
│   │   │   ├── review.service.js
│   │   │   ├── favorite.service.js
│   │   │   ├── inquiry.service.js
│   │   │   ├── category.service.js
│   │   │   ├── chatbot.service.js
│   │   │   ├── recommendation.service.js
│   │   │   ├── upload.service.js
│   │   │   ├── dashboard.service.js
│   │   │   ├── settings.service.js
│   │   │   ├── booking.service.js
│   │   │   └── mail.service.js
│   │   ├── routes/              # API routes (16 files)
│   │   ├── middlewares/         # Auth, error, logger, validate
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   ├── logger.js
│   │   │   └── validate.js
│   │   └── utils/              # Helpers
│   │       ├── prisma.js
│   │       ├── asyncHandler.js
│   │       ├── httpError.js
│   │       ├── pagination.js
│   │       └── slug.js
│   ├── prisma/
│   │   ├── schema.prisma         # Database schema
│   │   └── seed/
│   │       └── index.js          # Seed data
│   ├── uploads/                  # Uploaded files
│   ├── package.json
│   ├── .env
│   └── write-seed.js            # Seed data generator
│
├── frontend/
│   ├── src/
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss
│   │   └── app/
│   │       ├── app.component.ts
│   │       ├── app.routes.ts
│   │       ├── app.config.ts
│   │       ├── core/
│   │       │   ├── services/     # API, Auth services
│   │       │   ├── guards/       # Auth, Admin guards
│   │       │   └── interceptors/ # Auth interceptor
│   │       ├── shared/
│   │       │   ├── components/   # Navbar, Footer, Chatbot, Confirm-Dialog
│   │       │   └── services/     # Shared services
│   │       ├── pages/            # Public pages
│   │       │   ├── home/
│   │       │   ├── destination/
│   │       │   ├── tour/
│   │       │   ├── article/
│   │       │   ├── contact/
│   │       │   ├── recommendation/
│   │       │   ├── auth/        # Login, Register
│   │       │   └── user/         # Profile, Favorites, Inquiries, Bookings
│   │       └── admin/           # Admin module
│   │           ├── admin-layout/
│   │           ├── dashboard/
│   │           ├── destinations/
│   │           ├── tours/
│   │           ├── articles/
│   │           ├── categories/
│   │           ├── users/
│   │           ├── reviews/
│   │           ├── inquiries/
│   │           ├── bookings/
│   │           └── settings/
│   └── package.json
│
├── docs/                         # Tài liệu phân tích thiết kế
│   ├── business-analysis.md
│   ├── database-design.md
│   ├── use-cases.md
│   ├── api-spec.md
│   ├── system-architecture.md
│   ├── testing-plan.md
│   ├── deployment-guide.md
│   ├── sequence.md
│   ├── activity-diagram.md
│   └── bpmn-diagrams.md
│
├── PROJECT_OVERVIEW.md
└── README.md
```

---

## Hướng dẫn cài đặt

### Yêu cầu

- Node.js 18+
- MySQL 8.0+
- npm 9+

### Bước 1: Cài đặt MySQL

```sql
-- Tạo database
CREATE DATABASE webquangbadulich CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Bước 2: Cài đặt Backend

```bash
cd backend

# Cài đặt dependencies
npm install

# Copy và chỉnh sửa .env
cp .env.example .env
# Chỉnh sửa DATABASE_URL trong .env:
# DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/webquangbadulich"

# Generate Prisma client
npm run db:generate

# Push schema lên database
npm run db:push

# Seed dữ liệu mẫu
npm run db:seed

# Chạy server
npm run dev
# Server chạy tại http://localhost:3000
```

### Bước 3: Cài đặt Frontend

```bash
cd frontend

# Cài đặt dependencies
npm install

# Chạy development server
npm start
# Frontend chạy tại http://localhost:4200
```

### Lệnh tổng hợp

```bash
# Backend
cd backend && npm install && npm run db:generate && npm run db:push && npm run db:seed && npm run dev

# Frontend (terminal khác)
cd frontend && npm install && npm start
```

---

## Tài khoản demo

| Vai trò | Email | Password | URL |
|---------|-------|----------|-----|
| **Admin** | admin@webquangbadulich.com | admin123 | http://localhost:4200/admin |
| **User** | user@webquangbadulich.com | user123 | http://localhost:4200 |

---

## API Endpoints

### Auth
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/profile` - Lấy profile
- `PUT /api/auth/profile` - Cập nhật profile
- `PUT /api/auth/change-password` - Đổi mật khẩu

### Users
- `GET /api/users` - Danh sách người dùng (admin)
- `GET /api/users/:id` - Chi tiết người dùng
- `PUT /api/users/:id` - Cập nhật (admin)
- `DELETE /api/users/:id` - Xóa (admin)

### Destinations
- `GET /api/destinations` - Danh sách (phân trang, lọc, tìm kiếm)
- `GET /api/destinations/featured` - Điểm đến nổi bật
- `GET /api/destinations/:id` - Chi tiết
- `POST /api/destinations` - Tạo (admin)
- `PUT /api/destinations/:id` - Sửa (admin)
- `DELETE /api/destinations/:id` - Xóa (admin)

### Tours
- `GET /api/tours` - Danh sách (phân trang, lọc, tìm kiếm)
- `GET /api/tours/featured` - Tour nổi bật
- `GET /api/tours/:id` - Chi tiết
- `POST /api/tours` - Tạo (admin)
- `PUT /api/tours/:id` - Sửa (admin)
- `DELETE /api/tours/:id` - Xóa (admin)

### Articles
- `GET /api/articles` - Danh sách (phân trang, lọc, tìm kiếm)
- `GET /api/articles/featured` - Bài viết nổi bật
- `GET /api/articles/:id` - Chi tiết
- `POST /api/articles` - Tạo (admin)
- `PUT /api/articles/:id` - Sửa (admin)
- `DELETE /api/articles/:id` - Xóa (admin)

### Reviews
- `GET /api/reviews/destination/:id` - Đánh giá theo địa điểm
- `GET /api/reviews/tour/:id` - Đánh giá theo tour
- `POST /api/reviews` - Tạo (user)
- `PUT /api/reviews/:id` - Sửa (user)
- `DELETE /api/reviews/:id` - Xóa (user/admin)

### Favorites
- `GET /api/favorites` - Danh sách yêu thích (user)
- `POST /api/favorites` - Thêm yêu thích
- `DELETE /api/favorites/:destinationId` - Xóa yêu thích

### Inquiries
- `GET /api/inquiries` - Danh sách (admin)
- `POST /api/inquiries` - Gửi yêu cầu
- `PUT /api/inquiries/:id` - Trả lời / cập nhật (admin)
- `DELETE /api/inquiries/:id` - Xóa (admin)

### Bookings
- `GET /api/bookings` - Danh sách (admin: tất cả, user: của mình)
- `GET /api/bookings/:id` - Chi tiết
- `POST /api/bookings` - Tạo đặt tour (user)
- `PUT /api/bookings/:id/status` - Cập nhật trạng thái (admin)
- `DELETE /api/bookings/:id` - Hủy đặt tour (user/admin)

### Categories
- `GET /api/categories/destinations` - Danh mục địa điểm
- `GET /api/categories/articles` - Danh mục bài viết
- `GET /api/categories/provinces` - Danh sách tỉnh/thành
- `POST /api/categories` - Tạo (admin)
- `PUT /api/categories/:id` - Sửa (admin)
- `DELETE /api/categories/:id` - Xóa (admin)

### AI Features
- `POST /api/chatbot` - Gửi tin nhắn chatbot
- `GET /api/chatbot/history` - Lịch sử chat
- `POST /api/recommendations` - Gợi ý địa điểm thông minh

### Dashboard
- `GET /api/dashboard/stats` - Thống kê tổng quan (admin)
- `GET /api/dashboard/chart-data` - Dữ liệu biểu đồ (admin)

### Settings
- `GET /api/settings` - Danh sách cài đặt
- `PUT /api/settings` - Cập nhật cài đặt (admin)

### Upload
- `POST /api/upload` - Upload file (admin)

### Health
- `GET /api/health` - Kiểm tra server

---

## Database Schema

### Entity Relationship

**Core Entities:**
- `users` - Tài khoản người dùng & admin (với role, avatar)
- `roles` - Phân quyền (admin, user)

**Content Entities:**
- `destinations` - Địa điểm du lịch (với địa chỉ, tọa độ, chi phí, rating, view count)
- `destination_categories` - Danh mục địa điểm
- `destination_images` - Hình ảnh địa điểm
- `destination_tags` - Liên kết địa điểm - tag
- `destination_relations` - Địa điểm liên quan
- `tags` - Thẻ địa điểm

**Tour Entities:**
- `tours` - Tour du lịch (với giá, giảm giá, số người)
- `tour_schedules` - Lịch trình tour (theo ngày, buổi)
- `tour_images` - Hình ảnh tour

**Article Entities:**
- `articles` - Bài viết cẩm nang (với author, tags, view count)
- `article_categories` - Danh mục bài viết
- `article_images` - Hình ảnh bài viết

**Geographic:**
- `provinces` - Tỉnh/thành Việt Nam (với vùng: NORTH, CENTRAL, SOUTH)

**User Interaction:**
- `reviews` - Đánh giá & bình luận (địa điểm/tour)
- `favorites` - Danh sách yêu thích
- `inquiries` - Yêu cầu tư vấn / liên hệ (với trạng thái, reply)
- `bookings` - Đặt tour (với mã booking, trạng thái)

**AI & System:**
- `chatbot_histories` - Lịch sử chatbot (session-based)
- `recommendation_logs` - Log gợi ý AI (với preferences, algorithm)
- `site_settings` - Cài đặt trang web (key-value, nhóm: general, contact, social, seo)

---

## Dữ liệu mẫu

Sau khi seed thành công:
- **30+ địa điểm du lịch** trên khắp Việt Nam
- **15 tour du lịch** với lịch trình chi tiết
- **20 bài viết cẩm nang** chia theo danh mục
- **33 tỉnh/thành** Việt Nam (miền Bắc, Trung, Nam)
- **20 người dùng** (1 admin + 19 user)
- **100+ đánh giá**
- **30 yêu cầu tư vấn/liên hệ**
- Đầy đủ categories, tags, destination_tags

---

## Scripts

```bash
# Backend
npm run dev          # Chạy dev server với nodemon
npm start            # Chạy production
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema
npm run db:seed      # Seed data
npm run db:setup     # Push + seed
npm test             # Chạy tests

# Frontend
npm start            # Dev server (port 4200)
npm run build        # Build production
npm run watch        # Watch mode
npm test             # Chạy tests
```

---

## Environment Variables

```env
# Database
DATABASE_URL="mysql://root:PASSWORD@localhost:3306/webquangbadulich"

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
NODE_ENV=development
FRONTEND_URL="http://localhost:4200"

# Email (Nodemailer - optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## Kiến trúc Backend (Service Layer)

Backend sử dụng mô hình **Controller - Service - Repository** với Prisma:

```
Request → Middleware (auth, validate, error) → Controller → Service → Prisma → Database
                                                            ↓
                                                      asyncHandler wrapper
```

### Middleware

- **auth.js** - Xác thực JWT, phân quyền admin
- **errorHandler.js** - Xử lý lỗi tập trung
- **logger.js** - Ghi log request
- **validate.js** - Validation với express-validator

### Utilities

- **asyncHandler.js** - Wrapper cho async route handlers
- **httpError.js** - Custom HTTP error class
- **pagination.js** - Helper phân trang
- **slug.js** - Tạo slug URL
- **prisma.js** - Prisma client singleton
