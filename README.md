# <p align="center">🎓 StudyHub - Personal CS Learning Portal</p>

<p align="center">
  <a href="https://html.spec.whatwg.org/"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
  <a href="https://www.w3.org/Style/CSS/"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS"></a>
  <a href="https://katex.org/"><img src="https://img.shields.io/badge/KaTeX-319736?style=for-the-badge&logo=latex&logoColor=white" alt="KaTeX"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>
</p>


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

### 3. Machine Learning cơ bản
Kho học liệu lý thuyết và bài tập thực hành học máy cơ bản:
* **Chương 1: Machine Learning là gì?** (Khái niệm học máy, định nghĩa Mitchell, lập trình truyền thống vs học máy)
* **Chương 2: Phân nhóm các thuật toán Machine Learning** (Học có giám sát, học không giám sát, học bán giám sát, học tăng cường)
* **Chương 3: Lộ trình 4 Bước Cho Người Mới Bắt Đầu** (Chuẩn bị vũ khí, thuật toán nhập môn, thực hành với Scikit-Learn, Deep Learning và chuyên sâu)
* **Chương 4: Tìm hiểu các thư viện Python cơ bản** (Trụ cột NumPy, Pandas, trực quan hóa Matplotlib/Seaborn, huấn luyện Scikit-Learn)
* **Chương 5: Các khóa học Machine Learning cho người mới bắt đầu** (Đánh giá Andrew Ng Specialization, Google MLCC, Kaggle Learn)
* **Chương 6: Dự án phân loại Titanic** (Quy trình ML 5 bước: thu thập, làm sạch dữ liệu, train-test split, huấn luyện Random Forest và đánh giá Confusion Matrix)

### 4. Nguyên lý Hệ điều hành
Kho học liệu lý thuyết và bộ câu hỏi trắc nghiệm tương tác:
* **Chương 1: Giới thiệu Hệ điều hành** (Định nghĩa, vai trò bộ quản lý tài nguyên, quy trình khởi động Bootstrap, các hệ thống đa chương/chia thời gian/thời gian thực/phân tán)
* **Chương 2: Cấu trúc Hệ điều hành** (Thành phần hệ điều hành, các dịch vụ hệ thống, lời gọi hệ thống System Call, kiến trúc nhân Monolithic/Layered/Microkernel/Máy ảo)
* **Chương 3: Tiến trình** (Bản chất tiến trình, cấu trúc phân vùng nhớ, 5 trạng thái vòng đời, PCB, hàng đợi và bộ định thời, tạo/hủy tiến trình và IPC)
* **Chương 4: Định thời CPU** (Chu kỳ CPU-I/O Burst, Dispatcher, các tiêu chí đánh giá, giải thuật FCFS/SJF/Priority/Round Robin/Multilevel Queue, định thời đa nhân và thời gian thực)
* **Chương 5: Đồng bộ hóa tiến trình** (Hiện tượng Race Condition, bài toán CSP, các giải pháp Peterson/Bakery, chỉ thị phần cứng test_and_set/compare_and_swap, công cụ Semaphore và cấu trúc Monitor)
* **Chương 6: Khóa chết** (Định nghĩa Deadlock, 4 điều kiện cần, đồ thị RAG, Wait-for Graph, giải thuật Banker, phát hiện và khôi phục hệ thống)
* **Chương 7: Quản lý bộ nhớ** (Cơ chế Base/Limit, địa chỉ Logic vs Physical, MMU, Hoán đổi bộ nhớ Swapping, giải thuật cấp phát kề nhau First/Best/Worst-fit, Phân trang Paging, bộ đệm TLB và Phân đoạn Segmentation)

---

## 📂 Cấu Trúc Thư Mục Dự Án

```bash
.
├── index.html                   # Cổng điều hướng chính (Portal Home)
├── css/
│   ├── style.css                # Hệ thống Design System dùng chung và CSS Print
│   └── landing.css              # Giao diện Trang chủ tối tân và CSS Print
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
│       └── bao-cao-mon-hoc.html             # Báo cáo môn học
├── machine-learning/
│   ├── index.html               # Mục lục môn Machine Learning cơ bản
│   └── chapters/                # Các chương học chi tiết
│       ├── chuong-1-machine-learning-la-gi.html
│       ├── chuong-2-phan-nhom-cac-thuat-toan-machine-learning.html
│       ├── chuong-3-lo-trinh-4-buoc-cho-nguoi-moi-bat-dau.html
│       ├── chuong-4-tim-hieu-cac-thu-vien.html
│       ├── chuong-5-cac-khoa-hoc-machine-learning-cho-nguoi-moi-bat-dau.html
│       └── chuong-6-du-doan-kha-nang-song-sot-tren-tau-titanic.html
├── nguyen-ly-he-dieu-hanh/
│   ├── index.html               # Mục lục môn Nguyên lý Hệ điều hành
│   └── chapters/                # Các chương học chi tiết
│       ├── chuong-1-gioi-thieu-he-dieu-hanh.html
│       ├── chuong-2-cau-truc-he-dieu-hanh.html
│       ├── chuong-3-tien-trinh.html
│       ├── chuong-4-dinh-thoi-cpu.html
│       ├── chuong-5-dong-bo-hoa-tien-trinh.html
│       ├── chuong-6-khoa-chet.html
│       └── chuong-7-quan-ly-bo-nho.html
└── README.md                    # Hướng dẫn dự án
```

---

## 👤 Người Tạo Học Liệu

* **Họ và tên:** Trần Vũ Bằng
* **Vai trò:** Sinh viên ngành Khoa học máy tính
* **Trường:** Trường Công nghệ Thông tin và Truyền thông - Đại học Cần Thơ (CTU)

---

## 📄 Giấy Phép (License)

Dự án này được phân phối dưới giấy phép **MIT License**. Bạn hoàn toàn có thể sử dụng và chia sẻ cho mục đích học tập phi thương mại.
