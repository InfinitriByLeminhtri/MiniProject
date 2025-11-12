# 🚀 Quick Start Guide

## Bước 1: Clone project
```bash
git clone <repository-url>
cd MiniProject
```

## Bước 2: Setup (tự động tạo .env files)
```bash
./setup.sh
```

## Bước 3: Khởi động
```bash
docker-compose up -d
```

## Bước 4: Kiểm tra
```bash
# Xem trạng thái containers
docker-compose ps

# Xem logs
docker-compose logs -f
```

## ✅ Truy cập ứng dụng

- Frontend: http://localhost:3000
- API Gateway: http://localhost:8000
- phpMyAdmin: http://localhost:8081

## 🛑 Dừng ứng dụng
```bash
docker-compose down
```

## 🔄 Reset database
```bash
docker-compose down -v
docker-compose up -d
```

## 📝 Chạy migrations
```bash
# Auth Service
docker-compose exec auth-service npm run db:migrate

# Result Service  
docker-compose exec result-service npm run db:migrate
```

That's it! 🎉
