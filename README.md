# 🎓 Personal Computer Science Learning Portal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![KaTeX](https://img.shields.io/badge/KaTeX-319736?style=for-the-badge&logo=latex&logoColor=white)](https://katex.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Một cổng học liệu điện tử và kho tài liệu cá nhân được thiết kế hiện đại, khoa học, đóng vai trò là nơi lưu trữ bài giảng, ghi chép học thuật và báo cáo nghiên cứu chuyên đề cho các môn học chuyên ngành Khoa học máy tính tại **Trường Công nghệ Thông tin và Truyền thông - Đại học Cần Thơ (CTU)**.

---

## 🌟 Các Tính Năng Nổi Bật

* **Giao Diện Học Thuật Tối Giản (Modern Academic UI/UX):** Font chữ không chân hiện đại, độ tương phản dịu mắt, hệ thống lưới trực quan giúp tập trung tối đa vào nội dung bài học.
* **Tích Hợp Công Thức Toán Học KaTeX:** Tự động quét và render các công thức toán học, ký hiệu khoa học cực nhanh bằng KaTeX qua CDN, hỗ trợ cả công thức nội dòng (`$...$`) và công thức khối lớn (`$$...$$`).
* **Xuất PDF Chất Lượng Cao (High-Fidelity PDF Export):** Tích hợp nút **"Xuất file PDF"** thông minh ở đầu mỗi chương học. CSS `@media print` được cấu hình chi tiết giúp giữ nguyên đồ họa màu sắc nền, tự động ẩn các nút điều hướng và ngăn ngừa hiện tượng ngắt đôi bảng biểu/công thức toán giữa các trang.
* **Cấu Trúc Khả Mở (Scalable Architecture):** Dễ dàng mở rộng, thêm mới các chương học hoặc các môn học khác bằng cách nhân bản cấu trúc thư mục tĩnh một cách dễ dàng.

---

## 📚 Danh Mục Môn Học Hiện Tại

### 1. CT316 - Xử lý ảnh
Học liệu tóm tắt lý thuyết cốt lõi qua 5 chương học chi tiết:
* **Chương 1: Cấu Trúc Ảnh Số** (Khái niệm ảnh, cảm biến CCD/CMOS, Bayer Filter, định dạng ảnh...)
* **Chương 2: Các Kỹ Thuật Tiền Xử Lý Ảnh** (Quan hệ lân cận pixel 4/8, tích chập không gian, bộ lọc Gaussian/Box...)
* **Chương 3: Phát Hiện Đường Biên** (Step/Ramp/Roof edge, Gradient, toán tử Sobel/Prewitt/Laplacian...)
* **Chương 4: Phân Vùng Ảnh** (Phân ngưỡng Thresholding, Otsu, phân hoạch vùng...)
* **Chương 5: Xử lý hình thái nhị phân** (Structuring Element - SE, phép co Dilation, phép giãn Erosion, Open/Close...)

### 2. CT332 - Trí tuệ nhân tạo
Bài báo cáo môn học tham khảo từ:
* **Đề tài:** *Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study (NeurIPS 2024)*
* **Tác giả bài báo gốc:** Shusheng Xu, Wei Fu, Jiaxuan Gao, Wenjie Ye, Weilin Liu, Zhiyu Mei, Guangju Wang, Chao Yu, Yi Wu (Tsinghua University, Shanghai Qi Zhi Institute, Shanghai Jiao Tong University)
* **Nội dung:** Tổng hợp kiến thức nền tảng về SFT/RLHF/PPO/DPO, chứng minh toán học Định lý 4.1 ($\Pi_{\text{PPO}} \subsetneq \Pi_{\text{DPO}}$), phân tích thực nghiệm SafeRLHF và lý giải sự thất bại của DPO trong lập trình thi đấu (APPS, CodeContest).

---

## 📂 Cấu Trúc Thư Mục Dự Án

```bash
.
├── index.html                   # Cổng điều hướng chính (Portal Home)
├── css/
│   └── style.css                # Hệ thống Design System dùng chung và CSS Print
├── xu-ly-anh/
│   ├── index.html               # Mục lục môn CT316 - Xử lý ảnh
│   └── chapters/                # Tài liệu chi tiết 5 chương học
│       ├── chuong-1-cau-truc-anh-so.html
│       ├── chuong-2-cac-ky-thuat-tien-xu-ly-anh.html
│       ├── chuong-3-phat-hien-duong-bien.html
│       ├── chuong-4-phan-vung-anh.html
│       └── chuong-5-xu-ly-hinh-thai-nhi-phan.html
├── tri-tue-nhan-tao/
│   ├── index.html               # Mục lục môn CT332 - Trí tuệ nhân tạo
│   └── reports/
│       └── bao-cao-nghien-cuu-khoa-hoc.html  # Báo cáo môn học 
└── README.md                    # Hướng dẫn dự án
```

---

## 🛠️ Hướng Dẫn Sử Dụng & Xuất Bản

### Xem cục bộ (Local Run)
Vì đây là trang web tĩnh (Static Web), bạn chỉ cần tải thư mục dự án về và click đúp vào file `index.html` ở thư mục gốc để mở trên bất kỳ trình duyệt nào.

### Đưa lên GitHub Pages (Deploy)
Để tạo link web chạy trực tuyến miễn phí:
1. Đẩy mã nguồn lên một kho lưu trữ GitHub mới của bạn.
2. Đi tới phần **Settings** > **Pages** của repository đó.
3. Ở mục **Build and deployment**, chọn source là **Deploy from a branch**.
4. Chọn nhánh chính (`main` hoặc `master`) và thư mục gốc `/`, sau đó nhấn **Save**.
5. Đợi 1-2 phút, GitHub sẽ cung cấp cho bạn một đường liên kết trực tuyến dạng: `https://<ten-user>.github.io/<ten-repo>/`.

---

## 👤 Người Tạo Học Liệu

* **Họ và tên:** Trần Vũ Bằng
* **Vai trò:** Sinh viên ngành Khoa học máy tính
* **Trường:** Trường Công nghệ Thông tin và Truyền thông - Đại học Cần Thơ (CTU)

---

## 📄 Giấy Phép (License)

Dự án này được phân phối dưới giấy phép **MIT License**. Bạn hoàn toàn có thể sử dụng và chia sẻ cho mục đích học tập phi thương mại.
