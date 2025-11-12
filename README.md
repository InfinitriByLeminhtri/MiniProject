# Quiz Application - Microservices Architecture

## 🏗️ Kiến trúc hệ thống

```
┌─────────────┐
│   Frontend  │ :3000
│  (React)    │
└──────┬──────┘
       │
┌──────▼──────────┐
│  API Gateway    │ :8000
└────┬─────┬─────┬┘
     │     │     │
┌────▼─┐ ┌─▼───┐ ┌▼────┐
│Auth  │ │Quiz │ │Result│
│:5000 │ │:5001│ │:5002 │
└──┬───┘ └──┬──┘ └──┬───┘
   │        │       │
   └────────┴───────┘
            │
   ┌────────▼─────────┐
   │ MySQL Container  │ :3306
   ├──────────────────┤
   │ 📁 auth_db       │
   │ 📁 quiz_db       │
   │ 📁 result_db     │
   └──────────────────┘
```

## 🚀 Khởi động nhanh

### Yêu cầu
- Docker & Docker Compose
- Git

### Cài đặt

**Cách 1: Sử dụng Makefile (Khuyến nghị)**
```bash
# Clone repository
git clone <repository-url>
cd MiniProject

# Setup và khởi động (tự động tạo .env files)
make up

# Xem logs
make logs
```

**Cách 2: Sử dụng script**
```bash
./setup.sh
docker-compose up -d
```

**Cách 3: Manual**
```bash
cp services/auth-service/.env.example services/auth-service/.env
cp services/quiz-service/.env.example services/quiz-service/.env
cp services/result-service/.env.example services/result-service/.env
docker-compose up -d
```

### Truy cập

- **Frontend**: http://localhost:3000
- **API Gateway**: http://localhost:8000
- **phpMyAdmin**: http://localhost:8081
- **MySQL DB**: localhost:3306 (auth_db, quiz_db, result_db)

## 📦 Services

### 1. Auth Service (Port 5000)
- **Database**: MySQL
- **Tech**: Express, Sequelize, JWT, bcrypt
- **Chức năng**: Đăng ký, đăng nhập, xác thực

### 2. Quiz Service (Port 5001)
- **Database**: MySQL
- **Tech**: Express, Sequelize
- **Chức năng**: Quản lý câu hỏi, bài quiz

### 3. Result Service (Port 5002)
- **Database**: MySQL
- **Tech**: Express, Sequelize
- **Chức năng**: Lưu kết quả, thống kê

## 🛠️ Development

**Sử dụng Makefile:**
```bash
make up        # Khởi động
make down      # Dừng
make logs      # Xem logs
make clean     # Xóa volumes
make rebuild   # Rebuild services
make migrate   # Chạy migrations
make seed      # Seed data
```

**Hoặc Docker Compose:**
```bash
docker-compose down
docker-compose down -v
docker-compose up -d --build
docker-compose logs -f auth-service
```

## 📝 Database Migration

**Sử dụng Makefile:**
```bash
make migrate   # Chạy tất cả migrations
make seed      # Seed tất cả data
```

**Hoặc thủ công:**
```bash
# Auth Service
docker-compose exec auth-service npm run db:migrate
docker-compose exec auth-service npm run db:seed

# Quiz Service
docker-compose exec quiz-service npm run db:migrate
docker-compose exec quiz-service npm run db:seed

# Result Service
docker-compose exec result-service npm run db:migrate
docker-compose exec result-service npm run db:seed
```

## 🔧 Cấu trúc thư mục

```
MiniProject/
├── frontend/           # React + Vite
├── gateway/            # API Gateway
├── services/
│   ├── auth-service/   # Authentication service
│   ├── quiz-service/   # Quiz management service
│   └── result-service/ # Result tracking service
├── nginx/              # Nginx config
└── docker-compose.yml
```

## 📚 Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MySQL 8.0 (Single Container)
- **Gateway**: Express + http-proxy-middleware
- **Container**: Docker, Docker Compose
