#  hospital-notification-service

### MongoDB
- DB: `NotificationServiceDB`

### Các collection
- `notifications`

### API Endpoint
| Method | URL | Chức năng |
|--------|-----|------------|
| POST | `/api/notifications` | Tạo mới |
| GET | `/api/notifications/:id` | Xem chi tiết |
| GET | `/api/notifications` | Lọc danh sách |
| PUT | `/api/notifications/:id/status` | Cập nhật trạng thái |

### Run local
```bash
npm install
npm start
