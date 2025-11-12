# 🚀 Deployment Guide

## ✅ Checklist trước khi deploy

- [ ] Đã có Docker và Docker Compose
- [ ] Đã clone repository
- [ ] Đã có file .env cho các services

## 📦 Deployment Steps

### 1. Clone và Setup
```bash
git clone <repository-url>
cd MiniProject
make up
```

### 2. Kiểm tra services
```bash
./check-health.sh
```

### 3. Chạy migrations
```bash
make migrate
```

### 4. Seed data (optional)
```bash
make seed
```

## 🔍 Troubleshooting

### Services không start
```bash
# Xem logs
make logs

# Hoặc xem logs của service cụ thể
docker-compose logs -f auth-service
```

### Database connection error
```bash
# Kiểm tra database containers
docker-compose ps

# Restart services
make down
make up
```

### Port đã được sử dụng
Kiểm tra và thay đổi ports trong docker-compose.yml:
- Frontend: 3000
- Gateway: 8000
- phpMyAdmin: 8081
- Auth DB: 3307
- Result DB: 3308
- Quiz DB: 27018

## 🔄 Update và Rebuild

```bash
# Pull latest code
git pull

# Rebuild và restart
make rebuild
```

## 🧹 Clean Up

```bash
# Dừng và xóa containers
make down

# Xóa cả volumes (reset database)
make clean
```

## 📊 Monitoring

### Container Status
```bash
docker-compose ps
```

### Resource Usage
```bash
docker stats
```

### Logs
```bash
# All services
make logs

# Specific service
docker-compose logs -f auth-service
docker-compose logs -f quiz-service
docker-compose logs -f result-service
```
