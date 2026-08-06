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
Học liệu lý thuyết cốt lõi qua 7 chương học chi tiết và hệ thống trắc nghiệm tương tác:
* **Chương 1: Trí tuệ nhân tạo là gì?** (Lịch sử phát triển, Turing Test, phân loại AGI/Narrow AI, nền tảng học thuật)
* **Chương 2: Giải quyết vấn đề bằng tìm kiếm** (BFS, DFS, DLS, IDDFS, UCS, trạng thái vs nút)
* **Chương 3: Các kỹ thuật tìm kiếm Heuristic** (Leo đồi Hill Climbing, Greedy Best-First, A*, bài toán thỏa mãn ràng buộc CSP, cắt tỉa Alpha-Beta)
* **Chương 4: Biểu diễn tri thức** (Mô hình logic, hệ luật sinh, mạng ngữ nghĩa, cấu trúc Frame)
* **Chương 5: Thủ tục hợp giải** (Chứng minh phản chứng, Unification, Skolemization, dạng CNF)
* **Chương 6: Suy diễn tiến - lùi** (Hệ thống luật IF-THEN, bộ suy diễn hướng dữ liệu và hướng mục tiêu)
* **Chương 7: Giải thuật di truyền** (Mã hóa, hàm thích nghi, Roulette Wheel, lai ghép, đột biến, lược đồ Schema)
* **Hệ thống trắc nghiệm tương tác:** Gồm 7 chương lý thuyết (50 câu/chương) và 1 phần **Bài tập tính toán tổng hợp (50 câu)** có lời giải chi tiết và hỗ trợ định dạng $\LaTeX$ trực quan.
* **Báo cáo chuyên đề nghiên cứu khoa học:**
  - *Đề tài:* Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study (NeurIPS 2024)
  - *Tài liệu trực quan:* Sơ đồ căn chỉnh 3 bước (Alignment Pipeline) & So sánh chi tiết kiến trúc toán học PPO vs DPO.

### 3. Nghiên cứu khoa học - AI (NCKH)
Kho tài liệu nền tảng học tập nghiên cứu khoa học:
* **Phương pháp luận:** Hướng dẫn cách tìm kiếm, đọc hiểu bài báo khoa học chuẩn NeurIPS/ICML.
* **Kỹ năng cốt lõi:** Phương pháp viết bài báo học thuật, chuẩn bị slide báo cáo chuyên đề và thực nghiệm các mô hình deep learning.

### 4. Các mô hình AI & Lĩnh vực con (AI-MODELS)
Tổng hợp phân loại các nhánh mô hình trí tuệ nhân tạo từ cổ điển đến hiện đại:
* **Machine Learning & Deep Learning:** Khung phân loại MLP, mạng lan truyền ngược (Backpropagation).
* **Computer Vision:** Mô hình CNN (AlexNet, ResNet), Vision Transformer (ViT) và phát hiện vật thể YOLO.
* **NLP (Natural Language Processing):** RNN, LSTM, cơ chế Attention, kiến trúc Transformer và các mô hình ngôn ngữ lớn (LLMs).
* **Học tăng cường (Reinforcement Learning):** Tiến trình quyết định Markov (MDP), thuật toán Q-learning, Policy Gradient và PPO.
* **AI tạo sinh (Generative AI):** Mạng đối nghịch tạo sinh (GANs), Autoencoders (VAE) và mô hình khuếch tán (Diffusion Models).

### 5. Machine Learning cơ bản (ML)
Kho học liệu lý thuyết và bài tập thực hành học máy cơ bản:
* **Chương 1: Machine Learning là gì?** (Khái niệm học máy, định nghĩa Mitchell, lập trình truyền thống vs học máy)
* **Chương 2: Phân nhóm các thuật toán Machine Learning** (Học có giám sát, học không giám sát, học bán giám sát, học tăng cường)
* **Chương 3: Lộ trình 4 Bước Cho Người Mới Bắt Đầu** (Chuẩn bị vũ khí, định hướng thư viện và Scikit-Learn)
* **Chương 4: Tìm hiểu các thư viện Python cơ bản** (NumPy, Pandas, Matplotlib/Seaborn, Scikit-Learn)
* **Chương 5: Các khóa học Machine Learning cho người mới bắt đầu** (Đánh giá Andrew Ng ML Specialization, Google MLCC, Kaggle Learn)
* **Chương 6: Dự án phân loại Titanic** (Quy trình ML 5 bước: thu thập, làm sạch dữ liệu, train-test split, huấn luyện Random Forest và đánh giá Confusion Matrix)

