# Personal Dashboard - Next.js

Một bảng điều khiển cá nhân (Personal Dashboard) hiện đại được xây dựng với Next.js 14, cho phép bạn tùy chỉnh giao diện với các widget có thể kéo thả, hỗ trợ chế độ tối/sáng và lưu trữ dữ liệu đồng bộ.

## ✨ Tính năng nổi bật

- **Widget kéo thả**: Sắp xếp các widget theo ý thích bằng thao tác drag & drop mượt mà
- **Đa dạng widget**: 
  - 🌤️ Thời tiết (Weather): Hiển thị thông tin thời tiết theo thời gian thực
  - 📝 Ghi chú (Notes): Ghi chú nhanh với tự động lưu
  - ✅ Tác vụ (Tasks): Quản lý danh sách việc cần làm
- **Chế độ tối/sáng**: Tự động chuyển đổi theo hệ thống hoặc thủ công
- **Xác thực người dùng**: Đăng nhập đơn giản để lưu dữ liệu cá nhân hóa
- **Lưu trữ đồng bộ**: Dữ liệu được lưu cả trên trình duyệt (localStorage) và server
- **Giao diện responsive**: Hoạt động tốt trên mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **Next.js 14+** (App Router) - Framework React hiện đại
- **TypeScript** - Đảm bảo kiểu dữ liệu chặt chẽ
- **TailwindCSS** - Styling nhanh và linh hoạt
- **@dnd-kit/sortable** - Thư viện kéo thả chuyên nghiệp
- **next-themes** - Quản lý theme tối/sáng
- **NextAuth.js** - Xác thực người dùng đơn giản
- **OpenWeatherMap API** - Cung cấp dữ liệu thời tiết

## 📋 Yêu cầu hệ thống

- Node.js 18.17 trở lên
- npm hoặc yarn
- API key từ OpenWeatherMap (miễn phí)

## 🚀 Hướng dẫn cài đặt

### Bước 1: Clone repository

```bash
git clone <repository-url>
cd personal-dashboard
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

Hoặc sử dụng yarn:

```bash
yarn install
```

### Bước 3: Cấu hình biến môi trường

Tạo file `.env.local` trong thư mục gốc của dự án:

```bash
cp .env.example .env.local
```

Sau đó chỉnh sửa file `.env.local` với thông tin của bạn:

```env
# API Key từ OpenWeatherMap (lấy tại https://openweathermap.org/api)
OPENWEATHER_API_KEY=your_openweathermap_api_key_here

# Secret key cho NextAuth (có thể tạo ngẫu nhiên bằng: openssl rand -base64 32)
NEXTAUTH_SECRET=your_nextauth_secret_here

