# API Gateway

## Mô tả
API Gateway là điểm trung tâm quản lý và điều hướng các yêu cầu API trong hệ thống microservices. Gateway hoạt động như một reverse proxy, nhận tất cả các yêu cầu từ client và chuyển tiếp đến các service tương ứng.

## Chức năng chính

### 🔀 Proxy và Load Balancing
- Điều hướng các yêu cầu API đến các microservice phù hợp
- Cân bằng tải giữa các instance của service
- Quản lý kết nối và timeout

### 🛡️ Bảo mật
- CORS (Cross-Origin Resource Sharing) protection
- Helmet.js để bảo vệ khỏi các lỗ hổng web phổ biến
- Rate limiting và request validation

### 📊 Monitoring và Logging
- Ghi log chi tiết các request/response
- Theo dõi hiệu suất và thời gian phản hồi
- Monitoring health check của các service

### ⚡ Tối ưu hóa hiệu suất
- Compression để giảm kích thước response
- Caching cho các response thường xuyên
- Connection pooling

### 🔧 Quản lý API
- Centralized configuration cho tất cả các route
- API versioning support
- Request/Response transformation

## Các Service được quản lý
- **Auth Service**: Quản lý authentication và authorization
- **Quiz Service**: Quản lý bài quiz và câu hỏi
- **Result Service**: Xử lý kết quả và điểm số

## Công nghệ sử dụng
- **Express.js**: Web framework
- **http-proxy-middleware**: Proxy middleware
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger
- **Compression**: Response compression
- **CORS**: Cross-origin resource sharing

## Cấu hình

### Environment Variables
```env
PORT=8000
AUTH_SERVICE_URL=http://auth-service:5000
QUIZ_SERVICE_URL=http://quiz-service:5001
RESULT_SERVICE_URL=http://result-service:5002
```

### Cấu trúc Routes
- `/api/auth/*` → Auth Service
- `/api/quiz/*` → Quiz Service
- `/api/result/*` → Result Service
- `/` → Health check endpoint

## Khởi chạy
```bash
# Development
npm run dev

# Production (local)
npm start

# Production (AWS EC2)
npm run start:prod
```

## Thêm Service mới
1. Thêm environment variable cho service URL
2. Cập nhật `src/config/routes.js`:
```javascript
app.use(
  "/api/new-service",
  createProxyMiddleware({ target: process.env.NEW_SERVICE_URL, changeOrigin: true })
);
```

## Health Check
GET `/` → `✅ Gateway running`

## Ports
- Gateway: 8000
- Auth Service: 5000
- Quiz Service: 5001
- Result Service: 5002