### 6. CT178 - Nguyên lý Hệ điều hành (OS)
Kho học liệu lý thuyết và bộ câu hỏi trắc nghiệm tương tác:
* **Chương 1: Giới thiệu Hệ điều hành** (Quy trình khởi động Bootstrap, hệ thống đa chương/chia thời gian/thời gian thực/phân tán)
* **Chương 2: Cấu trúc Hệ điều hành** (Thành phần hệ điều hành, dịch vụ hệ thống, System Call, kiến trúc nhân Monolithic/Layered/Microkernel)
* **Chương 3: Tiến trình** (Cấu trúc phân vùng nhớ, 5 trạng thái vòng đời, PCB, hàng đợi và bộ định thời, tạo/hủy tiến trình và IPC)
* **Chương 4: Định thời CPU** (Chu kỳ CPU-I/O Burst, giải thuật FCFS/SJF/Priority/Round Robin/Multilevel Queue)
* **Chương 5: Đồng bộ hóa tiến trình** (Hiện tượng Race Condition, bài toán CSP, các giải pháp Peterson/Bakery, Semaphore và Monitor)
* **Chương 6: Khóa chết** (Định nghĩa Deadlock, 4 điều kiện cần, đồ thị RAG, giải thuật Banker, phát hiện và khôi phục hệ thống)
* **Chương 7: Quản lý bộ nhớ** (Địa chỉ Logic vs Physical, MMU, Hoán đổi Swapping, giải thuật First/Best/Worst-fit, Phân trang Paging, bộ đệm TLB và Phân đoạn Segmentation)

### 7. TailwindCSS - Phát triển giao diện (TW)
* **Lý thuyết nền tảng:** Tư duy Utility-first, Root CSS, reset preflight, hệ thống spacing & đơn vị rem/px.
* **Kỹ thuật chuyên sâu:** Thiết kế Responsive (breakpoints), Dark Mode, cấu hình custom config và tối ưu hóa compiler JIT.

### 8. NodeJS & ExpressJS (NODE)
* **Kiến trúc cốt lõi:** Tìm hiểu Event Loop, lập trình bất đồng bộ Single-thread, các module fs, path, http.
* **Xây dựng API:** ExpressJS Routing, hệ thống Middleware, bảo mật, mã hóa mật khẩu và xác thực Token JWT.

### 9. Java Core Basic (JAVA)
* **Nền tảng:** Cú pháp Java, kiến trúc máy ảo JVM, bộ JDK/JRE.
* **Hướng đối tượng (OOP):** Thực hành 4 tính chất Đóng gói, Kế thừa, Đa hình và Trừu tượng. Collections Framework (List, Set, Map), Generic và đọc ghi file cơ bản.

### 10. Advanced Java Core (JAVA-ADV)
* **Quản lý bộ nhớ:** Stack, Heap, Metaspace và cơ chế Garbage Collection.
* **Lập trình nâng cao:** Lambda Expression, Stream API, đa luồng Multithreading & Concurrency, Reflection API và tối ưu hóa Connection Pooling (HikariCP).

### 11. Lịch sử Đảng Cộng sản Việt Nam (LSD)
Học liệu chương trình đại cương chuẩn quốc gia:
* **Nội dung:** Lịch sử thành lập Đảng (1930), lãnh đạo kháng chiến chống Pháp (1945-1954), kháng chiến chống Mỹ (1954-1975) và chặng đường đổi mới đất nước.

### 12. Lịch sử Đảng - Cô Xuyến (LSD-CX)
Học liệu số hóa chi tiết và ngân hàng trắc nghiệm phục vụ riêng cho lớp học phần Cô Xuyến:
* **Bài giảng chi tiết:** Thiết kế bài học tương thích cao, sơ đồ tóm tắt Chương 1, 2, 3 và 4 (1975 - 2021).
* **Ghi chú trên lớp Chương III (1975 - Nay):** Tóm tắt toàn diện các kỳ Đại hội Đảng (Đại hội IV, V, VI, VII, VIII, IX, X, XI) và các bước đột phá chuyển đổi kinh tế.
* **Bảng ôn thi tổng hợp (Chuyên đề rút gọn):** So sánh các Cương lĩnh (1930, 1951, 1991, 2011), hệ thống 8 Mặt trận, so sánh chiến lược chiến tranh, Hiệp định Sơ bộ/Giơnevơ/Paris, sơ đồ các chiến dịch lớn, nhân vật lịch sử và bài văn mẫu nguyên nhân thắng lợi.
* **Trắc nghiệm tự động:** Ngân hàng 33 câu hỏi trắc nghiệm ôn tập chính thức có chấm điểm và giải thích chi tiết.