# URL ứng dụng (development)
NEXTAUTH_URL=http://localhost:3000
```

**Lưu ý quan trọng:**
- Để lấy `OPENWEATHER_API_KEY`, bạn cần đăng ký tài khoản miễn phí tại [OpenWeatherMap](https://openweathermap.org/api) và tạo API key
- `NEXTAUTH_SECRET` nên là một chuỗi ngẫu nhiên dài ít nhất 32 ký tự. Bạn có thể tạo bằng lệnh: `openssl rand -base64 32`

### Bước 4: Chạy ứng dụng

Khởi động server phát triển:

```bash
npm run dev
```

Hoặc:

```bash
yarn dev
```

Ứng dụng sẽ chạy tại địa chỉ: [http://localhost:3000](http://localhost:3000)

## 🔐 Hướng dẫn sử dụng

### Đăng nhập

Khi truy cập lần đầu, bạn sẽ được chuyển hướng đến trang đăng nhập.

**Thông tin đăng nhập demo:**
- Email: Bất kỳ email nào (ví dụ: `user@example.com`)
- Mật khẩu: Bất kỳ mật khẩu nào (ví dụ: `password123`)

*Lưu ý: Đây là chế độ demo, không yêu cầu xác thực thực tế. Mọi email/mật khẩu đều chấp nhận được.*

### Sử dụng Dashboard

Sau khi đăng nhập, bạn sẽ thấy dashboard với các widget mặc định:

1. **Thêm widget mới**:
   - Nhấn nút "➕ Thêm Widget" ở góc phải
   - Chọn loại widget bạn muốn thêm (Weather, Notes, hoặc Tasks)

2. **Sắp xếp widget**:
   - Nhấn và giữ vào header của widget
   - Kéo và thả đến vị trí mong muốn
   - Thứ tự sẽ tự động được lưu

3. **Xóa widget**:
   - Nhấn vào nút "🗑️" ở góc phải header của widget

4. **Chuyển đổi chế độ tối/sáng**:
   - Nhấn vào biểu tượng 🌙/☀️ ở góc phải màn hình
   - Chế độ mặc định theo hệ thống của bạn

### Chi tiết các widget

#### 🌤️ Weather Widget
- Hiển thị nhiệt độ, điều kiện thời tiết và icon minh họa
- Tự động cập nhật khi tải trang
- Xử lý trạng thái loading và lỗi kết nối
- *Yêu cầu: Đã cấu hình OPENWEATHER_API_KEY*

#### 📝 Notes Widget
- Khung textarea để ghi chú nhanh
- Tự động lưu sau 1 giây khi ngừng gõ (debounce)
- Dữ liệu được đồng bộ lên server và localStorage

#### ✅ Tasks Widget
- Thêm task mới với nội dung văn bản
- Đánh dấu task hoàn thành bằng checkbox
- Chỉnh sửa task đã tồn tại
- Xóa task không cần thiết
- Tất cả thay đổi được tự động lưu

## 📁 Cấu trúc thư mục

```
personal-dashboard/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   ├── auth/             # Xác thực NextAuth
│   │   └── dashboard/        # API quản lý dashboard
│   ├── dashboard/            # Trang dashboard chính
│   ├── login/                # Trang đăng nhập
│   ├── layout.tsx            # Layout chính
│   └── page.tsx              # Trang chủ (redirect)
├── components/               # React Components
│   ├── dashboard/            # Components liên quan dashboard
│   ├── widgets/              # Các widget cụ thể
│   └── ui/                   # UI components chung
├── data/                     # Dữ liệu lưu trữ server
│   └── dashboard.json        # File JSON lưu dữ liệu user
├── lib/                      # Utility functions
├── types/                    # TypeScript types
├── public/                   # Tài nguyên tĩnh
├── .env.example              # Mẫu biến môi trường
├── .env.local                # Biến môi trường thực tế (không commit)
├── next.config.js            # Cấu hình Next.js
├── tailwind.config.ts        # Cấu hình TailwindCSS
├── tsconfig.json             # Cấu hình TypeScript
└── README.md                 # File hướng dẫn này
```

## 🔧 API Routes

### GET `/api/dashboard`
Lấy dữ liệu dashboard của user hiện tại từ server.

**Response:**
```json
{
  "layout": ["weather", "notes", "tasks"],
  "notes": "Nội dung ghi chú...",
  "tasks": [
    { "id": "1", "text": "Làm bài tập", "completed": false }
  ]
}
```

### POST `/api/dashboard`
Cập nhật dữ liệu dashboard lên server.

**Request Body:**
```json
{
  "layout": ["weather", "notes", "tasks"],
  "notes": "Nội dung ghi chú mới...",
  "tasks": [
    { "id": "1", "text": "Task mới", "completed": true }
  ]
}
```

## 🎨 Tùy chỉnh giao diện

### Màu sắc
Chỉnh sửa trong `tailwind.config.ts` để thay đổi palette màu theo ý thích.

### Widget mới
Để thêm widget mới:
1. Tạo component trong `components/widgets/`
2. Thêm vào danh sách widget khả dụng trong `components/dashboard/AddWidgetButton.tsx`
3. Cập nhật logic render trong `components/dashboard/Dashboard.tsx`

## ⚠️ Lưu ý quan trọng

1. **Dữ liệu demo**: Ứng dụng sử dụng file JSON để lưu trữ, phù hợp cho mục đích demo. Trong production, nên sử dụng database thực sự.

2. **API Key**: Không commit file `.env.local` lên Git. Chỉ sử dụng `.env.example` làm mẫu.

3. **Bảo mật**: Chế độ xác thực hiện tại chỉ mang tính chất demo. Không sử dụng cho môi trường production mà không có biện pháp bảo mật bổ sung.

4. **Hydration**: Ứng dụng xử lý hydration mismatch bằng cách chỉ truy cập localStorage sau khi component mount.

## 🐛 Xử lý sự cố

### Lỗi: "Invalid API key" trong Weather Widget
- Kiểm tra lại `OPENWEATHER_API_KEY` trong `.env.local`
- Đảm bảo API key đã được kích hoạt trên OpenWeatherMap
- Restart server sau khi thay đổi biến môi trường

### Lỗi: Dữ liệu không được lưu
- Kiểm tra quyền ghi thư mục `data/`
- Xem console log để biết chi tiết lỗi
- Đảm bảo đã đăng nhập trước khi sử dụng dashboard

### Lỗi: Dark mode không hoạt động
- Xóa cache trình duyệt và thử lại
- Kiểm tra cài đặt theme hệ thống
- Đảm bảo `next-themes` đã được cấu hình đúng

## 📄 License

Dự án mã nguồn mở, tự do sử dụng cho mục đích học tập và cá nhân.

## 🤝 Đóng góp

Mọi đóng góp về code, ý tưởng hay báo cáo lỗi đều được chào đón. Vui lòng tạo issue hoặc pull request trên repository.

---

**Phát triển với ❤️ bởi Next.js Community**