### 14. APTECH - Java OOP (APTECH-OOP)
* **Giáo trình Chuẩn Aptech Quốc Tế (ACCP / ADSE):** Hệ thống 7 chương lý thuyết & bài tập chuẩn thi trực tiện Aptech Online Exam.
* **Nội dung:** Lịch sử Java, JVM/JRE/JDK, Lớp & Đối tượng, 4 tính chất OOP (Encapsulation, Inheritance, Polymorphism, Abstraction), Access Modifiers, Exception Handling (Checked/Unchecked Exception, Custom Exception), Java Collections Framework (List, Set, Map, Comparable vs Comparator), Java I/O Streams, Serialization, transient và Java Swing GUI.
* **Ngân hàng trắc nghiệm:** 60 câu trắc nghiệm tương tác chấm điểm tức thì.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```bash
.
├── index.html                   # Cổng điều hướng chính (Portal Home)
├── css/
│   ├── style.css                # Hệ thống Design System dùng chung và CSS Print
│   └── landing.css              # Giao diện Trang chủ tối tân và CSS Print
├── js/
│   └── theme.js                 # Quản lý giao diện Sáng/Tối và đếm điểm trắc nghiệm
├── xu-ly-anh/
│   ├── index.html               # Mục lục môn CT316 - Xử lý ảnh
│   └── chapters/                # Tài liệu chi tiết 5 chương học
├── tri-tue-nhan-tao/
│   ├── index.html               # Mục lục môn CT332 - Trí tuệ nhân tạo
│   └── reports/                 # Báo cáo chuyên đề PPO vs DPO
├── nckh/
│   └── index.html               # Học liệu môn Nghiên cứu khoa học
├── mo-hinh-ai/
│   └── index.html               # Cổng phân loại các mô hình AI
├── machine-learning/
│   ├── index.html               # Mục lục môn Machine Learning cơ bản
│   └── chapters/                # Các chương học chi tiết
├── nguyen-ly-he-dieu-hanh/
│   ├── index.html               # Mục lục môn Nguyên lý Hệ điều hành
│   └── chapters/                # Các chương học chi tiết
├── tailwind-css/
│   └── index.html               # Học liệu Tailwind CSS
├── node-express/
│   └── index.html               # Học liệu Node & ExpressJS
├── java-core/
│   └── gioi-thieu-java.html     # Học liệu Java cơ bản
├── java-advanced/
│   └── bo-nho-java.html         # Học liệu Java nâng cao
├── co-so-van-hoa-viet-nam/
│   ├── index.html               # Mục lục môn Cơ sở văn hóa Việt Nam
│   └── js/                      # Cơ sở dữ liệu câu hỏi trắc nghiệm CSVH
├── lich-su-dang/
│   └── index.html               # Học liệu môn Lịch sử Đảng (Chương trình chung)
├── lich-su-dang-co-xuyen/
│   ├── index.html               # Cổng môn học Lịch sử Đảng Cô Xuyến
│   ├── nhung-van-de-chung.html  # Tài liệu ôn thi tổng hợp (Mặt trận, Hiệp định, Chiến dịch...)
│   ├── chuong-1.html            # Lý thuyết Chương 1 (1930 - 1945)
│   ├── chuong-2.html            # Lý thuyết Chương 2 (1945 - 1954)
│   ├── chuong-3.html            # Lý thuyết Chương 3 (1954 - 1975)
│   ├── chuong-4.html            # Lý thuyết Chương 4 (1975 - 2021)
│   ├── ghi-chu-chuong-3.html    # Ghi chú trên lớp Chương 3 (1975 - Nay)
│   └── trac-nghiem-de-co-xuyen.html # Ngân hàng trắc nghiệm tương tác (33 câu)
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
