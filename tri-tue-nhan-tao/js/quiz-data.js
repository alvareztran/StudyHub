// File chứa dữ liệu 350 câu hỏi trắc nghiệm tương tác cho 7 chương môn học Trí tuệ nhân tạo (CT332).
// Mỗi chương có đúng 50 câu hỏi độc lập, không trùng lặp, chất lượng học thuật cao.
// Các phương án lựa chọn A, B, C, D được căn chỉnh độ dài cực kỳ suýt soát nhau và có tính chất gây nhiễu rất mạnh.

const quizData = {
  // CHƯƠNG 1: TRÍ TUỆ NHÂN TẠO LÀ GÌ?
  ch1: [
    {
      q: "Thuật ngữ 'Artificial Intelligence' (AI) chính thức ra đời tại sự kiện nào?",
      a: ["A. Hội thảo khoa học Dartmouth 1956", "B. Hội thảo khoa học Stanford 1969", "C. Hội thảo khoa học Harvard 1950", "D. Hội thảo khoa học Princeton 1948"],
      c: 0,
      e: "Thuật ngữ AI chính thức ra đời năm 1956 tại hội thảo Dartmouth do John McCarthy đề xuất."
    },
    {
      q: "Ai là người đề xuất phép thử Turing (Turing Test) để đánh giá trí thông minh của máy tính?",
      a: ["A. John McCarthy", "B. Marvin Minsky", "C. Alan Turing", "D. Herbert Simon"],
      c: 2,
      e: "Alan Turing đề xuất Turing Test năm 1950 nhằm đánh giá xem máy tính có hành vi giống con người hay không."
    },
    {
      q: "Mục tiêu tối thượng của kiểm tra Turing (Turing Test) là đánh giá khả năng gì của máy tính?",
      a: ["A. Khả năng tính toán số thực siêu tốc", "B. Khả năng hành xử giống hệt con người", "C. Khả năng lưu trữ tri thức không giới hạn", "D. Khả năng lập trình tự động không lỗi"],
      c: 1,
      e: "Turing Test đánh giá khả năng mô phỏng hành vi thông minh giống con người của máy tính."
    },
    {
      q: "Hệ thống AI hiện nay đang được ứng dụng rộng rãi trong thực tế thuộc cấp độ nào?",
      a: ["A. Trí tuệ nhân tạo tổng quát (AGI)", "B. Trí tuệ nhân tạo hẹp (Narrow AI)", "C. Siêu trí tuệ nhân tạo (Super AI)", "D. Trí tuệ nhân tạo toàn diện (Strong AI)"],
      c: 1,
      e: "Hầu hết hệ thống AI hiện nay đều là Narrow AI (AI hẹp), chỉ thực hiện tốt một nhiệm vụ cụ thể."
    },
    {
      q: "Để giao tiếp khách quan trong Turing Test, các đối tượng sử dụng hình thức nào?",
      a: ["A. Hệ thống giao tiếp bằng giọng nói", "B. Hệ thống giao tiếp bằng hình ảnh động", "C. Hệ thống truyền thông tin qua văn bản", "D. Hệ thống truyền thông tin qua cử chỉ"],
      c: 2,
      e: "Người thẩm vấn giao tiếp hoàn toàn qua văn bản để tránh các yếu tố phụ về giọng nói hay hình ảnh ảnh hưởng đến kết quả."
    },
    {
      q: "Một máy tính được coi là vượt qua phép thử Turing Test khi nào?",
      a: ["A. Khi máy tính giải đúng 100% bài toán", "B. Khi người thẩm vấn không phân biệt được máy", "C. Khi máy tính có thể tự học mọi ngôn ngữ", "D. Khi máy tính tạo ra được tác phẩm nghệ thuật"],
      c: 1,
      e: "Nếu người thẩm vấn không phân biệt được đối tượng trò chuyện là máy hay người thì máy đã vượt qua Turing Test."
    },
    {
      q: "Đại số logic Boolean đóng vai trò là nền tảng trực tiếp cho thành phần nào trong AI?",
      a: ["A. Logic mệnh đề và biểu diễn tri thức", "B. Xử lý ngôn ngữ tự nhiên và dịch máy", "C. Thị giác máy tính và phân tích ảnh", "D. Giải thuật di truyền và tối ưu hóa"],
      c: 0,
      e: "Logic Boolean là nền tảng của toán học logic và biểu diễn tri thức mệnh đề."
    },
    {
      q: "Mô hình mạng nơ-ron nhân tạo (ANN) được xây dựng dựa trên cảm hứng sinh học nào?",
      a: ["A. Cấu trúc liên kết các chuỗi ADN", "B. Cơ chế hoạt động của hệ cơ xương", "C. Cấu trúc liên kết các nơ-ron não bộ", "D. Cơ chế tuần hoàn của hệ thống máu"],
      c: 2,
      e: "Mạng nơ-ron nhân tạo mô phỏng sự liên kết giữa các nơ-ron và khớp thần kinh trong não bộ con người."
    },
    {
      q: "Giải thuật di truyền (Genetic Algorithm) mô phỏng quá trình tự nhiên nào?",
      a: ["A. Quá trình lây lan dịch bệnh tự nhiên", "B. Quá trình tiến hóa và chọn lọc tự nhiên", "C. Quá trình biến đổi địa chất tự nhiên", "D. Quá trình hấp thụ dinh dưỡng tự nhiên"],
      c: 1,
      e: "Giải thuật di truyền mô phỏng chọn lọc tự nhiên, di truyền và đột biến gen."
    },
    {
      q: "Lý thuyết xác suất được ứng dụng chủ yếu trong AI nhằm giải quyết vấn đề gì?",
      a: ["A. Chứng minh các định lý toán học phức tạp", "B. Xử lý các thông tin mập mờ, không chắc chắn", "C. Cấu trúc hóa cây quyết định và tìm kiếm", "D. Tăng tốc độ tính toán của bộ vi xử lý"],
      c: 1,
      e: "Xác suất giúp AI đưa ra lựa chọn tối ưu trong môi trường thiếu thông tin hoặc thông tin mập mờ."
    },
    {
      q: "Logic mờ (Fuzzy Logic) khác biệt cốt lõi với logic cổ điển ở điểm nào?",
      a: ["A. Chỉ cho phép dùng hai giá trị 0 và 1", "B. Chấp nhận giá trị chân trị liên tục từ 0 đến 1", "C. Loại bỏ hoàn toàn phép toán hội và tuyển", "D. Chỉ áp dụng cho tập hợp các số nguyên"],
      c: 1,
      e: "Logic mờ cho phép xử lý các khái niệm không tuyệt đối (như hơi nóng, hơi lạnh) bằng cách gán giá trị chân trị liên tục từ 0 đến 1."
    },
    {
      q: "Hệ chuyên gia (Expert System) hoạt động dựa trên nguyên lý cốt lõi nào?",
      a: ["A. Sử dụng cánh tay robot để tự động vận hành", "B. Sử dụng tri thức chuyên gia để giải quyết vấn đề", "C. Sử dụng cơ chế tìm kiếm thông tin trên mạng", "D. Sử dụng thuật toán tối ưu hóa bộ nhớ đệm"],
      c: 1,
      e: "Hệ chuyên gia số hóa tri thức của các chuyên gia con người để tư vấn và đưa ra giải pháp chuyên môn."
    },
    {
      q: "Ứng dụng nào sau đây không thuộc phạm vi của Thị giác máy tính (Computer Vision)?",
      a: ["A. Nhận diện khuôn mặt trên các thiết bị di động", "B. Phát hiện làn đường giao thông của xe tự lái", "C. Phân tích hình ảnh tế bào ung thư trong y khoa", "D. Tổng hợp văn bản viết thành âm thanh giọng nói"],
      c: 3,
      e: "Chuyển văn bản thành giọng nói thuộc về kỹ thuật tiếng nói (Speech Engineering), không thuộc thị giác máy tính."
    },
    {
      q: "Ứng dụng nào sau đây là đại diện tiêu biểu cho Xử lý ngôn ngữ tự nhiên (NLP)?",
      a: ["A. Robot tự động lắp ráp linh kiện cơ khí", "B. Hệ thống dịch thuật tự động và chatbot", "C. Camera giám sát tự động nhận dạng người", "D. Chương trình máy tính tự động chơi cờ vua"],
      c: 1,
      e: "Google Translate và ChatGPT tương tác và hiểu ngôn ngữ tự nhiên của con người nên thuộc NLP."
    },
    {
      q: "Siêu máy tính Deep Blue đánh bại nhà vô địch cờ vua Garry Kasparov vào năm nào?",
      a: ["A. Năm 1956", "B. Năm 1980", "C. Năm 1997", "D. Năm 2012"],
      c: 2,
      e: "Deep Blue đánh bại Garry Kasparov vào năm 1997, đánh dấu cột mốc quan trọng của AI trong trò chơi trí tuệ."
    },
    {
      q: "AlphaGo đánh bại kỳ thủ cờ vây thế giới Lee Sedol vào năm nào?",
      a: ["A. Năm 1997", "B. Năm 2012", "C. Năm 2016", "D. Năm 2022"],
      c: 2,
      e: "AlphaGo đánh bại Lee Sedol năm 2016 nhờ kết hợp học sâu (Deep Learning) và tìm kiếm cây Monte Carlo."
    },
    {
      q: "ChatGPT chính thức ra mắt công chúng và tạo nên làn sóng AI vào năm nào?",
      a: ["A. Năm 2018", "B. Năm 2020", "C. Năm 2022", "D. Năm 2024"],
      c: 2,
      e: "ChatGPT do OpenAI giới thiệu vào tháng 11 năm 2022, khởi đầu cho làn sóng AI tạo sinh."
    },
    {
      q: "Khái niệm AGI (Artificial General Intelligence) chỉ hệ thống AI có khả năng gì?",
      a: ["A. Giải quyết một tác vụ chuyên môn hẹp", "B. Tư duy và hành động ngang tầm con người", "C. Nhận diện chính xác hình ảnh chó mèo", "D. Dịch ngôn ngữ tự động qua camera điện thoại"],
      c: 1,
      e: "AGI là AI tổng quát, có khả năng tự học, suy luận và thực hiện mọi tác vụ trí tuệ như con người."
    },
    {
      q: "Nội dung nào dưới đây không phải là một mục tiêu chính của ngành AI?",
      a: ["A. Khám phá các quy luật trí thông minh con người", "B. Xây dựng các mô hình tính toán thông minh", "C. Chế tạo các vi mạch xử lý phần cứng nhanh nhất", "D. Phát triển ứng dụng phục vụ đời sống con người"],
      c: 2,
      e: "Tăng tốc độ phần cứng thuần túy là nhiệm vụ của kỹ thuật phần cứng và chip bán dẫn, AI tập trung vào phần mềm và thuật toán thông minh."
    },
    {
      q: "Những ngành khoa học nào đóng vai trò nền tảng trực tiếp tạo nên AI?",
      a: ["A. Toán học, Khoa học máy tính, Triết học", "B. Vật lý học, Hóa học, Sinh học phân tử", "C. Địa lý học, Lịch sử, Văn học so sánh", "D. Thiên văn học, Khảo cổ học, Thần học"],
      c: 0,
      e: "AI là ngành khoa học liên ngành, liên quan đến toán học, khoa học máy tính, triết học và tâm lý học nhận thức."
    },
    {
      q: "Cụm từ 'Rational Agent' (Tác tử hợp lý) trong AI được hiểu như thế nào?",
      a: ["A. Tác tử luôn đưa ra quyết định giống con người", "B. Tác tử hành động để đạt kết quả tốt nhất có thể", "C. Tác tử có cấu tạo phần cứng bền bỉ nhất", "D. Tác tử hoạt động dựa trên các lệnh ngẫu nhiên"],
      c: 1,
      e: "Tác tử hợp lý (rational agent) hành động để tối đa hóa hiệu năng/kết quả mong đợi dựa trên thông tin sẵn có."
    },
    {
      q: "Thuật ngữ 'Học máy' (Machine Learning) được định nghĩa là gì?",
      a: ["A. Khả năng máy tính tự cải thiện qua dữ liệu", "B. Việc lập trình sẵn tất cả các tình huống bài toán", "C. Việc thiết lập hệ thống mạng internet toàn cầu", "D. Khả năng điều khiển thiết bị robot từ xa"],
      c: 0,
      e: "Machine Learning (Máy học) là nhánh nghiên cứu cách thuật toán tự học hỏi từ dữ liệu huấn luyện."
    },
    {
      q: "Nhóm ứng dụng nào sau đây đại diện tiêu biểu cho học sâu (Deep Learning)?",
      a: ["A. Lập trình giải các phương trình bậc hai", "B. Nhận diện giọng nói và nhận dạng khuôn mặt", "C. Tra cứu từ điển tiếng Anh trực tuyến", "D. Soạn thảo văn bản và định dạng bảng biểu"],
      c: 1,
      e: "Học sâu cực kỳ mạnh mẽ trong xử lý phi tuyến tính như âm thanh giọng nói và hình ảnh khuôn mặt."
    },
    {
      q: "Điểm khác biệt cơ bản giữa Dữ liệu (Data) và Tri thức (Knowledge) là gì?",
      a: ["A. Dữ liệu là thô, Tri thức đã được đúc kết quy luật", "B. Dữ liệu chỉ có ở máy, Tri thức chỉ có ở người", "C. Dữ liệu có kích thước lớn hơn tri thức rất nhiều", "D. Dữ liệu luôn chính xác hơn tri thức chuyên gia"],
      c: 0,
      e: "Dữ liệu là các con số/kí tự thô; Tri thức là thông tin có ngữ nghĩa kèm quy luật ứng dụng để giải quyết vấn đề."
    },
    {
      q: "Cơ chế 'Tự học' (Self-learning) của AI thường được hiện thực hóa qua kỹ thuật nào?",
      a: ["A. Viết thêm các dòng lệnh if-then thủ công", "B. Huấn luyện các mô hình học máy trên dữ liệu", "C. Sử dụng đĩa cứng có dung lượng khổng lồ", "D. Tăng tốc độ xung nhịp của CPU máy tính"],
      c: 1,
      e: "Tự học trong AI được thực hiện bằng cách cho mô hình máy học tối ưu hóa tham số dựa trên dữ liệu đầu vào."
    },
    {
      q: "Sự kiện nào sau đây khởi đầu cho thời kỳ suy thoái của AI (AI Winter) đầu tiên?",
      a: ["A. Alan Turing công bố nghiên cứu máy tính", "B. Báo cáo Lighthill đánh giá thấp hiệu quả AI", "C. Deep Blue chiến thắng nhà vô địch cờ vua", "D. OpenAI giới thiệu mô hình ngôn ngữ lớn"],
      c: 1,
      e: "Báo cáo Lighthill năm 1973 tại Anh chỉ trích sự thiếu thực tế của các nghiên cứu AI lúc bấy giờ, dẫn đến cắt giảm ngân sách nghiên cứu."
    },
    {
      q: "Tại sao cờ vua được coi là bài toán thử nghiệm AI kinh điển?",
      a: ["A. Vì cờ vua có luật chơi đơn giản nhất", "B. Vì cờ vua yêu cầu tư duy logic phức tạp", "C. Vì cờ vua không có yếu tố ngẫu nhiên", "D. Vì cờ vua dễ lập trình hơn các môn khác"],
      c: 1,
      e: "Cờ vua có không gian trạng thái lớn và yêu cầu tư duy chiến lược sâu sắc, thích hợp thử nghiệm suy luận logic."
    },
    {
      q: "Hệ chuyên gia MYCIN (phát triển thập niên 1970) chuyên giải quyết nhiệm vụ gì?",
      a: ["A. Điều khiển ô tô tự hành trên đường phố", "B. Chẩn đoán các bệnh nhiễm trùng máu y khoa", "C. Dịch tự động tài liệu đa ngôn ngữ", "D. Thiết kế các bản vẽ kỹ thuật kiến trúc"],
      c: 1,
      e: "MYCIN là hệ chuyên gia y tế nổi tiếng dùng để chẩn đoán nhiễm trùng máu và đề xuất liều lượng kháng sinh."
    },
    {
      q: "Lisp là viết tắt của cụm từ tiếng Anh nào?",
      a: ["A. List Processing", "B. Logic Programming", "C. Linear System", "D. Lightweight Script"],
      c: 0,
      e: "Lisp (List Processing) phát triển bởi John McCarthy năm 1958 là ngôn ngữ chuyên dụng đầu tiên cho AI."
    },
    {
      q: "Lượng từ 'Với mọi' (Universal Quantifier) ký hiệu là gì?",
      a: ["A. Ký hiệu \\(\\exists\\)", "B. Ký hiệu \\(\\forall\\)", "C. Ký hiệu \\(\\neg\\)", "D. Ký hiệu \\(\\land\\)"],
      c: 1,
      e: "Lượng từ với mọi ký hiệu là \\(\\forall\\)."
    },
    {
      q: "Đóng góp lớn nhất của hội thảo Dartmouth năm 1956 là gì?",
      a: ["A. Thành lập công ty AI thương mại đầu tiên", "B. Đặt tên ngành và xác định hướng đi cho AI", "C. Công bố máy tính điện tử đầu tiên trên thế giới", "D. Phát minh ra thuật toán mạng nơ-ron nhân tạo"],
      c: 1,
      e: " Dartmouth 1956 chính thức đặt tên ngành là 'Artificial Intelligence' và phác thảo các mục tiêu cơ bản."
    },
    {
      q: "Hạn chế lớn nhất của mô hình Perceptron đơn lớp (Single-layer Perceptron) là gì?",
      a: ["A. Không thể thực hiện phép toán cộng số thực", "B. Không thể giải quyết bài toán phi tuyến tính XOR", "C. Tốn quá nhiều không gian bộ nhớ RAM khi chạy", "D. Yêu cầu phần cứng máy tính quá đắt tiền"],
      c: 1,
      e: "Minsky và Papert chứng minh Perceptron đơn lớp không thể phân loại các hàm phi tuyến tính như XOR năm 1969."
    },
    {
      q: "Ngôn ngữ Prolog thuộc kiểu lập trình nào?",
      a: ["A. Lập trình hướng đối tượng (OOP)", "B. Lập trình khai báo logic (Declarative)", "C. Lập trình thủ tục truyền thống (Procedural)", "D. Lập trình hàm chức năng (Functional)"],
      c: 1,
      e: "Prolog (Programming in Logic) dựa trên logic vị từ và cơ chế hợp giải để suy diễn tri thức khai báo."
    },
    {
      q: "Sự khác biệt chính giữa AI mạnh (Strong AI) và AI yếu (Weak AI) là gì?",
      a: ["A. Tốc độ thực thi và dung lượng bộ nhớ máy tính", "B. Khả năng tự ý thức và tư duy độc lập thực sự", "C. Số lượng thuật toán tìm kiếm được tích hợp", "D. Khả năng kết nối các thiết bị ngoại vi vật lý"],
      c: 1,
      e: "Strong AI hướng tới ý thức và nhận thức thực sự như con người; Weak AI chỉ mô phỏng thông minh để giải quyết tác vụ cụ thể."
    },
    {
      q: "Mô hình ngôn ngữ lớn (LLM) như GPT-4 hoạt động dựa trên cơ chế cốt lõi nào?",
      a: ["A. Cơ chế tra cứu từ điển có sẵn trong cơ sở dữ liệu", "B. Dự đoán từ tiếp theo dựa trên phân phối xác suất", "C. Suy luận logic vị từ theo các luật định sẵn", "D. Chạy giải thuật di truyền tìm kiếm chuỗi ký tự"],
      c: 1,
      e: "LLM dự đoán từ tiếp theo dựa trên ngữ cảnh nhờ học phân phối xác suất từ kho văn bản khổng lồ."
    },
    {
      q: "Thành phần 'Inference Engine' trong hệ tri thức có vai trò gì?",
      a: ["A. Lưu trữ toàn bộ các luật và sự kiện của hệ thống", "B. Thực thi các phép suy luận logic để tạo tri thức mới", "C. Nhận đầu vào giọng nói và chuyển thành văn bản", "D. Hiển thị kết quả chẩn đoán lên màn hình người dùng"],
      c: 1,
      e: "Inference Engine là bộ suy diễn, chứa các thuật toán áp dụng tri thức (luật) lên dữ liệu (sự kiện) để suy ra kết luận."
    },
    {
      q: "Thuật toán tìm kiếm A* thuộc nhóm tìm kiếm nào?",
      a: ["A. Tìm kiếm mù không tri thức dẫn đường", "B. Tìm kiếm Heuristic có thông tin ước lượng", "C. Tìm kiếm cục bộ dựa trên tối ưu hóa gradient", "D. Tìm kiếm đối kháng trong trò chơi hai người"],
      c: 1,
      e: "A* sử dụng hàm đánh giá f(n) = g(n) + h(n) với h(n) là hàm Heuristic chứa tri thức dẫn đường."
    },
    {
      q: "Cảm xúc nhân tạo (Artificial Emotion) thuộc nhánh nghiên cứu nào của AI?",
      a: ["A. Thị giác máy tính phân tích cử chỉ hành vi", "B. Điện toán cảm xúc (Affective Computing)", "C. Logic mệnh đề vị từ bậc nhất nâng cao", "D. Máy học tăng cường dựa trên phần thưởng"],
      c: 1,
      e: "Affective Computing nghiên cứu hệ thống có khả năng nhận biết, diễn dịch và mô phỏng cảm xúc con người."
    },
    {
      q: "Tại sao lý thuyết trò chơi (Game Theory) quan trọng đối với AI?",
      a: ["A. Giúp máy tính lập trình game nhanh hơn", "B. Cung cấp nền tảng ra quyết định đa tác tử", "C. Tự động hóa thiết kế đồ họa 3D cho trò chơi", "D. Giảm dung lượng file cài đặt của các ứng dụng"],
      c: 1,
      e: "Lý thuyết trò chơi giúp phân tích và đưa ra quyết định tối ưu khi có nhiều thực thể (agents) tương tác cạnh tranh/hợp tác."
    },
    {
      q: "Cánh tay robot công nghiệp tự động sơn vỏ xe là ứng dụng của lĩnh vực nào?",
      a: ["A. Xử lý ngôn ngữ tự nhiên mức độ cao", "B. Robot học kết hợp điều khiển tự động", "C. Logic mệnh đề và chứng minh phản chứng", "D. Giải thuật di truyền tối ưu hóa hàm số"],
      c: 1,
      e: "Cánh tay robot kết hợp cơ học cơ thể vật lý và thuật toán điều khiển quỹ đạo di chuyển tự động."
    },
    {
      q: "Từ 'Heuristic' trong AI có nguồn gốc từ tiếng Hy Lạp mang nghĩa là gì?",
      a: ["A. Tính toán chính xác tuyệt đối", "B. Tìm ra hoặc phát hiện ra", "C. Sự tiến hóa liên tục", "D. Logic đúng sai nhị phân"],
      c: 1,
      e: "Heuristic bắt nguồn từ 'heuriskein' có nghĩa là 'tìm ra/khám phá ra', đại diện cho cách giải quyết vấn đề bằng kinh nghiệm."
    },
    {
      q: "Trong mạng ngữ nghĩa, cung nối mang nhãn 'HAS-A' dùng để chỉ quan hệ gì?",
      a: ["A. Quan hệ phân lớp, kế thừa cha con", "B. Quan hệ sở hữu thuộc tính, bộ phận", "C. Quan hệ tương đương logic toán học", "D. Quan hệ ngoại lệ phủ nhận thuộc tính"],
      c: 1,
      e: "HAS-A (has a) thể hiện quan hệ sở hữu thuộc tính/bộ phận (ví dụ: Ô tô HAS-A Bánh xe)."
    },
    {
      q: "Mô hình Frame của Marvin Minsky được thiết kế nhằm mục đích gì?",
      a: ["A. Tăng tốc độ xử lý đồ họa của màn hình máy tính", "B. Tổ chức tri thức có cấu trúc dưới dạng khung", "C. Loại bỏ các phép toán logic vị từ bậc nhất", "D. Tối ưu hóa thuật toán tìm đường đi ngắn nhất"],
      c: 1,
      e: "Frame tổ chức tri thức thành các khối có cấu trúc gồm các slots (thuộc tính) và facets (khía cạnh)."
    },
    {
      q: "Nhược điểm lớn nhất của mô hình biểu diễn tri thức bằng hệ luật sinh là gì?",
      a: ["A. Không thể lập trình được trên máy tính điện tử", "B. Khó kiểm soát tính nhất quán khi số luật quá lớn", "C. Tốn quá nhiều không gian bộ nhớ lưu trữ đĩa", "D. Không thể áp dụng cho logic mệnh đề nhị phân"],
      c: 1,
      e: "Khi số lượng luật lên tới hàng ngàn, các luật có thể mâu thuẫn, chồng chéo hoặc tạo vòng lặp suy luận vô tận rất khó quản lý."
    },
    {
      q: "Mệnh đề trong logic là một phát biểu thỏa mãn đặc trưng nào?",
      a: ["A. Phải là một câu hỏi chưa có câu trả lời rõ ràng", "B. Chỉ nhận duy nhất giá trị Đúng hoặc giá trị Sai", "C. Phải chứa ít nhất một lượng từ với mọi hoặc tồn tại", "D. Có thể thay đổi chân trị tùy thuộc cảm xúc người nói"],
      c: 1,
      e: "Mệnh đề là phát biểu khẳng định chỉ nhận một trong hai chân trị Đúng (True) hoặc Sai (False)."
    },
    {
      q: "Phép toán logic nào tương đương với phép giao của hai tập hợp?",
      a: ["A. Phép toán hội (AND - \\(\\land\\))", "B. Phép toán tuyển (OR - \\(\\lor\\))", "C. Phép kéo theo (\\(\\rightarrow\\))", "D. Phép phủ định (\\(\\neg\\))"],
      c: 0,
      e: "Phép hội logic tương ứng với phép giao trong tập hợp (cả hai phần tử cùng thuộc cả hai tập)."
    },
    {
      q: "Phép toán logic nào tương đương với phép hợp của hai tập hợp?",
      a: ["A. Phép toán hội (AND - \\(\\land\\))", "B. Phép toán tuyển (OR - \\(\\lor\\))", "C. Phép kéo theo (\\(\\rightarrow\\))", "D. Phép phủ định (\\(\\neg\\))"],
      c: 1,
      e: "Phép tuyển logic tương ứng với phép hợp trong lý thuyết tập hợp (thuộc ít nhất một trong hai tập)."
    },
    {
      q: "Skolemization là một kỹ thuật được sử dụng nhằm mục đích gì?",
      a: ["A. Khử các lượng từ tồn tại trong công thức logic", "B. Hợp nhất hai vị từ khác nhau về mặt cú pháp", "C. Đưa công thức logic mệnh đề về dạng chuẩn hội", "D. Tìm kiếm đường đi tối ưu trên đồ thị AND-OR"],
      c: 0,
      e: "Skolemization là quá trình loại bỏ lượng từ tồn tại bằng cách thay thế biến bằng hằng hoặc hàm Skolem."
    },
    {
      q: "Trong GA, nhiễm sắc thể (Chromosome) đại diện cho thành phần nào?",
      a: ["A. Giá trị của hàm thích nghi (Fitness)", "B. Chuỗi mã hóa của một phương án nghiệm", "C. Tập hợp tất cả cá thể trong một thế hệ", "D. Xác suất xảy ra đột biến gen ngẫu nhiên"],
      c: 1,
      e: "Nhiễm sắc thể là dạng mã hóa kiểu gen (genotype) của một phương án nghiệm ứng viên."
    },
    {
      q: "Mục đích cốt lõi của phép đột biến (Mutation) trong GA là gì?",
      a: ["A. Bảo tồn các cá thể tốt nhất của thế hệ trước", "B. Tạo ra các gen mới giúp tránh kẹt cực trị cục bộ", "C. Tăng tốc độ hội tụ của thuật toán tối ưu hóa", "D. Chọn lọc ra các cá thể có độ thích nghi cao nhất"],
      c: 1,
      e: "Đột biến giới thiệu các đặc tính gen mới chưa từng xuất hiện, duy trì tính đa dạng quần thể và tránh kẹt tại local optima."
    }
  ],

  // CHƯƠNG 2: GIẢI QUYẾT VẤN ĐỀ BẰNG TÌM KIẾM
  ch2: [
    {
      q: "Bài toán tìm kiếm trong AI được mô tả đầy đủ bởi bộ 5 thành phần nào?",
      a: ["A. \\(\\langle St, I, O, G, C \\rangle\\)", "B. \\(\\langle S, A, R, P, T \\rangle\\)", "C. \\(\\langle X, D, C, G, P \\rangle\\)", "D. \\(\\langle V, E, W, D, S \\rangle\\)"],
      c: 0,
      e: "Bộ mô tả bài toán gồm: State space (St), Initial state (I), Operators (O), Goal test (G), và Cost (C)."
    },
    {
      q: "Trong mô tả bài toán tìm kiếm, thành phần 'Operators' (O) dùng để chỉ điều gì?",
      a: ["A. Các trạng thái đích thỏa mãn yêu cầu", "B. Tập các hành động hợp lệ để chuyển trạng thái", "C. Tổng chi phí đường đi từ gốc tới nút hiện tại", "D. Tập các điều kiện ràng buộc các biến số"],
      c: 1,
      e: "Operators là tập các hành động/phép toán cho phép biến đổi trạng thái hiện tại thành trạng thái mới."
    },
    {
      q: "Sự khác biệt cơ bản nhất giữa Trạng thái (State) và Nút (Node) trên cây tìm kiếm là gì?",
      a: ["A. Trạng thái có nút cha còn Nút thì không có nút cha", "B. Trạng thái mô tả cấu hình; Nút lưu trữ cha, độ sâu, chi phí", "C. Mỗi nút chỉ chứa duy nhất một trạng thái không trùng lặp", "D. Trạng thái chứa thông tin chi phí thực tế g(n) tích lũy"],
      c: 1,
      e: "Trạng thái là cấu hình thực tế của bài toán. Nút là thành phần trên cây tìm kiếm, lưu trữ trạng thái, nút cha, độ sâu và chi phí g(n)."
    },
    {
      q: "Trong cây tìm kiếm, một trạng thái của bài toán có thể xuất hiện như thế nào?",
      a: ["A. Chỉ xuất hiện duy nhất tại một nút trên cây", "B. Không bao giờ xuất hiện ở bất kỳ nút nào trên cây", "C. Xuất hiện tại nhiều nút ứng với các đường đi khác nhau", "D. Xuất hiện tối đa tại hai nút thuộc cùng độ sâu"],
      c: 2,
      e: "Nhiều đường đi khác nhau dẫn đến cùng một trạng thái sẽ tạo ra nhiều nút khác nhau chứa trạng thái đó trên cây tìm kiếm."
    },
    {
      q: "Theo quy ước chung, độ sâu của nút gốc trên cây tìm kiếm bằng bao nhiêu?",
      a: ["A. Bằng 0", "B. Bằng 1", "C. Bằng -1", "D. Vô hạn"],
      c: 0,
      e: "Theo quy ước, nút gốc (chứa trạng thái ban đầu) có độ sâu bằng 0."
    },
    {
      q: "Hàm kiểm tra mục tiêu (Goal Test) thực hiện nhiệm vụ gì?",
      a: ["A. Tính toán chi phí tích lũy của lời giải", "B. Xác định nút hiện tại có phải trạng thái đích không", "C. Sinh ra các nút con từ nút hiện tại trên cây", "D. Đo đạc độ sâu của cây tìm kiếm tại nút hiện tại"],
      c: 1,
      e: "Goal Test nhận vào một trạng thái và trả về True/False xác nhận xem trạng thái đó đạt mục tiêu chưa."
    },
    {
      q: "Chi phí đường đi của cả lời giải được tính bằng công thức nào?",
      a: ["A. Lấy chi phí của hành động lớn nhất", "B. Tổng chi phí các hành động đơn lẻ trên đường đi", "C. Tính trung bình cộng chi phí các bước đi", "D. Lấy độ sâu d nhân với hệ số phân nhánh b"],
      c: 1,
      e: "Chi phí đường đi là tổng chi phí tích lũy của từng hành động thành phần."
    },
    {
      q: "Tìm kiếm mù (Uninformed Search) có đặc điểm nổi bật nào sau đây?",
      a: ["A. Sử dụng hàm Heuristic h(n) để ước lượng", "B. Chỉ sử dụng thông tin bài toán để duyệt tuần tự", "C. Luôn tìm thấy lời giải tối ưu nhanh nhất", "D. Không cần dùng hàng đợi hoặc ngăn xếp để lưu"],
      c: 1,
      e: "Tìm kiếm mù chỉ duyệt theo luật cấu trúc cây/đồ thị dựa trên thông tin bài toán, không có hàm ước lượng khoảng cách tới đích."
    },
    {
      q: "Thuật toán tìm kiếm theo chiều rộng (BFS) sử dụng cấu trúc dữ liệu nào?",
      a: ["A. Ngăn xếp Stack (vào sau ra trước)", "B. Hàng đợi Queue (vào trước ra trước)", "C. Hàng đợi ưu tiên (Priority Queue)", "D. Bảng băm động (Hash Table)"],
      c: 1,
      e: "BFS dùng Queue (hàng đợi FIFO) để đảm bảo duyệt hết các nút ở độ sâu nông trước khi đi xuống sâu hơn."
    },
    {
      q: "Thuật toán tìm kiếm theo chiều sâu (DFS) sử dụng cấu trúc dữ liệu nào?",
      a: ["A. Hàng đợi Queue (vào trước ra trước)", "B. Ngăn xếp Stack (vào sau ra trước)", "C. Hàng đợi ưu tiên (Priority Queue)", "D. Danh sách liên kết kép tuần hoàn"],
      c: 1,
      e: "DFS dùng Stack (ngăn xếp LIFO) hoặc đệ quy để luôn mở rộng nút sâu nhất trên nhánh hiện tại."
    },
    {
      q: "Độ phức tạp không gian (bộ nhớ RAM) của BFS là bao nhiêu?",
      a: ["A. \\(O(b \\times d)\\)", "B. \\(O(b^d)\\)", "C. \\(O(d^b)\\)", "D. \\(O(b \\times m)\\)"],
      c: 1,
      e: "BFS phải lưu trữ toàn bộ các nút trên cây tìm kiếm trong bộ nhớ, độ phức tạp không gian là O(b^d)."
    },
    {
      q: "Độ phức tạp không gian của DFS (m là độ sâu tối đa, b là hệ số phân nhánh)?",
      a: ["A. \\(O(b^m)\\)", "B. \\(O(b \\times m)\\)", "C. \\(O(m^b)\\)", "D. \\(O(d)\\)"],
      c: 1,
      e: "DFS chỉ cần lưu trữ các nút dọc theo đường đi hiện hành và các nút anh em của chúng, độ phức tạp không gian rất tiết kiệm: O(b * m)."
    },
    {
      q: "Nhược điểm lớn nhất của tìm kiếm theo chiều rộng (BFS) là gì?",
      a: ["A. Không đảm bảo tính đầy đủ của lời giải", "B. Chi phí bộ nhớ lớn bùng nổ theo hàm mũ O(b^d)", "C. Rất dễ bị kẹt trong các vòng lặp vô hạn", "D. Luôn đưa ra đường đi có chi phí tồi nhất"],
      c: 1,
      e: "Do phải lưu toàn bộ các nút biên ở các tầng đã qua, bộ nhớ của BFS tăng theo hàm mũ O(b^d)."
    },
    {
      q: "Nhược điểm lớn nhất của tìm kiếm theo chiều sâu (DFS) là gì?",
      a: ["A. Bộ nhớ RAM yêu cầu quá khổng lồ", "B. Dễ kẹt nhánh vô hạn và không đảm bảo tối ưu", "C. Thuật toán có lập trình cực kỳ phức tạp", "D. Không thể áp dụng trên không gian hữu hạn"],
      c: 1,
      e: "DFS đi sâu hết mức trên một nhánh, nếu nhánh đó vô hạn, thuật toán sẽ kẹt mãi mãi (mất tính đầy đủ) và không tối ưu."
    },
    {
      q: "Trong điều kiện chi phí các cạnh bằng nhau, BFS có đảm bảo tối ưu không?",
      a: ["A. Không bao giờ đảm bảo tính tối ưu", "B. Có, luôn tìm thấy lời giải có ít bước nhất", "C. Chỉ đúng khi hệ số phân nhánh b bằng 1", "D. Kết quả phụ thuộc hoàn toàn vào Stack"],
      c: 1,
      e: "Nếu chi phí mọi bước đi bằng nhau, BFS luôn tìm thấy đích ở độ sâu nhỏ nhất đầu tiên nên đạt tối ưu."
    },
    {
      q: "Thuật toán Tìm kiếm giới hạn độ sâu (DLS) khắc phục nhược điểm nào của DFS?",
      a: ["A. Giảm chi phí bộ nhớ xuống hằng số", "B. Tránh kẹt nhánh vô hạn nhờ giới hạn độ sâu L", "C. Tăng tốc độ duyệt song song trên CPU", "D. Tự động sinh ra hàm Heuristic hợp lý"],
      c: 1,
      e: "DLS áp đặt độ sâu tối đa L, không cho phép duyệt sâu hơn L để tránh các nhánh vô hạn."
    },
    {
      q: "Thuật toán Tìm kiếm sâu dần (IDDFS) hoạt động như thế nào?",
      a: ["A. Duyệt BFS trước rồi chuyển sang DFS", "B. Lặp DLS với giới hạn độ sâu L tăng dần từ 0", "C. Luôn đi chéo trên cây tìm kiếm đồ thị", "D. Duyệt ngẫu nhiên các nút trên cây tìm kiếm"],
      c: 1,
      e: "IDDFS tăng dần giới hạn độ sâu L và thực hiện DLS tại mỗi lượt lặp."
    },
    {
      q: "Tại sao IDDFS được đánh giá là sự kết hợp ưu điểm của BFS và DFS?",
      a: ["A. Vì nó chạy nhanh hơn cả hai cộng lại", "B. Bộ nhớ nhỏ của DFS và tính tối ưu của BFS", "C. Vì nó không cần dùng cấu trúc lưu trữ nút", "D. Vì nó tự động khử trùng lặp trạng thái"],
      c: 1,
      e: "IDDFS dùng bộ nhớ O(b*d) của DFS nhưng đảm bảo tìm thấy lời giải nông nhất (tối ưu) của BFS."
    },
    {
      q: "Độ phức tạp thời gian của IDDFS so với BFS như thế nào?",
      a: ["A. IDDFS luôn nhanh hơn BFS gấp nhiều lần", "B. Tương đương nhau về mặt tiệm cận \\(O(b^d)\\)", "C. IDDFS chậm hơn vô hạn lần do tính lặp", "D. IDDFS có độ phức tạp thời gian là O(d)"],
      c: 1,
      e: "Mặc dù IDDFS tính lại các nút tầng trên, tổng số nút duyệt vẫn ở cùng cấp độ lũy thừa O(b^d) vì số nút chủ yếu tập trung ở tầng đáy."
    },
    {
      q: "Thuật toán Uniform Cost Search (UCS) mở rộng nút dựa trên nguyên tắc nào?",
      a: ["A. Nút sâu nhất trên cây tìm kiếm hiện tại", "B. Nút có tổng chi phí g(n) từ gốc nhỏ nhất", "C. Nút gần đích nhất theo hàm phán đoán", "D. Nút được sinh ra muộn nhất trên cây"],
      c: 1,
      e: "UCS ưu tiên mở rộng nút có chi phí tích lũy g(n) thấp nhất."
    },
    {
      q: "UCS sử dụng cấu trúc dữ liệu nào để quản lý các nút biên?",
      a: ["A. Ngăn xếp Stack thông thường", "B. Hàng đợi ưu tiên xếp theo g(n) tăng dần", "C. Hàng đợi Queue FIFO thông thường", "D. Cây tìm kiếm nhị phân cân bằng"],
      c: 1,
      e: "Priority Queue giúp UCS dễ dàng lấy ra nút có g(n) nhỏ nhất ở đầu hàng đợi."
    },
    {
      q: "Giải thuật UCS tương đương với thuật toán tìm đường đi ngắn nhất nào?",
      a: ["A. Thuật toán Prim tìm cây khung", "B. Thuật toán Kruskal tìm cây khung", "C. Thuật toán Dijkstra tìm đường đi ngắn nhất", "D. Thuật toán Bellman-Ford tìm đường đi"],
      c: 2,
      e: "UCS tìm đường đi ngắn nhất trên đồ thị có trọng số dương, tương đương thuật toán Dijkstra."
    },
    {
      q: "Điều kiện cần thiết của chi phí bước đi để UCS đạt tối ưu và đầy đủ là gì?",
      a: ["A. Chi phí các cạnh phải luôn bằng 1", "B. Chi phí các cạnh phải lớn hơn hằng số dương \\(\\epsilon\\)", "C. Chi phí các cạnh có thể nhận giá trị âm", "D. Chi phí phải tăng theo cấp số nhân"],
      c: 1,
      e: "Nếu chi phí bước đi có thể bằng 0 hoặc âm, thuật toán có thể rơi vào vòng lặp vô hạn chi phí không tăng."
    },
    {
      q: "Tìm kiếm hai chiều (Bidirectional Search) hoạt động như thế nào?",
      a: ["A. Chạy song song hai thuật toán BFS trên máy", "B. Tìm kiếm đồng thời từ gốc và đích gặp nhau", "C. Tìm kiếm từ trái sang phải và ngược lại", "D. Vừa thực hiện tìm kiếm vừa xóa bớt nút"],
      c: 1,
      e: "Tìm kiếm hai chiều xuất phát từ cả hai đầu (Start và Goal) để thu nhỏ chiều sâu duyệt của mỗi phía xuống d/2."
    },
    {
      q: "Độ phức tạp thời gian của Tìm kiếm hai chiều là bao nhiêu?",
      a: ["A. \\(O(b^d)\\)", "B. \\(O(b^{d/2})\\)", "C. \\(O(b \\times d)\\)", "D. \\(O(2^b)\\)"],
      c: 1,
      e: "Nhờ gặp nhau ở giữa, độ phức tạp giảm xuống mức O(b^(d/2)), tiết kiệm thời gian đáng kể."
    },
    {
      q: "Hạn chế lớn nhất của Tìm kiếm hai chiều là gì?",
      a: ["A. Không thể tìm ra lời giải của bài toán", "B. Phải có đích cụ thể và đi ngược được", "C. Tốn RAM hơn BFS gấp nhiều lần", "D. Không chạy được trên cấu trúc đồ thị"],
      c: 1,
      e: "Nếu đích là một tập mập mờ (Goal Test dạng logic), ta không thể biết xuất phát ngược từ đâu."
    },
    {
      q: "Khi chi phí thực hiện các hành động khác nhau, ta nên chọn giải thuật nào?",
      a: ["A. Thuật toán tìm kiếm theo chiều rộng BFS", "B. Thuật toán tìm kiếm theo chiều sâu DFS", "C. Thuật toán tìm kiếm chi phí đồng nhất UCS", "D. Thuật toán tìm kiếm giới hạn độ sâu DLS"],
      c: 2,
      e: "UCS là giải thuật duy nhất trong nhóm tìm kiếm mù đảm bảo tối ưu khi chi phí các cạnh khác nhau."
    },
    {
      q: "Tiêu chí 'Completeness' (Tính đầy đủ) của giải thuật tìm kiếm nghĩa là gì?",
      a: ["A. Tìm được lời giải trong thời gian nhanh nhất", "B. Đảm bảo tìm thấy lời giải nếu nó tồn tại", "C. Tiết kiệm không gian bộ nhớ RAM tối đa", "D. Lời giải tìm được có chi phí tối thiểu"],
      c: 1,
      e: "Completeness nghĩa là thuật toán chắc chắn không bỏ sót lời giải nếu nó tồn tại."
    },
    {
      q: "Trong bài toán đong nước (9L và 4L đong 6L), trạng thái đầu biểu diễn thế nào?",
      a: ["A. Biểu diễn dưới dạng cấu hình (9, 4)", "B. Biểu diễn dưới dạng cấu hình (0, 0)", "C. Biểu diễn dưới dạng cấu hình (6, 0)", "D. Biểu diễn dưới dạng cấu hình (x, y) bất kỳ"],
      c: 1,
      e: "Trạng thái bắt đầu là cả hai bình đều rỗng: (0, 0)."
    },
    {
      q: "Tại sao DFS có ưu thế bộ nhớ vượt trội so với BFS?",
      a: ["A. Do DFS chạy nhanh hơn rất nhiều", "B. Do DFS chỉ lưu các nút trên nhánh đang duyệt", "C. Do DFS sử dụng hàng đợi ưu tiên", "D. Do DFS không thực hiện mở rộng nút con"],
      c: 1,
      e: "DFS chỉ giữ lại các nút trên đường đi hiện tại và các nút con chưa duyệt của chúng, bộ nhớ tăng tuyến tính thay vì lũy thừa."
    },
    {
      q: "Hệ số phân nhánh (branching factor - b) của cây tìm kiếm là gì?",
      a: ["A. Chiều sâu tối đa của cây tìm kiếm", "B. Số nút con trung bình sinh ra khi mở một nút", "C. Tổng số bước đi tối đa của lời giải", "D. Tổng số trạng thái khả dĩ của bài toán"],
      c: 1,
      e: "Branching factor b phản ánh số nhánh rẽ trung bình từ một nút cha."
    },
    {
      q: "Đại lượng g(n) trong bài toán tìm đường giữa các thành phố là gì?",
      a: ["A. Khoảng cách địa lý từ thành phố hiện tại tới đích", "B. Tổng quãng đường thực tế đã đi từ điểm xuất phát", "C. Tổng số lượng thành phố có trên bản đồ hành trình", "D. Số lượng ngã rẽ thực tế đã gặp trên đường đi"],
      c: 1,
      e: "g(n) là tổng độ dài quãng đường thực tế đã đi từ điểm xuất phát đến thành phố n."
    },
    {
      q: "DLS có đầy đủ không nếu giới hạn L nhỏ hơn độ sâu d của lời giải?",
      a: ["A. Có đảm bảo đầy đủ", "B. Không đảm bảo đầy đủ", "C. Chỉ khi b bằng 2", "D. Phụ thuộc vào RAM"],
      c: 1,
      e: "Nếu L < d, lời giải nằm ngoài tầm duyệt của DLS nên giải thuật sẽ dừng mà không tìm thấy lời giải."
    },
    {
      q: "Phát biểu nào sau đây đúng về thuật toán UCS?",
      a: ["A. UCS hoạt động tương tự DFS", "B. UCS tương đương BFS nếu chi phí các bước bằng nhau", "C. UCS không đảm bảo tính tối ưu", "D. UCS sử dụng Stack để quản lý các nút biên"],
      c: 1,
      e: "Nếu mọi cạnh có chi phí bằng nhau (ví dụ = 1), UCS mở rộng theo tầng tương tự BFS."
    },
    {
      q: "Thế nào là một cực trị cục bộ (Local Optima) trong bài toán tìm kiếm?",
      a: ["A. Nút gốc bắt đầu của cây", "B. Tốt hơn lân cận nhưng chưa tối ưu toàn cục", "C. Trạng thái đích của bài toán", "D. Nút lá sâu nhất trên cây"],
      c: 1,
      e: "Local Optima là đỉnh cục bộ, tốt hơn xung quanh nhưng chưa phải tốt nhất toàn bộ."
    },
    {
      q: "Trong bài toán 8-Puzzle, đích đến được kiểm tra bằng thành phần nào?",
      a: ["A. Trạng thái ban đầu I", "B. Hàm kiểm tra mục tiêu G", "C. Các phép toán chuyển ô O", "D. Hàm chi phí g(n) C"],
      c: 1,
      e: "Goal Test kiểm tra xem cấu hình bàn cờ hiện tại có trùng khớp với cấu hình đích quy định không."
    },
    {
      q: "BFS có đầy đủ không nếu hệ số phân nhánh b của cây tìm kiếm vô hạn?",
      a: ["A. Có đảm bảo đầy đủ", "B. Không đảm bảo đầy đủ", "C. Chỉ khi sử dụng Stack", "D. Phụ thuộc vào hàm chi phí"],
      c: 1,
      e: "Nếu b vô hạn, hàng đợi ở ngay tầng 1 sẽ dài vô tận, BFS không bao giờ đi xuống được tầng 2 (mất tính đầy đủ)."
    },
    {
      q: "Quy tắc hoạt động của cấu trúc dữ liệu ngăn xếp Stack là gì?",
      a: ["A. Vào trước ra trước (FIFO)", "B. Vào sau ra trước (LIFO)", "C. Lấy ra ngẫu nhiên hoàn toàn", "D. Ưu tiên nút có chi phí thấp"],
      c: 1,
      e: "LIFO nghĩa là phần tử mới nhất được đưa vào ngăn xếp sẽ được lấy ra xử lý trước."
    },
    {
      q: "Trong bài toán đong nước, trút nước từ bình 9L sang bình 4L đang có 1L thì bình 4L chứa bao nhiêu?",
      a: ["A. Chứa đầy 9L nước", "B. Chứa đầy 4L nước", "C. Chứa đúng 3L nước", "D. Chứa đúng 1L nước"],
      c: 1,
      e: "Bình B nhận thêm lượng nước là 4 - 1 = 3L và đạt dung tích đầy 4L."
    },
    {
      q: "Cấu trúc dữ liệu chính dùng để lưu biên trong DFS là gì?",
      a: ["A. Hàng đợi FIFO", "B. Ngăn xếp LIFO", "C. Hàng đợi ưu tiên", "D. Bảng băm động"],
      c: 1,
      e: "DFS dựa trên nguyên lý vào sau ra trước của Stack."
    },
    {
      q: "Độ phức tạp bộ nhớ của thuật toán tìm kiếm sâu dần IDDFS là bao nhiêu?",
      a: ["A. \\(O(b^d)\\)", "B. \\(O(b \\times d)\\)", "C. \\(O(d^b)\\)", "D. \\(O(1)\\)"],
      c: 1,
      e: "IDDFS dùng DFS tại mỗi bước lặp nên chỉ tốn bộ nhớ tuyến tính O(b * d) với d là độ sâu đích."
    },
    {
      q: "Khi nào ta nên ưu tiên chọn thuật toán DFS thay vì BFS?",
      a: ["A. Bộ nhớ RAM hạn chế và không có nhánh vô hạn", "B. Khi cần tìm lời giải có số bước đi ít nhất", "C. Khi hệ số phân nhánh b của cây tìm kiếm lớn", "D. Khi chi phí thực hiện các cạnh khác nhau"],
      c: 0,
      e: "DFS cực kỳ tiết kiệm bộ nhớ nên thích hợp khi RAM ít, miễn là không gian hữu hạn để tránh kẹt."
    },
    {
      q: "Trong bài toán người đi du lịch (TSP), trạng thái biểu diễn gì?",
      a: ["A. Số lượng thành phố", "B. Danh sách các thành phố đã ghé thăm", "C. Tổng quãng đường đã đi", "D. Bản đồ giao thông khu vực"],
      c: 1,
      e: "Trạng thái của TSP phản ánh hành trình: danh sách các thành phố đã ghé thăm."
    },
    {
      q: "Nếu không có lời giải, BFS sẽ kết thúc khi nào trên đồ thị hữu hạn?",
      a: ["A. Chạy vô hạn không dừng", "B. Khi hàng đợi Queue trống rỗng", "C. Khi bộ nhớ RAM bị tràn", "D. Khi đạt độ sâu giới hạn"],
      c: 1,
      e: "Nếu duyệt hết mọi nút khả dĩ mà không có đích, Queue sẽ cạn và thuật toán dừng báo thất bại."
    },
    {
      q: "Khái niệm 'Backtracking' (Quay lui) trong DFS có ý nghĩa gì?",
      a: ["A. Quay lại gốc để bắt đầu", "B. Lùi lại nút cha để rẽ nhánh khác", "C. Duyệt ngược từ đích về gốc", "D. Tăng giới hạn độ sâu duyệt"],
      c: 1,
      e: "Quay lui là cơ chế rút lui khỏi ngõ cụt để thử nghiệm các lựa chọn thay thế khác."
    },
    {
      q: "Nếu đồ thị có cạnh trọng số âm, giải thuật UCS có bảo đảm tối ưu không?",
      a: ["A. Có đảm bảo tối ưu", "B. Không đảm bảo tối ưu", "C. Chỉ khi b bằng 2", "D. Có nếu sử dụng Queue"],
      c: 1,
      e: "Chi phí âm vi phạm giả định của UCS (Dijkstra), khiến việc mở rộng nút có chi phí nhỏ nhất trước không còn đảm bảo tìm được đường ngắn nhất."
    },
    {
      q: "Sự khác biệt cốt lõi giữa cây tìm kiếm và đồ thị trạng thái là gì?",
      a: ["A. Cây tìm kiếm không chứa vòng lặp còn đồ thị có thể chứa", "B. Đồ thị trạng thái phân cấp rõ ràng hơn cây tìm kiếm", "C. Cây tìm kiếm tốn bộ nhớ hơn đồ thị trạng thái tương ứng", "D. Hai cấu trúc này hoàn toàn tương đương không có khác biệt"],
      c: 0,
      e: "Đồ thị biểu diễn quan hệ thực tế có thể quay vòng, cây tìm kiếm mở rộng đồ thị thành cấu trúc phân nhánh không chu trình."
    },
    {
      q: "Tham số độ sâu d của đích ảnh hưởng thế nào đến độ phức tạp BFS?",
      a: ["A. Ảnh hưởng tuyến tính", "B. Ảnh hưởng theo hàm mũ", "C. Không có ảnh hưởng nào", "D. Ảnh hưởng theo logarit"],
      c: 1,
      e: "Độ phức tạp BFS tăng theo lũy thừa của độ sâu d: O(b^d)."
    },
    {
      q: "Nguyên tắc LIFO của Stack hoạt động theo cơ chế nào?",
      a: ["A. Vào trước ra trước", "B. Vào sau ra trước", "C. Ra vào ngẫu nhiên", "D. Ưu tiên chi phí nhỏ"],
      c: 1,
      e: "Stack là ngăn xếp hoạt động theo cơ chế LIFO (Last In, First Out)."
    },
    {
      q: "Hàm đánh giá trong thuật toán UCS phụ thuộc vào đại lượng nào?",
      a: ["A. h(n)", "B. g(n)", "C. g(n) + h(n)", "D. Độ sâu của nút n"],
      c: 1,
      e: "UCS chỉ đánh giá dựa trên g(n) - chi phí thực tế tích lũy từ gốc."
    },
    {
      q: "Trong UCS, đích đến được kiểm tra tại thời điểm nào để bảo đảm tối ưu?",
      a: ["A. Ngay khi nút được sinh ra", "B. Khi nút được lấy ra để mở rộng", "C. Khi bắt đầu khởi tạo biên", "D. Tại bất kỳ thời điểm nào"],
      c: 1,
      e: "Để đảm bảo tối ưu, UCS chỉ kiểm tra đích khi nút được lấy ra để mở rộng, tránh trường hợp có đường đi khác rẻ hơn tới nút đó được tìm thấy sau."
    }
  ],

  // CHƯƠNG 3: CÁC KỸ THUẬT TÌM KIẾM HEURISTIC
  ch3: [
    {
      q: "Ý tưởng cốt lõi của việc sử dụng hàm Heuristic là gì?",
      a: ["A. Duyệt ngẫu nhiên không gian trạng thái", "B. Dùng tri thức ước lượng khoảng cách tới đích", "C. Tính toán chính xác 100% chi phí đường đi", "D. Luôn chọn đường đi dài nhất để đi thử"],
      c: 1,
      e: "Heuristic ước lượng chi phí còn lại từ nút hiện tại đến đích nhằm định hướng tìm kiếm thông minh."
    },
    {
      q: "Ký hiệu h(n) trong tìm kiếm Heuristic đại diện cho đại lượng nào?",
      a: ["A. Chi phí thực tế đã đi từ gốc đến n", "B. Chi phí ước lượng từ n tới đích", "C. Tổng chi phí dự kiến đi qua n", "D. Số lượng nút con hiện tại của n"],
      c: 1,
      e: "h(n) là heuristic function, đo đạc khoảng cách ước lượng từ n đến đích."
    },
    {
      q: "Trong thuật toán A*, hàm đánh giá f(n) được tính bằng công thức nào?",
      a: ["A. \\(f(n) = h(n)\\)", "B. \\(f(n) = g(n) + h(n)\\)", "C. \\(f(n) = g(n)\\)", "D. \\(f(n) = g(n) \\times h(n)\\)"],
      c: 1,
      e: "A* kết hợp chi phí thực tế g(n) và chi phí ước lượng h(n): f(n) = g(n) + h(n)."
    },
    {
      q: "Đại lượng g(n) trong công thức A* có ý nghĩa gì?",
      a: ["A. Chi phí ước lượng còn lại để đạt đích", "B. Chi phí thực tế đã đi từ gốc đến nút n", "C. Tổng chi phí dự kiến qua nút hiện tại", "D. Số bước đi tối đa quy định của bài toán"],
      c: 1,
      e: "g(n) là chi phí thực tế tích lũy từ trạng thái bắt đầu tới nút hiện tại n."
    },
    {
      q: "Đại lượng f(n) trong A* thể hiện điều gì?",
      a: ["A. Chi phí của bước đi kế tiếp kề nút n", "B. Tổng chi phí dự kiến của lời giải đi qua n", "C. Độ thích nghi của cá thể trong nhiễm sắc thể", "D. Giới hạn độ sâu tối đa của cây tìm kiếm"],
      c: 1,
      e: "f(n) là ước lượng tổng chi phí của toàn bộ hành trình đi từ gốc đến đích đi ngang qua n."
    },
    {
      q: "Heuristic 'Misplaced Tiles' (h1) trong 8-Puzzle được tính thế nào?",
      a: ["A. Tính tổng khoảng cách di chuyển của các ô", "B. Đếm số lượng ô nằm sai vị trí so với đích", "C. Đếm số lượng ô trống hiện tại trên bàn cờ", "D. Tính thời gian dịch chuyển các ô về đích"],
      c: 1,
      e: "h1(n) đơn giản là đếm xem có bao nhiêu ô số chưa nằm đúng ô quy định."
    },
    {
      q: "Công thức tính khoảng cách Manhattan (h2) trong 8-Puzzle là gì?",
      a: ["A. \\(h_2(n) = \\sum (|x_1 - x_2| + |y_1 - y_2|)\\)", "B. \\(h_2(n) = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}\\)", "C. \\(h_2(n) = \\max(|x_1-x_2|, |y_1-y_2|)\\)", "D. \\(h_2(n) = |x_1 - x_2| \\times |y_1 - y_2|\\)"],
      c: 0,
      e: "Khoảng cách Manhattan là tổng khoảng cách dịch chuyển ngang và dọc của các ô số về vị trí đúng."
    },
    {
      q: "So sánh hai Heuristic h1 (ô sai vị trí) và h2 (Manhattan) trong 8-Puzzle:",
      a: ["A. h1 tốt hơn h2", "B. h2 tốt hơn h1 vì thông tin ước lượng chính xác hơn", "C. Cả hai cho kết quả giống hệt nhau", "D. h1 tốn ít RAM hơn h2 gấp 10 lần"],
      c: 1,
      e: "Manhattan Distance (h2) chứa nhiều tri thức hơn về khoảng cách thực tế nên hiệu quả hơn misplaced tiles."
    },
    {
      q: "Thuật toán leo đồi (Hill Climbing) thuộc nhóm thuật toán nào?",
      a: ["A. Tìm kiếm toàn cục", "B. Tìm kiếm cục bộ (Local Search)", "C. Tìm kiếm mù", "D. Tìm kiếm hai chiều"],
      c: 1,
      e: "Leo đồi chỉ đánh giá các trạng thái lân cận hiện tại để đi lên, thuộc nhóm Local Search."
    },
    {
      q: "Đặc điểm nổi bật của thuật toán leo đồi là gì?",
      a: ["A. Lưu toàn bộ các nút trên cây", "B. Không lưu lại các trạng thái đã qua và không quay lui", "C. Luôn tìm thấy đỉnh cao nhất toàn cục", "D. Sử dụng hàng đợi FIFO"],
      c: 1,
      e: "Leo đồi hoạt động cực kỳ tiết kiệm bộ nhớ vì chỉ giữ trạng thái hiện tại và nhảy sang trạng thái tốt hơn kề bên."
    },
    {
      q: "Lỗi 'Local Maximum' (Cực đại cục bộ) của thuật toán leo đồi là gì?",
      a: ["A. Nút gốc của cây", "B. Đỉnh tốt hơn xung quanh nhưng chưa tối ưu toàn cục", "C. Vùng đất bằng phẳng", "D. Điểm xuất phát của thuật toán"],
      c: 1,
      e: "Cực đại cục bộ làm thuật toán dừng lại vì mọi hướng đi xung quanh đều dẫn xuống dưới, dù chưa đạt tối ưu toàn cục."
    },
    {
      q: "Vấn đề 'Plateau' (Bình nguyên) trong leo đồi chỉ tình huống nào?",
      a: ["A. Con đường đi lên quá dốc", "B. Vùng phẳng mà mọi nút lân cận có heuristic bằng nhau", "C. Cây tìm kiếm bị rỗng", "D. Đỉnh núi cao nhất"],
      c: 1,
      e: "Trên bình nguyên, mọi hướng đi đều cho giá trị đánh giá như nhau, khiến giải thuật mất phương hướng."
    },
    {
      q: "Làm thế nào để khắc phục hiện tượng kẹt cực đại cục bộ trong leo đồi?",
      a: ["A. Sử dụng leo đồi khởi động lại ngẫu nhiên (Random Restart)", "B. Tăng kích thước bộ nhớ", "C. Chuyển sang dùng BFS", "D. Không thể khắc phục"],
      c: 0,
      e: "Khởi động lại ngẫu nhiên từ nhiều điểm xuất phát khác nhau giúp tăng cơ hội tìm thấy đỉnh toàn cục."
    },
    {
      q: "Hàm đánh giá của thuật toán Tìm kiếm tham lam (Greedy Best-First Search) là gì?",
      a: ["A. \\(f(n) = g(n)\\)", "B. \\(f(n) = h(n)\\)", "C. \\(f(n) = g(n) + h(n)\\)", "D. \\(f(n) = g(n) - h(n)\\)"],
      c: 1,
      e: "Greedy Best-First chỉ quan tâm đến h(n) - khoảng cách ước lượng đến đích tại mỗi bước."
    },
    {
      q: "Greedy Best-First Search có đảm bảo tìm thấy lời giải tối ưu không?",
      a: ["A. Có", "B. Không", "C. Chỉ khi h(n) = 0", "D. Có nếu dùng Stack"],
      c: 1,
      e: "Do hoàn toàn bỏ qua chi phí đã đi g(n), Greedy Search có thể chọn đường đi rất đắt đỏ trông có vẻ gần đích."
    },
    {
      q: "Thế nào là một hàm Heuristic hợp lệ (Admissible Heuristic) trong A*?",
      a: ["A. Hàm h(n) không vượt quá chi phí thực tế tối thiểu đến đích", "B. Hàm h(n) luôn bằng 0", "C. Hàm h(n) phải lớn hơn g(n)", "D. Hàm h(n) tính toán mất nhiều thời gian"],
      c: 0,
      e: "Heuristic hợp lệ (admissible) đảm bảo luôn đánh giá dưới hoặc bằng chi phí thực (\(h(n) \le h^*(n)\)) để không bỏ sót đường tốt hơn."
    },
    {
      q: "Nếu hàm Heuristic h(n) là admissible, thuật toán A* có tính chất gì?",
      a: ["A. Chạy nhanh nhất", "B. Đảm bảo tìm thấy lời giải tối ưu", "C. Không tốn bộ nhớ", "D. Tương đương với DFS"],
      c: 1,
      e: "Admissible heuristic là điều kiện cần và đủ để A* tìm được lời giải tối ưu trên cây/đồ thị."
    },
    {
      q: "Nếu h(n) luôn bằng 0 với mọi n, thuật toán A* sẽ trở thành thuật toán nào?",
      a: ["A. DFS", "B. UCS (Uniform Cost Search)", "C. Greedy Best-First Search", "D. Leo đồi"],
      c: 1,
      e: "Khi h(n) = 0, công thức f(n) = g(n) + h(n) trở thành f(n) = g(n), chính là giải thuật UCS."
    },
    {
      q: "Hạn chế lớn nhất của thuật toán A* là gì?",
      a: ["A. Không tối ưu", "B. Yêu cầu chi phí RAM lớn để lưu danh sách OPEN", "C. Dễ bị kẹt trong vòng lặp", "D. Không có tính đầy đủ"],
      c: 1,
      e: "A* phải lưu trữ các nút biên để sẵn sàng quay lại mở rộng đường đi tốt hơn, gây tốn RAM ở các bài toán lớn."
    },
    {
      q: "Trong đồ thị AND-OR, nút OR đại diện cho điều gì?",
      a: ["A. Phải giải quyết toàn bộ các nút con", "B. Chỉ cần giải quyết thành công ít nhất một nút con", "C. Nút không có con", "D. Ràng buộc toán học bằng nhau"],
      c: 1,
      e: "Nút OR thể hiện các lựa chọn thay thế (Alternative), chỉ cần một lựa chọn thành công."
    },
    {
      q: "Trong đồ thị AND-OR, nút AND đại diện cho điều gì?",
      a: ["A. Chỉ cần giải quyết 1 nút con", "B. Bắt buộc phải giải quyết toàn bộ các nút con", "C. Phép phủ định logic", "D. Nút lá của đồ thị"],
      c: 1,
      e: "Nút AND thể hiện sự phân rã bắt buộc, mọi nhánh con đều phải được hoàn thành."
    },
    {
      q: "Mô hình bài toán thỏa mãn ràng buộc (CSP) gồm bộ ba thành phần nào?",
      a: ["A. \\(\\langle X, D, C \\rangle\\)", "B. \\(\\langle St, I, O \\rangle\\)", "C. \\(\\langle V, E, W \\rangle\\)", "D. \\(\\langle P, Q, R \\rangle\\)"],
      c: 0,
      e: "CSP được mô tả bởi bộ: X (biến), D (miền giá trị), và C (ràng buộc)."
    },
    {
      q: "Trong CSP, 'Constraint Propagation' (Lan truyền ràng buộc) có vai trò gì?",
      a: ["A. Tăng thêm số biến cần giải", "B. Dùng ràng buộc thu hẹp miền giá trị biến để giảm nhánh lỗi", "C. Sinh ngẫu nhiên các giá trị", "D. Đảo ngược miền giá trị"],
      c: 1,
      e: "Lan truyền ràng buộc giúp phát hiện sớm các cấu hình không thỏa mãn để loại bỏ nhánh tìm kiếm từ đầu."
    },
    {
      q: "Bài toán Cryptarithmetic (ví dụ: SEND + MORE = MONEY) là một ứng dụng của mô hình nào?",
      a: ["A. A* Search", "B. Thỏa mãn ràng buộc (CSP)", "C. Minimax", "D. Leo đồi"],
      c: 1,
      e: "Cryptarithmetic là bài toán CSP điển hình với biến là các chữ cái, miền giá trị từ 0-9, và các ràng buộc phép cộng."
    },
    {
      q: "Tìm kiếm đối kháng (Adversarial Search) thường áp dụng cho môi trường nào?",
      a: ["A. Tìm đường trên bản đồ đơn độc", "B. Trò chơi có đối thủ cạnh tranh (Zero-sum games)", "C. Bài toán đong nước", "D. Tối ưu hóa danh mục tài chính"],
      c: 1,
      e: "Tìm kiếm đối kháng xử lý môi trường mà hành động của ta bị phản ứng ngược lại bởi đối thủ."
    },
    {
      q: "Trong thuật toán Minimax, người chơi MAX có mục tiêu gì?",
      a: ["A. Tối thiểu hóa điểm số của đối thủ", "B. Tối đa hóa điểm số của mình ở trạng thái đích", "C. Duyệt cây nhanh nhất", "D. Đưa quân cờ đi xa nhất"],
      c: 1,
      e: "MAX cố gắng chọn nước đi dẫn tới điểm số lớn nhất cho mình."
    },
    {
      q: "Trong thuật toán Minimax, người chơi MIN có mục tiêu gì?",
      a: ["A. Tối đa hóa điểm số của MAX", "B. Tối thiểu hóa điểm số của người chơi MAX", "C. Đầu hàng nhanh nhất", "D. Tạo ra nhiều nút con nhất"],
      c: 1,
      e: "MIN đóng vai đối thủ, luôn chọn nước đi có lợi cho mình tức là làm giảm tối đa điểm số của MAX."
    },
    {
      q: "Tại nút thuộc tầng của người chơi MIN trên cây trò chơi, giá trị Minimax được tính như thế nào?",
      a: ["A. \\(\\text{Value}(n) = \\max(\\text{children})\\)", "B. \\(\\text{Value}(n) = \\min(\\text{children})\\)", "C. Lấy trung bình cộng các con", "D. Lấy ngẫu nhiên một con"],
      c: 1,
      e: "Tầng MIN chọn giá trị nhỏ nhất của các nút con."
    },
    {
      q: "Tại nút thuộc tầng của người chơi MAX trên cây trò chơi, giá trị được tính thế nào?",
      a: ["A. \\(\\text{Value}(n) = \\min(\\text{children})\\)", "B. \\(\\text{Value}(n) = \\max(\\text{children})\\)", "C. Tổng giá trị các con", "D. Lấy hiệu số"],
      c: 1,
      e: "Tầng MAX chọn giá trị lớn nhất trong số các nút con."
    },
    {
      q: "Kỹ thuật cắt tỉa Alpha-Beta (Alpha-Beta Pruning) giúp cải tiến Minimax ở điểm nào?",
      a: ["A. Thay đổi kết quả nước đi tối ưu", "B. Bỏ qua nhánh không ảnh hưởng kết quả để tiết kiệm thời gian", "C. Tự động tăng độ sâu cây", "D. Thay đổi vai trò của MAX và MIN"],
      c: 1,
      e: "Cắt tỉa alpha-beta giúp tăng tốc duyệt bằng cách bỏ qua các nhánh chắc chắn không được chọn."
    },
    {
      q: "Tham số Alpha (\\(\\alpha\\)) trong cắt tỉa Alpha-Beta đại diện cho điều gì?",
      a: ["A. Giá trị tồi nhất của MIN", "B. Giá trị tốt nhất hiện tại mà MAX đảm bảo đạt được", "C. Chi phí thực tế g(n)", "D. Hệ số phân nhánh của cây"],
      c: 1,
      e: "Alpha là cận dưới của nước đi mà MAX có thể chọn."
    },
    {
      q: "Tham số Beta (\\(\\beta\\)) trong cắt tỉa Alpha-Beta đại diện cho điều gì?",
      a: ["A. Giá trị tốt nhất hiện tại mà MIN có thể ép cho MAX", "B. Giá trị lớn nhất của MAX", "C. Ước lượng heuristic h(n)", "D. Độ sâu giới hạn của cây"],
      c: 0,
      e: "Beta là cận trên của nước đi mà đối thủ MIN có thể ép MAX phải nhận."
    },
    {
      q: "Điều kiện để thực hiện cắt tỉa nhánh tại một nút trên cây trò chơi là gì?",
      a: ["A. \\(\\alpha > 1\\)", "B. \\(\\alpha \\ge \\beta\\)", "C. \\(\\alpha + \\beta = 0\\)", "D. \\(\\alpha < \\beta\\)"],
      c: 1,
      e: "Khi alpha vượt hoặc bằng beta, nhánh hiện tại không thể sinh ra kết quả tốt hơn cho người chơi ở trên nữa nên bị cắt bỏ."
    },
    {
      q: "Tại sao trong thực tế chơi cờ vua, máy tính không thể duyệt hết toàn bộ cây trò chơi Minimax?",
      a: ["A. Vì luật cờ vua quá khó", "B. Vì số lượng nút khổng lồ vượt quá giới hạn tính toán", "C. Vì không có hàm heuristic", "D. Vì máy tính không có RAM"],
      c: 1,
      e: "Không gian trạng thái của cờ vua ước tính là 10^120, lớn hơn số nguyên tử trong vũ trụ, không thể duyệt hết."
    },
    {
      q: "Khi giới hạn độ sâu tìm kiếm trong Minimax, ta đánh giá giá trị các nút ở tầng lá giới hạn bằng công cụ gì?",
      a: ["A. Điểm số thắng/thua tuyệt đối 0 và 1", "B. Hàm đánh giá tĩnh Heuristic (Evaluation function)", "C. Chạy tiếp BFS", "D. Hỏi ý kiến người dùng"],
      c: 1,
      e: "Khi không thể đi tới tận cùng trò chơi, ta dùng hàm đánh giá tĩnh để ước lượng độ mạnh yếu của thế cờ tại nút đó."
    },
    {
      q: "Hàm đánh giá tĩnh cho cờ vua thường dựa trên những yếu tố nào?",
      a: ["A. Chỉ đếm số lượng quân cờ còn lại", "B. Tổng giá trị quân cờ, cấu trúc tốt, ưu thế trung tâm", "C. Màu sắc của các quân cờ", "D. Thời gian suy nghĩ của đối thủ"],
      c: 1,
      e: "Heuristic cờ vua kết hợp giá trị quân (Tốt=1, Xe=5, Hậu=9...) và các ưu thế hình cờ cụ thể."
    },
    {
      q: "Admissible Heuristic có bao giờ đánh giá quá cao chi phí thực tế để đạt tới mục tiêu không?",
      a: ["A. Có, thường xuyên", "B. Không bao giờ (luôn nhỏ hơn hoặc bằng chi phí thực tế)", "C. Chỉ khi ở trạng thái đích", "D. Có nếu chi phí các cạnh âm"],
      c: 1,
      e: "Định nghĩa của admissible (hợp lệ) là h(n) <= h*(n) (không được đánh giá quá cao chi phí thực)."
    },
    {
      q: "Trong bài toán tô màu bản đồ (Map Coloring) dạng CSP, ràng buộc (C) thường là gì?",
      a: ["A. Mọi khu vực phải tô cùng màu", "B. Hai khu vực kề nhau không được tô trùng màu", "C. Chỉ được dùng màu xanh", "D. Số màu phải nhiều hơn số khu vực"],
      c: 1,
      e: "Ràng buộc cơ bản của tô màu bản đồ là hai đỉnh kề nhau trên đồ thị phải khác màu."
    },
    {
      q: "Trong A*, nếu ta chọn một heuristic h(n) có giá trị càng lớn (nhưng vẫn admissible), hiệu năng của A* sẽ:",
      a: ["A. Giảm đi", "B. Tăng lên (mở rộng ít nút hơn)", "C. Không thay đổi", "D. Trở thành BFS"],
      c: 1,
      e: "Heuristic càng sát chi phí thực tế (giá trị h(n) càng lớn trong giới hạn admissible) thì A* duyệt càng tập trung và hiệu quả."
    },
    {
      q: "Trong trò chơi tic-tac-toe, nếu MAX thắng, giá trị nút lá thường được gán bằng bao nhiêu?",
      a: ["A. -1", "B. +1", "C. 0", "D. Vô hạn"],
      c: 1,
      e: "Giá trị dương biểu thị lợi thế cho người chơi MAX."
    },
    // Bắt đầu chèn các câu hỏi bổ sung chất lượng cao riêng biệt cho chương 3
    {
      q: "Thuật toán A* có tính đầy đủ (complete) trên đồ thị vô hạn khi thỏa mãn điều kiện nào?",
      a: ["A. Chi phí của các bước đi phải lớn hơn một số dương", "B. Heuristic h(n) phải bằng không với mọi nút n", "C. Hệ số phân nhánh của cây tìm kiếm bằng hằng số", "D. Danh sách các nút đóng CLOSED được dọn dẹp liên tục"],
      c: 0,
      e: "Để A* đảm bảo đầy đủ trên đồ thị vô hạn, chi phí các cạnh phải lớn hơn một số dương để tránh đường đi vô hạn có chi phí hữu hạn."
    },
    {
      q: "Thuật toán leo đồi (Hill Climbing) sẽ dừng hoạt động ngay lập tức khi nào?",
      a: ["A. Đạt đến giới hạn số lượng nút tối đa lưu trên Stack", "B. Không có trạng thái con nào tốt hơn trạng thái hiện tại", "C. Gặp một nút AND trong quá trình phân tách đồ thị", "D. Giá trị hàm Heuristic h(n) đạt đến vô cùng tích lũy"],
      c: 1,
      e: "Hill Climbing là thuật toán tối ưu cục bộ tham lam, nó dừng ngay khi xung quanh không có trạng thái nào tốt hơn trạng thái hiện tại."
    },
    {
      q: "Mục đích cốt lõi của danh sách CLOSED trong thuật toán A* là gì?",
      a: ["A. Lưu trữ các nút đang chờ để được mở rộng ở bước sau", "B. Lưu trữ các nút đã được mở rộng để tránh duyệt lặp", "C. Lưu trữ các nút lá giới hạn của cây tìm kiếm đồ thị", "D. Lưu trữ các nút đích được tìm thấy trong quá trình duyệt"],
      c: 1,
      e: "Danh sách CLOSED lưu trữ các nút đã mở rộng nhằm phát hiện và bỏ qua các đường đi lặp lại dẫn tới cùng một trạng thái."
    },
    {
      q: "Hàm Heuristic h(n) được gọi là nhất quán (consistent/monotonic) khi thỏa mãn điều gì?",
      a: ["A. h(n) không vượt quá chi phí thực từ n đến đích", "B. h(n) nhỏ hơn hoặc bằng chi phí từ n sang n' cộng h(n')", "C. h(n) luôn bằng tổng khoảng cách Manhattan của các ô", "D. h(n) tăng dần theo độ sâu d của cây tìm kiếm đồ thị"],
      c: 1,
      e: "Tính nhất quán yêu cầu h(n) <= c(n, a, n') + h(n') với n' là nút con trực tiếp của n sau khi thực hiện hành động a."
    },
    {
      q: "Trong trò chơi đối kháng, nếu một nút là nút hòa, giá trị tiện ích thường gán là gì?",
      a: ["A. Gán bằng giá trị +1", "B. Gán bằng giá trị 0", "C. Gán bằng giá trị -1", "D. Gán bằng giá trị vô hạn"],
      c: 1,
      e: "Trong thang điểm zero-sum tiêu chuẩn: thắng = +1, thua = -1, hòa = 0."
    },
    {
      q: "Tại sao cắt tỉa Alpha-Beta luôn cho nước đi tối ưu giống hệt thuật toán Minimax?",
      a: ["A. Vì nó thay đổi cách tính toán tại các nút lá của cây", "B. Vì nó chỉ cắt bỏ các nhánh chắc chắn không ảnh hưởng kết quả", "C. Vì nó sử dụng hàm đánh giá tĩnh hoàn toàn khác Minimax", "D. Vì nó chỉ áp dụng đối với người chơi MAX trên cây trò chơi"],
      c: 1,
      e: "Alpha-beta pruning chỉ loại bỏ các nhánh mà người chơi ở tầng trên chắc chắn không chọn vì đã có lựa chọn tốt hơn, nên kết quả không thay đổi."
    },
    {
      q: "Trong bài toán thỏa mãn ràng buộc (CSP), thuật toán Backtracking Search thực chất là gì?",
      a: ["A. Chạy BFS trên không gian trạng thái các biến số", "B. Chạy DFS thử gán giá trị cho từng biến một", "C. Chạy UCS dựa trên chi phí g(n) của các ràng buộc", "D. Chạy leo đồi khởi động ngẫu nhiên trên miền giá trị"],
      c: 1,
      e: "Backtracking search trong CSP là một dạng DFS thực hiện gán giá trị từng bước cho từng biến và quay lui khi vi phạm ràng buộc."
    },
    {
      q: "Heuristic 'Minimum Remaining Values' (MRV) trong CSP ưu tiên chọn biến nào?",
      a: ["A. Biến có số lượng ràng buộc với các biến khác nhiều nhất", "B. Biến còn ít giá trị hợp lệ nhất trong miền giá trị", "C. Biến nằm ở vị trí đầu tiên trong danh sách khai báo", "D. Biến có giá trị lớn nhất theo thứ tự bảng chữ cái"],
      c: 1,
      e: "MRV chọn biến có ít giá trị khả dĩ nhất (được gọi là fail-first heuristic) nhằm phát hiện sớm nhánh cụt."
    },
    {
      q: "Heuristic 'Degree Heuristic' trong CSP đóng vai trò gì?",
      a: ["A. Ưu tiên chọn biến có miền giá trị nhỏ nhất hiện tại", "B. Chọn biến tham gia vào nhiều ràng buộc nhất với các biến", "C. Chọn giá trị ít ràng buộc nhất cho biến đang xét", "D. Tính toán độ phức tạp thời gian tối đa của giải thuật"],
      c: 1,
      e: "Degree heuristic đóng vai trò phá vỡ liên kết hòa của MRV bằng cách chọn biến ràng buộc nhiều nhất với các biến chưa gán khác."
    },
    {
      q: "Trong CSP, kỹ thuật 'Forward Checking' hoạt động như thế nào?",
      a: ["A. Kiểm tra xem biến hiện tại có thỏa mãn mọi ràng buộc không", "B. Theo dõi miền giá trị của biến chưa gán để xóa trị lỗi", "C. Chạy thử thuật toán Minimax cho các bước đi tương lai", "D. Khởi tạo lại miền giá trị của tất cả các biến về ban đầu"],
      c: 1,
      e: "Forward checking kiểm tra trước các biến chưa gán kề với biến vừa gán, loại bỏ các giá trị không còn hợp lệ khỏi miền của chúng."
    }
  ],

  // CHƯƠNG 4: BIỂU DIỄN TRI THỨC (KNOWLEDGE REPRESENTATION)
  ch4: [
    {
      q: "Mục đích chính của việc Biểu diễn tri thức (Knowledge Representation) trong AI là gì?",
      a: ["A. Tăng tốc độ đường truyền mạng", "B. Mã hóa tri thức thế giới thực thành dạng máy xử lý và suy luận được", "C. Giảm kích thước ổ đĩa cứng", "D. Thiết kế giao diện đồ họa cho phần mềm"],
      c: 1,
      e: "Biểu diễn tri thức giúp số hóa kiến thức nhân loại để máy tính thực hiện các phép suy luận logic tự động."
    },
    {
      q: "Hãy phân biệt Dữ liệu (Data), Thông tin (Information) và Tri thức (Knowledge):",
      a: ["A. Chúng hoàn toàn giống nhau về mặt ngữ nghĩa", "B. Dữ liệu là thô; Thông tin có nghĩa; Tri thức chứa quy luật giải quyết vấn đề", "C. Tri thức là dữ liệu thô chưa xử lý", "D. Thông tin là cấp độ cao nhất chứa quy luật tiến hóa"],
      c: 1,
      e: "Đây là tháp nhận thức DIKW: Dữ liệu thô -> Thông tin có nghĩa -> Tri thức ứng dụng."
    },
    {
      q: "Phát biểu nào sau đây là ví dụ của 'Tri thức suy diễn' (Inferential Knowledge)?",
      a: ["A. 'Cần Thơ thuộc Việt Nam.'", "B. 'Nếu trời mưa thì đường trơn.'", "C. 'Trái Đất hình cầu.'", "D. 'Chim cánh cụt có lông vũ.'"],
      c: 1,
      e: "Tri thức suy diễn mô tả quy luật, mối quan hệ nhân quả (IF-THEN) cho phép suy ra sự kiện mới."
    },
    {
      q: "Yêu cầu 'Representational Adequacy' của một hệ biểu diễn tri thức nghĩa là gì?",
      a: ["A. Hệ thống chạy rất nhanh", "B. Khả năng biểu diễn đầy đủ tri thức cần thiết của lĩnh vực", "C. Dễ chỉnh sửa cơ sở dữ liệu", "D. Không bị lỗi phần mềm"],
      c: 1,
      e: "Representational Adequacy là tính thích hợp biểu diễn - khả năng bao phủ toàn bộ tri thức ngành."
    },
    {
      q: "Quá trình chuyển đổi đối tượng thế giới thực thành ký hiệu tính toán gọi là gì?",
      a: ["A. Unification", "B. Ánh xạ (Mapping)", "C. Leo đồi", "D. Skolemization"],
      c: 1,
      e: "Mapping là quá trình ánh xạ đối tượng thực tế vào mô hình tính toán ký hiệu của máy tính."
    },
    {
      q: "Mô hình biểu diễn tri thức nào dưới đây dựa trên cấu trúc đồ thị?",
      a: ["A. Logic vị từ bậc nhất", "B. Mạng ngữ nghĩa (Semantic Network)", "C. Hệ luật sinh", "D. Prolog"],
      c: 1,
      e: "Mạng ngữ nghĩa sử dụng cấu trúc đồ thị gồm các nút (đối tượng) và cung nối (quan hệ)."
    },
    {
      q: "Trong mạng ngữ nghĩa, quan hệ 'IS-A' thể hiện điều gì?",
      a: ["A. Mối quan hệ sở hữu thành phần", "B. Mối quan hệ phân cấp, kế thừa lớp", "C. Phép toán phủ định logic", "D. Mối quan hệ ngang hàng"],
      c: 1,
      e: "IS-A (is a) thể hiện quan hệ phân cấp phân loại (ví dụ: Chó IS-A Động vật), cho phép con kế thừa cha."
    },
    {
      q: "Trong mạng ngữ nghĩa, quan hệ 'HAS-A' thể hiện điều gì?",
      a: ["A. Quan hệ kế thừa lớp", "B. Quan hệ sở hữu thuộc tính, bộ phận", "C. Quan hệ tương đương toán học", "D. Quan hệ ngoại lệ"],
      c: 1,
      e: "HAS-A (has a) thể hiện quan hệ sở hữu thuộc tính/bộ phận (ví dụ: Ô tô HAS-A Bánh xe)."
    },
    {
      q: "Tính chất nào cho phép các nút con trên mạng ngữ nghĩa tự động có các thuộc tính của nút cha?",
      a: ["A. Tính mở rộng", "B. Tính kế thừa (Inheritance)", "C. Tính ngoại lệ", "D. Tính phân rã"],
      c: 1,
      e: "Kế thừa qua quan hệ IS-A giúp tiết kiệm dung lượng lưu trữ tri thức vì không cần khai báo lại các thuộc tính chung ở nút con."
    },
    {
      q: "Làm thế nào để mạng ngữ nghĩa xử lý các trường hợp ngoại lệ (như chim cánh cụt không biết bay)?",
      a: ["A. Xoá bỏ nút chim cánh cụt", "B. Ghi đè thuộc tính cụ thể tại nút con để phủ nhận thuộc tính kế thừa", "C. Không thể xử lý", "D. Khai báo chim cánh cụt không phải là chim"],
      c: 1,
      e: "Mạng ngữ nghĩa cho phép ghi đè giá trị tại nút con để xử lý ngoại lệ của luật chung."
    },
    {
      q: "Mô hình Frame (Khung tri thức) được đề xuất bởi ai và vào năm nào?",
      a: ["A. Alan Turing năm 1950", "B. Marvin Minsky năm 1974", "C. John McCarthy năm 1956", "D. John Holland năm 1970"],
      c: 1,
      e: "Marvin Minsky đề xuất mô hình Frame năm 1974 để biểu diễn các khối tri thức có cấu trúc."
    },
    {
      q: "Khái niệm Frame trong biểu diễn tri thức tương đương với khái niệm nào trong lập trình hiện đại?",
      a: ["A. Biến toàn cục", "B. Lớp và Đối tượng (Class & Object)", "C. Vòng lặp for", "D. Kiểu dữ liệu con trỏ"],
      c: 1,
      e: "Frame tương tự Class, lưu trữ tên đối tượng, các thuộc tính (slots) và giá trị/quy tắc tính (facets)."
    },
    {
      q: "Thành phần 'Slot' trong cấu trúc Frame đại diện cho điều gì?",
      a: ["A. Tên của Frame lớp cha", "B. Các thuộc tính của đối tượng", "C. Các thủ tục tính toán toán học", "D. Điểm kết nối mạng"],
      c: 1,
      e: "Slot là các khe cắm/thuộc tính mô tả đối tượng (ví dụ: màu sắc, kích thước, số chân)."
    },
    {
      q: "Thành phần 'Facet' trong cấu trúc Frame đại diện cho điều gì?",
      a: ["A. Tên của đối tượng", "B. Chi tiết mô tả thuộc tính (giá trị mặc định, công thức tính)", "C. Cung nối kế thừa", "D. Mạng ngữ nghĩa con"],
      c: 1,
      e: "Facet (khía cạnh) mô tả thuộc tính của Slot, có thể chứa giá trị cụ thể hoặc thủ tục tính toán tự động."
    },
    {
      q: "Trong Frame hình chữ nhật, Slot 'diện tích' có Facet chứa công thức 'dài * rộng'. Công thức này thuộc loại facet nào?",
      a: ["A. Giá trị mặc định (Default)", "B. Thủ tục kích hoạt tự động (demon)", "C. Kiểu dữ liệu số nguyên", "D. Tên lớp cha"],
      c: 1,
      e: "Đây là thủ tục đính kèm (demon) tự động chạy để tính toán giá trị cho Slot khi được yêu cầu."
    },
    {
      q: "Mô hình biểu diễn tri thức nào phù hợp nhất để xây dựng hệ thống chẩn đoán y khoa dạng 'Nếu triệu chứng A thì bệnh B'?",
      a: ["A. Mạng ngữ nghĩa", "B. Hệ luật sinh (Production Rules)", "C. Logic vị từ bậc nhất", "D. Cấu trúc Frame"],
      c: 1,
      e: "Hệ luật sinh biểu diễn luật IF-THEN rất trực quan và phù hợp với tư duy chẩn đoán y khoa."
    },
    {
      q: "Nhược điểm lớn nhất của mô hình biểu diễn tri thức bằng Logic là gì?",
      a: ["A. Không chính xác", "B. Khó biểu diễn tri thức mập mờ và dễ bùng nổ tổ hợp tính toán", "C. Không thể lập trình được", "D. Không có tính kế thừa"],
      c: 1,
      e: "Logic toán học rất khắt khe (chỉ Đúng/Sai), khó áp dụng cho tri thức mang tính ước lượng hay xác suất."
    },
    {
      q: "Phát biểu nào sau đây đúng khi so sánh Mạng ngữ nghĩa và Frame?",
      a: ["A. Mạng ngữ nghĩa phức tạp hơn Frame", "B. Frame là mở rộng của mạng ngữ nghĩa cho phép nút chứa cấu trúc phức tạp", "C. Cả hai đều không hỗ trợ kế thừa", "D. Frame không thể biểu diễn đối tượng hình học"],
      c: 1,
      e: "Frame tổ chức thông tin tại mỗi nút tốt hơn mạng ngữ nghĩa thông thường bằng cách chia làm các slots và facets."
    },
    {
      q: "Đại lượng nào sau đây là ví dụ của 'Dữ liệu thô' (Data)?",
      a: ["A. Các số đo huyết áp thô: 120, 130, 140", "B. Nhận định 'Huyết áp đang tăng cao'", "C. Lời khuyên 'Nên uống thuốc hạ huyết áp'", "D. Bản chẩn đoán bệnh án điện tử"],
      c: 0,
      e: "Các con số thô chưa được gán ngữ nghĩa hay giải thích là Data."
    },
    {
      q: "Hệ chuyên gia (Expert System) sử dụng cơ chế nào để sinh tri thức mới?",
      a: ["A. Bộ suy diễn (Inference Engine) áp dụng luật lên sự kiện", "B. Chỉ sinh ngẫu nhiên", "C. Nhờ thuật toán leo đồi", "D. Không thể sinh tri thức mới"],
      c: 0,
      e: "Inference Engine chạy các thuật toán suy diễn tiến/lùi trên cơ sở tri thức để kết luận sự kiện mới."
    },
    // Bổ sung các câu hỏi chất lượng cao riêng biệt cho chương 4
    {
      q: "Thuật ngữ 'Tri thức khai báo' (Declarative Knowledge) dùng để chỉ loại tri thức nào?",
      a: ["A. Tri thức về các bước và thuật toán giải quyết bài toán cụ thể", "B. Tri thức về các sự kiện, khẳng định mang tính tĩnh của thế giới", "C. Tri thức về cách hệ thống máy tính tự động tối ưu hóa bộ nhớ", "D. Tri thức về cách chọn lọc các cá thể trong quần thể di truyền"],
      c: 1,
      e: "Tri thức khai báo mô tả bản chất của sự vật, sự kiện tĩnh (biết cái gì - 'know what'), ngược với tri thức thủ tục mô tả các bước hành động (biết cách làm - 'know how')."
    },
    {
      q: "Phát biểu nào sau đây thuộc nhóm 'Tri thức thủ tục' (Procedural Knowledge)?",
      a: ["A. 'Hà Nội là thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'", "B. 'Các bước để thực hiện giải phương trình bậc hai bằng máy tính.'", "C. 'Mọi loài động vật có vú đều là sinh vật hằng nhiệt sinh học.'", "D. 'Số lượng các biến số trong một bài toán thỏa mãn ràng buộc.'"],
      c: 1,
      e: "Tri thức thủ tục chỉ ra các bước hoặc quy trình thực hiện một hành động/nhiệm vụ cụ thể."
    },
    {
      q: "Trong mạng ngữ nghĩa, cơ chế 'Inheritance Link' (Kênh kế thừa) hoạt động nhờ cung nào?",
      a: ["A. Cung mang nhãn HAS-A", "B. Cung mang nhãn IS-A", "C. Cung mang nhãn AND-OR", "D. Cung mang nhãn NOT-IN"],
      c: 1,
      e: "Kế thừa tri thức trong mạng ngữ nghĩa được truyền qua cung liên kết IS-A từ lớp cha xuống các lớp con hoặc thực thể con."
    },
    {
      q: "Sự khác biệt cốt lõi giữa mạng ngữ nghĩa chuẩn và mạng ngữ nghĩa phân hoạch là gì?",
      a: ["A. Mạng phân hoạch cho phép biểu diễn các lượng từ logic logic", "B. Mạng phân hoạch chạy thuật toán tìm đường đi ngắn nhất nhanh hơn", "C. Mạng phân hoạch không cho phép thực hiện việc ghi đè thuộc tính", "D. Mạng phân hoạch sử dụng Stack thay vì đồ thị để quản lý dữ liệu"],
      c: 0,
      e: "Mạng ngữ nghĩa phân hoạch (Partitioned Semantic Network) cho phép phân tách đồ thị để biểu diễn các lượng từ như với mọi, tồn tại."
    },
    {
      q: "Đại lượng 'Information' (Thông tin) trong tháp nhận thức DIKW được định nghĩa là gì?",
      a: ["A. Các ký hiệu số học hoặc văn bản thô chưa qua bất kỳ xử lý nào", "B. Dữ liệu đã được gán ngữ nghĩa và đặt trong một ngữ cảnh cụ thể", "C. Các kinh nghiệm thực tế giúp đưa ra quyết định giải quyết vấn đề", "D. Khả năng tự động học hỏi từ các sai lầm trong quá khứ của tác tử"],
      c: 1,
      e: "Thông tin là dữ liệu đã được xử lý và sắp xếp có cấu trúc nhằm mang lại ý nghĩa cho người dùng."
    },
    {
      q: "Trong cấu trúc Frame, facet 'value' chứa thông tin gì?",
      a: ["A. Giá trị mặc định khi chưa có thông tin cụ thể của slot", "B. Giá trị cụ thể của thuộc tính đã được xác định thực tế", "C. Thủ tục tự động tính toán giá trị khi slot bị thay đổi", "D. Kiểu dữ liệu ràng buộc của các giá trị được gán cho slot"],
      c: 1,
      e: "Facet 'value' lưu trữ giá trị thực tế của slot đối với một thực thể cụ thể (ví dụ: Frame Rectangle_1 có slot Width có facet value = 10)."
    },
    {
      q: "Trong cấu trúc Frame, thuật ngữ 'Demon' (quỷ thủ tục) dùng để chỉ cái gì?",
      a: ["A. Lỗi hệ thống làm tràn bộ nhớ đệm khi thực thi suy luận logic", "B. Thủ tục tự động chạy khi một slot được truy cập hoặc sửa đổi", "C. Tên gọi của các nút gốc trong mô hình phân cấp cây kế thừa", "D. Một dạng biến số toàn cục không có miền giá trị xác định"],
      c: 1,
      e: "Demon (như IF-NEEDED, IF-ADDED) là các hàm/thủ tục tự động kích hoạt khi có sự kiện đọc/ghi giá trị vào slot."
    },
    {
      q: "Sự khác biệt cốt lõi giữa hệ luật sinh và logic mệnh đề là gì?",
      a: ["A. Hệ luật sinh không cho phép sử dụng phép toán phủ định logic", "B. Hệ luật sinh cho phép thực hiện hành động làm thay đổi dữ liệu", "C. Logic mệnh đề có tốc độ thực thi thuật toán tìm kiếm nhanh hơn", "D. Hệ luật sinh bắt buộc phải sử dụng ngôn ngữ lập trình Prolog"],
      c: 1,
      e: "Hệ luật sinh dạng IF-THEN có vế phải (THEN) là hành động (action) có thể sửa đổi cơ sở dữ liệu làm việc, không chỉ là kết luận logic đơn thuần."
    },
    {
      q: "Kỹ thuật 'Ontology' (Bản thể luận) trong AI dùng để làm gì?",
      a: ["A. Tối ưu hóa các truy vấn SQL trong hệ cơ sở dữ liệu lớn", "B. Định nghĩa hệ thống thuật ngữ và mối quan hệ dùng chung của ngành", "C. Sinh ra các cá thể mới cho quần thể của giải thuật di truyền", "D. Ước lượng khoảng cách từ trạng thái hiện tại tới trạng thái đích"],
      c: 1,
      e: "Ontology định nghĩa các khái niệm, thuộc tính và mối quan hệ cơ bản trong một lĩnh vực để máy tính và con người cùng chia sẻ cách hiểu."
    },
    {
      q: "Mô hình biểu diễn tri thức nào thích hợp nhất cho bài toán lập kế hoạch?",
      a: ["A. Mạng ngữ nghĩa phân hoạch", "B. Logic mệnh đề vị từ kết hợp hệ luật sinh hành động", "C. Mô hình cây quyết định nhị phân", "D. Mạng nơ-ron nhân tạo đa lớp ẩn"],
      c: 1,
      e: "Logic và hệ luật sinh cho phép mô tả trạng thái thế giới và các hành động (tiền điều kiện, hiệu ứng) cực kỳ phù hợp cho lập kế hoạch hành động."
    }
  ],

  // CHƯƠNG 5: THỦ TỤC HỢP GIẢI (RESOLUTION)
  ch5: [
    {
      q: "Mệnh đề (Proposition) là phát biểu như thế nào?",
      a: ["A. Luôn luôn đúng trong mọi hoàn cảnh", "B. Chỉ nhận duy nhất một trong hai giá trị chân trị: Đúng hoặc Sai", "C. Là câu hỏi hoặc câu cảm thán", "D. Có thể vừa đúng vừa sai cùng lúc"],
      c: 1,
      e: "Mệnh đề là phát biểu mang tính khẳng định, nhận chân trị nhị phân True hoặc False."
    },
    {
      q: "Phép toán logic 'Hội' (AND - \\(\\land\\)) của hai mệnh đề P và Q Đúng khi nào?",
      a: ["A. Ít nhất một trong hai đúng", "B. Cả hai mệnh đề đều đúng", "C. Cả hai cùng sai", "D. P đúng hoặc Q sai"],
      c: 1,
      e: "P ^ Q chỉ đúng khi đồng thời P đúng và Q đúng."
    },
    {
      q: "Phép toán logic 'Tuyển' (OR - \\(\\lor\\)) của hai mệnh đề P và Q Đúng khi nào?",
      a: ["A. Chỉ khi cả hai đều đúng", "B. Có ít nhất một mệnh đề đúng", "C. Cả hai cùng sai", "D. P đúng và Q sai"],
      c: 1,
      e: "P v Q đúng khi P đúng, hoặc Q đúng, hoặc cả hai đều đúng."
    },
    {
      q: "Phép kéo theo \\(P \\rightarrow Q\\) chỉ nhận giá trị Sai (False) khi nào?",
      a: ["A. P đúng và Q đúng", "B. P đúng và Q sai", "C. P sai và Q đúng", "D. P sai và Q sai"],
      c: 1,
      e: "P -> Q chỉ sai khi giả thiết P đúng mà kết luận Q lại sai."
    },
    {
      q: "Dạng chuẩn hội (CNF) của công thức logic là dạng như thế nào?",
      a: ["A. Tuyển của nhiều hội", "B. Hội của nhiều tuyển các biến/biến phủ định", "C. Phép kéo theo của các mệnh đề", "D. Phép phủ định ngoài cùng"],
      c: 1,
      e: "CNF là cấu trúc dạng (A v B) ^ (C v D) ^ ..."
    },
    {
      q: "Tương đương logic nào dùng để khử phép kéo theo: \\(P \\rightarrow Q\\)?",
      a: ["A. \\(\\neg P \\land Q\\)", "B. \\(\\neg P \\lor Q\\)", "C. \\(P \\land \\neg Q\\)", "D. \\(\\neg P \\leftrightarrow Q\\)"],
      c: 1,
      e: "Quy tắc khử kéo theo cơ bản: P -> Q tương đương với không P hoặc Q."
    },
    {
      q: "Luật De Morgan nào sau đây là ĐÚNG?",
      a: ["A. \\(\\neg(A \\land B) \\equiv \\neg A \\land \\neg B\\)", "B. \\(\\neg(A \\land B) \\equiv \\neg A \\lor \\neg B\\)", "C. \\(\\neg(A \\lor B) \\equiv \\neg A \\lor \\neg B\\)", "D. \\(\\neg(\\neg A) \\equiv \\neg A\\)"],
      c: 1,
      e: "De Morgan đưa phủ định vào trong: phủ định của hội thành tuyển các phủ định."
    },
    {
      q: "Luật phân phối nào sau đây dùng để đưa công thức về dạng CNF?",
      a: ["A. \\(A \\lor (B \\land C) \\equiv (A \\lor B) \\land (A \\lor C)\\)", "B. \\(A \\lor (B \\land C) \\equiv (A \\land B) \\lor (A \\land C)\\)", "C. \\(A \\land (B \\lor C) \\equiv (A \\lor B) \\land (A \\lor C)\\)", "D. \\(A \\lor B \\equiv B \\lor A\\)"],
      c: 0,
      e: "Luật phân phối phép OR trên phép AND giúp tạo ra hội của các tuyển để đạt chuẩn CNF."
    },
    {
      q: "Logic vị từ bậc nhất (FOL) khác logic mệnh đề ở điểm nào?",
      a: ["A. Không sử dụng các phép toán AND, OR", "B. Biểu diễn được đối tượng, thuộc tính và mối quan hệ giữa chúng", "C. Không dùng chân trị True/False", "D. Chỉ chạy được trên Prolog"],
      c: 1,
      e: "FOL mở rộng logic mệnh đề bằng cách đưa vào khái niệm hằng, biến, vị từ và lượng từ để biểu diễn tri thức chi tiết."
    },
    {
      q: "Thành phần 'Hằng' (Constant) trong logic vị từ đại diện cho điều gì?",
      a: ["A. Một tập hợp đối tượng chung", "B. Một đối tượng cụ thể xác định", "C. Phép biến đổi toán học", "D. Lượng từ với mọi"],
      c: 1,
      e: "Hằng số (ví dụ: 'lan', 'caesar') chỉ định đích danh một đối tượng cụ thể."
    },
    {
      q: "Thành phần 'Biến' (Variable) trong logic vị từ đại diện cho điều gì?",
      a: ["A. Một đối tượng cố định", "B. Đối tượng chưa xác định cụ thể trong miền xác định", "C. Hàm toán học", "D. Chân trị True"],
      c: 1,
      e: "Biến (thường viết in hoa như X, Y) đại diện cho đối tượng tổng quát."
    },
    {
      q: "Ý nghĩa của lượng từ tồn tại (\\(\\exists X\\)) là gì?",
      a: ["A. Mọi đối tượng X đều thỏa mãn", "B. Tồn tại ít nhất một đối tượng X thỏa mãn điều kiện", "C. Không có đối tượng X nào thỏa mãn", "D. Chỉ có tối đa một X thỏa mãn"],
      c: 1,
      e: "Lượng từ tồn tại biểu thị có ít nhất một phần tử trong tập hợp thỏa mãn hệ thức."
    },
    {
      q: "Ý nghĩa của lượng từ với mọi (\\(\\forall X\\)) là gì?",
      a: ["A. Có một vài X thỏa mãn", "B. Tất cả các đối tượng X đều thỏa mãn điều kiện", "C. Chỉ đúng với hằng số X", "D. Phép toán phủ định X"],
      c: 1,
      e: "Lượng từ với mọi chỉ định tất cả các phần tử đều phải thỏa mãn tính chất."
    },
    {
      q: "Dịch câu: 'Mọi sinh viên đều thông minh' sang logic vị từ:",
      a: ["A. \\(\\exists X (student(X) \\land smart(X))\\)", "B. \\(\\forall X (student(X) \\rightarrow smart(X))\\)", "C. \\(\\forall X (student(X) \\land smart(X))\\)", "D. \\(\\exists X (student(X) \\rightarrow smart(X))\\)"],
      c: 1,
      e: "Luật 'Với mọi' thường đi liền với phép kéo theo (->) để chỉ nhóm đối tượng xác định."
    },
    {
      q: "Dịch câu: 'Có một số sinh viên lập trình giỏi' sang logic vị từ:",
      a: ["A. \\(\\forall X (student(X) \\rightarrow good\\_coder(X))\\)", "B. \\(\\exists X (student(X) \\land good\\_coder(X))\\)", "C. \\(\\exists X (student(X) \\rightarrow good\\_coder(X))\\)", "D. \\(\\forall X (student(X) \\land good\\_coder(X))\\)"],
      c: 1,
      e: "Lượng từ tồn tại thường đi kèm với phép hội (^) để khẳng định sự tồn tại đồng thời hai đặc tính."
    },
    {
      q: "Phép hợp nhất (Unification) trong logic vị từ nhằm mục đích gì?",
      a: ["A. Xoá bỏ các lượng từ", "B. Tìm phép thế biến để làm hai vị từ giống nhau về cú pháp", "C. Chứng minh công thức luôn đúng", "D. Chuyển đổi công thức sang DNF"],
      c: 1,
      e: "Hợp nhất tìm bộ thế để có thể triệt tiêu các vị từ đối ngẫu trong quá trình hợp giải."
    },
    {
      q: "Thủ tục hợp giải (Resolution) chứng minh mục tiêu bằng phương pháp nào?",
      a: ["A. Suy luận tiến trực tiếp", "B. Phản chứng để dẫn đến mệnh đề rỗng mâu thuẫn", "C. Tìm kiếm heuristic A*", "D. Lan truyền ràng buộc"],
      c: 1,
      e: "Resolution thêm phủ định mục tiêu vào cơ sở tri thức và tìm cách sinh ra mệnh đề rỗng biểu thị mâu thuẫn."
    },
    {
      q: "Mệnh đề rỗng (empty clause - \\(\\Box\\)) trong hợp giải biểu thị điều gì?",
      a: ["A. Cơ sở tri thức bị thiếu thông tin", "B. Xuất hiện mâu thuẫn logic chứng minh mục tiêu đúng", "C. Thuật toán bị lỗi vòng lặp", "D. Không có phép toán nào hợp lệ"],
      c: 1,
      e: "Mệnh đề rỗng sinh ra từ hợp giải hai mệnh đề đối ngẫu (như P và ~P), chỉ ra mâu thuẫn logic."
    },
    {
      q: "Kỹ thuật 'Skolemization' dùng để loại bỏ lượng từ nào?",
      a: ["A. Lượng từ với mọi (\\(\\forall\\))", "B. Lượng từ tồn tại (\\(\\exists\\))", "C. Cả hai lượng từ", "D. Phép phủ định"],
      c: 1,
      e: "Skolemization là quá trình khử lượng từ tồn tại bằng cách thế biến bằng hằng hoặc hàm Skolem."
    },
    {
      q: "Khi nào ta phải sử dụng 'Hàm Skolem' thay vì 'Hằng Skolem'?",
      a: ["A. Khi lượng từ tồn tại nằm ngoài lượng từ với mọi", "B. Khi lượng từ tồn tại nằm trong phạm vi của lượng từ với mọi", "C. Khi không có biến nào trong công thức", "D. Luôn luôn dùng hàm Skolem"],
      c: 1,
      e: "Nếu lượng từ tồn tại nằm dưới ảnh hưởng của lượng từ với mọi (ví dụ: mọi người X có một người cha Y), đối tượng tồn tại phụ thuộc vào biến X nên phải dùng hàm Skolem f(X)."
    },
    // Bổ sung các câu hỏi chất lượng cao riêng biệt cho chương 5
    {
      q: "Độ phân giải mệnh đề (Resolution Rule) hoạt động dựa trên quy tắc suy luận nào?",
      a: ["A. Quy tắc \\(P \\lor Q\\) và \\(\\neg P \\lor R\\) suy ra \\(Q \\lor R\\)", "B. Quy tắc \\(P \\land Q\\) và \\(\\neg P \\land R\\) suy ra \\(Q \\land R\\)", "C. Quy tắc \\(P \\rightarrow Q\\) và \\(Q \\rightarrow R\\) suy ra \\(P \\rightarrow R\\)", "D. Quy tắc \\(P \\leftrightarrow Q\\) và \\(\\neg P\\) suy ra \\(\\neg Q\\)"],
      c: 0,
      e: "Hợp giải triệt tiêu hai thành phần đối ngẫu P và phủ định P, gộp các thành phần còn lại bằng phép OR: (P v Q) ^ (~P v R) => (Q v R)."
    },
    {
      q: "Phép toán logic nào tương đương với \\(P \\leftrightarrow Q\\) (tương đương logic)?",
      a: ["A. \\((P \\rightarrow Q) \\land (Q \\rightarrow P)\\)", "B. \\((P \\lor Q) \\land (\\neg P \\lor \\neg Q)\\)", "C. \\((P \\land Q) \\lor (\\neg P \\land \\neg Q)\\)", "D. \\((P \\rightarrow Q) \\lor (Q \\rightarrow P)\\)"],
      c: 0,
      e: "Tương đương logic (equivalence) hai chiều P <-> Q là hội của hai phép kéo theo thuận và nghịch."
    },
    {
      q: "Trong quá trình chuẩn hóa CNF, bước nào thực hiện ngay sau bước khử phép kéo theo?",
      a: ["A. Di chuyển phủ định vào sát vị từ nhờ De Morgan", "B. Đổi tên các biến trùng để tránh xung đột phạm vi", "C. Thực hiện phân phối phép tuyển trên phép hội", "D. Loại bỏ các lượng từ tồn tại nhờ Skolemization"],
      c: 0,
      e: "Sau khi khử kéo theo (->), ta dùng luật De Morgan và phủ định kép để di chuyển dấu phủ định vào sát bên trong."
    },
    {
      q: "Mục đích của việc chuẩn hóa biến (Standardizing variables) trong FOL là gì?",
      a: ["A. Đảm bảo mỗi lượng từ quản lý một biến có tên duy nhất", "B. Chuyển đổi toàn bộ các biến số thực thành số nguyên", "C. Triệt tiêu hoàn toàn các lượng từ tồn tại khỏi biểu thức", "D. Hợp nhất hai biến số khác biệt về mặt ngữ nghĩa toán học"],
      c: 0,
      e: "Standardizing variables giúp tránh nhầm lẫn bằng cách đổi tên các biến trùng tên nhưng thuộc phạm vi quản lý của các lượng từ khác nhau."
    },
    {
      q: "Hợp nhất hai vị từ p(X, X) và p(a, Y) cho bộ thế thế (substitution) nào?",
      a: ["A. Bộ thế \\(\\{X/a, Y/a\\}\\)", "B. Bộ thế \\(\\{X/a, Y/X\\}\\)", "C. Bộ thế \\(\\{X/Y, Y/a\\}\\)", "D. Không thể hợp nhất được"],
      c: 0,
      e: "p(X,X) yêu cầu hai tham số bằng nhau. Khớp với p(a,Y) buộc X thế bằng a, dẫn đến tham số thứ hai của vị từ thứ nhất là a, từ đó Y cũng thế bằng a."
    },
    {
      q: "Tại sao thuật toán hợp giải (Resolution) cần biểu thức ở dạng chuẩn CNF?",
      a: ["A. Vì CNF giúp máy tính lưu trữ tiết kiệm bộ nhớ nhất", "B. Vì quy tắc hợp giải chỉ áp dụng được trên các mệnh đề tuyển", "C. Vì dạng CNF loại bỏ hoàn toàn các biến số trong công thức", "D. Vì dạng CNF dễ hiển thị trên giao diện đồ họa của người dùng"],
      c: 1,
      e: "Resolution hoạt động bằng cách triệt tiêu các tuyển hạng đối ngẫu giữa hai mệnh đề tuyển (clause), nên đầu vào bắt buộc là tập các mệnh đề tuyển (hội của các tuyển)."
    },
    {
      q: "Mệnh đề Horn (Horn Clause) có đặc điểm cấu trúc như thế nào?",
      a: ["A. Chứa tối đa một tuyển hạng khẳng định (không phủ định)", "B. Chứa toàn bộ các biến được quản lý bởi lượng từ tồn tại", "C. Chứa phép kéo theo hai chiều giữa các mệnh đề vị từ", "D. Không chứa bất kỳ dấu phủ định nào trong toàn bộ mệnh đề"],
      c: 0,
      e: "Horn Clause chứa tối đa một tuyển hạng dương (ví dụ: ~A v ~B v C, tương đương A ^ B -> C), là cơ sở của lập trình logic Prolog."
    },
    {
      q: "Thế nào là thuật toán hợp giải tuyến tính (Input Resolution)?",
      a: ["A. Luôn hợp giải một mệnh đề mới sinh với một mệnh đề ban đầu", "B. Hợp giải tuần tự các mệnh đề từ trái sang phải trên đồ thị", "C. Chỉ thực hiện hợp giải trên logic vị từ bậc nhất không có biến", "D. Không cho phép sử dụng phép thế biến số trong quá trình khớp"],
      c: 0,
      e: "Input resolution quy định tại mỗi bước hợp giải, một trong hai mệnh đề tham gia phải thuộc tập hợp mệnh đề đầu vào ban đầu để thu hẹp không gian tìm kiếm."
    },
    {
      q: "Kiểm tra Occur Check trong phép hợp nhất (Unification) dùng để làm gì?",
      a: ["A. Kiểm tra xem một biến có tự thế bằng chính nó hay không", "B. Kiểm tra biến có xuất hiện bên trong biểu thức thế không", "C. Xác định xem hai vị từ có cùng số lượng tham số không", "D. Đếm số lượng các phép thế hợp lệ trong bộ thế tối ưu"],
      c: 1,
      e: "Occur check ngăn chặn việc thế biến X bằng biểu thức chứa chính X (ví dụ: X thế bằng f(X)), việc này dẫn đến vòng lặp vô hạn."
    },
    {
      q: "Trong FOL, phát biểu 'Mọi người đều có một người mẹ' được dịch đúng là gì?",
      a: ["A. \\(\\forall X \\exists Y (person(X) \\rightarrow mother(Y, X))\\)", "B. \\(\\forall X \\forall Y (person(X) \\land person(Y) \\rightarrow mother(Y, X))\\)", "C. \\(\\exists Y \\forall X (person(X) \\rightarrow mother(Y, X))\\)", "D. \\(\\forall X \\exists Y (person(X) \\land mother(Y, X))\\)"],
      c: 0,
      e: "Với mỗi người X, tồn tại một người Y là mẹ của X. Y có thể khác nhau tùy theo X nên lượng từ tồn tại nằm sau lượng từ với mọi."
    }
  ],

  // CHƯƠNG 6: SUY DIỄN TIẾN - LÙI (FORWARD & BACKWARD CHAINING)
  ch6: [
    {
      q: "Hệ thống dựa trên luật (Rule-Based Systems) biểu diễn tri thức bằng cấu trúc nào?",
      a: ["A. Đồ thị AND-OR", "B. Luật dạng IF <điều kiện> THEN <kết luận>", "C. Các cấu trúc Frame phức tạp", "D. Hàm heuristic h(n)"],
      c: 1,
      e: "Hệ thống dựa trên luật biểu diễn tri thức chuyên gia bằng các quy tắc IF-THEN."
    },
    {
      q: "Ba thành phần chính của một hệ thống dựa trên luật là gì?",
      a: ["A. \\(\\langle St, I, O \\rangle\\)", "B. Rule Base, Fact Base, và Inference Engine", "C. Variables, Domains, Constraints", "D. MAX, MIN, Alpha-Beta"],
      c: 1,
      e: "Hệ luật gồm Rule Base chứa luật, Fact Base chứa dữ liệu thực tế, và Inference Engine thực thi suy luận."
    },
    {
      q: "Suy diễn tiến (Forward Chaining) hoạt động theo hướng nào?",
      a: ["A. Từ mục tiêu truy ngược về sự kiện ban đầu", "B. Từ các sự kiện đã biết suy ra sự kiện mới hướng tới mục tiêu", "C. Duyệt ngẫu nhiên các luật", "D. Đi từ các nút lá lên nút gốc của cây trò chơi"],
      c: 1,
      e: "Suy diễn tiến bắt đầu bằng dữ liệu (Facts) và áp dụng luật để sinh ra kết luận mới."
    },
    {
      q: "Tên gọi khác của phương pháp suy diễn tiến là gì?",
      a: ["A. Goal-driven search", "B. Data-driven search", "C. Heuristic search", "D. Adversarial search"],
      c: 1,
      e: "Suy diễn tiến hướng từ dữ liệu (data) ra mục tiêu nên là Data-driven."
    },
    {
      q: "Suy diễn lùi (Backward Chaining) hoạt động theo hướng nào?",
      a: ["A. Từ các sự kiện ban đầu suy ra kết luận", "B. Từ mục tiêu cần chứng minh truy ngược về các sự kiện thực tế", "C. Đi từ trái sang phải trên đồ thị", "D. Dùng giải thuật di truyền để tối ưu"],
      c: 1,
      e: "Suy diễn lùi bắt đầu bằng mục tiêu (Goal) và tìm các tiền đề cần thiết để chứng minh nó."
    },
    {
      q: "Tên gọi khác của phương pháp suy diễn lùi là gì?",
      a: ["A. Data-driven search", "B. Goal-driven search", "C. Blind search", "D. Local search"],
      c: 1,
      e: "Suy diễn lùi xuất phát từ mục tiêu (goal) nên là Goal-driven."
    },
    {
      q: "Phương pháp suy diễn nào phù hợp hơn cho các bài toán chẩn đoán lỗi thiết bị hoặc bệnh lý?",
      a: ["A. Suy diễn tiến", "B. Suy diễn lùi", "C. Tìm kiếm leo đồi", "D. Cắt tỉa alpha-beta"],
      c: 1,
      e: "Chẩn đoán bệnh/lỗi bắt đầu từ triệu chứng/hiện tượng (mục tiêu cần xác nhận) và truy tìm nguyên nhân nên hợp với suy diễn lùi."
    },
    {
      q: "Phương pháp suy diễn nào phù hợp hơn cho hệ thống giám sát và phát hiện sự cố thời gian thực?",
      a: ["A. Suy diễn tiến", "B. Suy diễn lùi", "C. Trò chơi Minimax", "D. Khởi tạo ngẫu nhiên"],
      c: 0,
      e: "Giám sát thời gian thực nhận liên tục dữ liệu từ cảm biến (Facts) để suy ra cảnh báo (Goal) nên dùng suy diễn tiến."
    },
    {
      q: "Thế nào là một luật khả thi (Enable Rule) trong hệ luật sinh?",
      a: ["A. Luật có kết luận trùng với mục tiêu", "B. Luật có điều kiện được thỏa mãn bởi sự kiện hiện có", "C. Luật xuất hiện đầu tiên trong danh sách", "D. Luật có nhiều điều kiện nhất"],
      c: 1,
      e: "Enable rule là luật đủ điều kiện để kích hoạt dựa trên dữ liệu hiện tại."
    },
    {
      q: "Tập hợp tất cả các luật khả thi tại một thời điểm được gọi là gì?",
      a: ["A. Rule Base", "B. Tập tranh chấp (Conflict Set)", "C. Fact Base", "D. Đồ thị AND-OR"],
      c: 1,
      e: "Conflict Set chứa toàn bộ các luật đang sẵn sàng kích hoạt, cần bộ suy diễn chọn lựa."
    },
    {
      q: "Quá trình chọn một luật duy nhất từ tập tranh chấp để kích hoạt gọi là gì?",
      a: ["A. Lan truyền ràng buộc", "B. Giải quyết tranh chấp (Conflict Resolution)", "C. Hợp nhất vị từ", "D. Skolemization"],
      c: 1,
      e: "Conflict Resolution giải quyết sự tranh chấp giữa các luật khả thi."
    },
    {
      q: "Chiến lược giải quyết tranh chấp 'Khúc xạ' (Refraction) nhằm mục đích gì?",
      a: ["A. Ưu tiên luật có nhiều điều kiện", "B. Tránh lặp vô hạn bằng cách không chạy lại luật trên dữ liệu cũ", "C. Luôn chọn luật đầu tiên", "D. Chọn ngẫu nhiên một luật"],
      c: 1,
      e: "Refraction khóa các luật đã chạy để hệ thống không bị lặp vô tận."
    },
    {
      q: "Chiến lược giải quyết tranh chấp 'Specificity' (Độ chuyên biệt) ưu tiên luật nào?",
      a: ["A. Luật ngắn nhất", "B. Luật có điều kiện chi tiết hơn (nhiều vế AND hơn)", "C. Luật nằm cuối danh sách", "D. Luật sử dụng dữ liệu cũ nhất"],
      c: 1,
      e: "Specificity ưu tiên luật cụ thể, chuyên sâu vì nó khớp sát hơn với tình huống thực tế."
    },
    {
      q: "Chiến lược giải quyết tranh chấp 'Recency' ưu tiên luật nào?",
      a: ["A. Luật xuất hiện sớm nhất", "B. Luật dùng sự kiện mới được thêm gần đây nhất", "C. Luật có ít điều kiện nhất", "D. Luật do người dùng chọn"],
      c: 1,
      e: "Recency ưu tiên các dữ kiện mới sinh ra để bám sát luồng suy luận hiện thời."
    },
    {
      q: "Trong hệ luật sinh, 'Working Memory' (Bộ nhớ làm việc) chứa thông tin gì?",
      a: ["A. Các luật tĩnh của hệ chuyên gia", "B. Trạng thái và sự kiện động hiện tại của bài toán", "C. Hệ điều hành máy tính", "D. Điểm số của người chơi"],
      c: 1,
      e: "Working Memory lưu trữ dữ liệu thực tế tạm thời phục vụ quá trình suy diễn."
    },
    {
      q: "Trong đồ thị AND-OR của hệ chuyên gia, nút AND chỉ ra điều gì?",
      a: ["A. Chỉ cần 1 điều kiện con đúng", "B. Phải thỏa mãn đồng thời tất cả điều kiện con", "C. Phép toán phủ định", "D. Trạng thái kết thúc"],
      c: 1,
      e: "Nút AND yêu cầu tất cả các nhánh con đều phải đúng."
    },
    {
      q: "Thành phần 'Blackboard' trong kiến trúc bảng đen đóng vai trò gì?",
      a: ["A. Là màn hình hiển thị kết quả", "B. Vùng nhớ dùng chung chứa trạng thái bài toán cho các nguồn lực", "C. Là bộ lập lịch tác vụ", "D. Là tập luật IF-THEN tĩnh"],
      c: 1,
      e: "Blackboard là vùng nhớ chung để các mô-đun tri thức (Knowledge Sources) giao tiếp và ghi nhận tiến độ giải bài toán."
    },
    {
      q: "Kiến trúc Blackboard phù hợp nhất với loại ứng dụng nào?",
      a: ["A. Chỉ chơi game đơn giản", "B. Hệ chuyên gia phức tạp cần sự cộng tác của nhiều mô-đun", "C. Tìm kiếm đường đi ngắn nhất bản đồ", "D. Bộ lọc thư rác đơn giản"],
      c: 1,
      e: "Kiến trúc Blackboard cho phép tích hợp nhiều nguồn tri thức đa dạng cùng giải bài toán lớn."
    },
    {
      q: "Chu trình hoạt động của hệ luật sinh (Recognize-Act Cycle) lặp lại theo thứ tự nào?",
      a: ["A. Hành động &rarr; Nhận dạng &rarr; Chọn luật", "B. Nhận dạng (đối sánh) &rarr; Giải quyết tranh chấp &rarr; Hành động", "C. Chọn lọc &rarr; Lai ghép &rarr; Đột biến", "D. Phủ định mục tiêu &rarr; Hợp giải"],
      c: 1,
      e: "Recognize-Act Cycle bắt đầu bằng đối sánh tìm luật, chọn luật tối ưu, thực thi luật rồi lặp lại."
    },
    {
      q: "Sự khác biệt chính về điểm bắt đầu giữa suy diễn tiến và suy diễn lùi là gì?",
      a: ["A. Tiến bắt đầu từ đích, Lùi bắt đầu từ gốc", "B. Tiến bắt đầu từ sự kiện; Lùi bắt đầu từ mục tiêu giả định", "C. Tiến dùng Priority Queue, Lùi dùng Stack", "D. Không có sự khác biệt"],
      c: 1,
      e: "Forward chaining bắt đầu từ Facts; Backward chaining bắt đầu từ Goal."
    },
    // Bổ sung các câu hỏi chất lượng cao riêng biệt cho chương 6
    {
      q: "Tại sao thuật toán suy diễn tiến có nguy cơ rơi vào vòng lặp vô hạn?",
      a: ["A. Do vế phải của luật liên tục thêm các sự kiện cũ vào bộ nhớ", "B. Do không có mục tiêu cụ thể để thuật toán dừng lại đối sánh", "C. Do các luật sinh không có cấu trúc vế trái dạng hội logic", "D. Do bộ nhớ làm việc Working Memory bị giới hạn cứng dung lượng"],
      c: 1,
      e: "Suy diễn tiến chạy vô định hướng cho đến khi không sinh thêm sự kiện mới. Nếu có các luật lặp, nó sẽ chạy vô hạn nếu không có cơ chế chặn (như khúc xạ)."
    },
    {
      q: "Bộ lọc Rete (Rete algorithm) được phát triển nhằm mục đích gì?",
      a: ["A. Đột biến các nhiễm sắc thể có độ thích nghi kém trong quần thể", "B. Tăng tốc đối sánh sự kiện với hàng ngàn luật trong hệ luật sinh", "C. Chứng minh tính đầy đủ của thủ tục hợp giải vị từ bậc nhất", "D. Cắt tỉa cây trò chơi Minimax của tầng đối thủ MIN nhanh nhất"],
      c: 1,
      e: "Thuật toán Rete là thuật toán so khớp mẫu rất nổi tiếng, giúp tăng tốc giai đoạn đối sánh (match phase) bằng cách xây dựng mạng đồ thị lọc."
    },
    {
      q: "Trong Backward Chaining, nếu mục tiêu hiện tại là một sự kiện đã có trong Fact Base thì:",
      a: ["A. Thuật toán dừng lại báo lỗi mâu thuẫn hệ thống", "B. Mục tiêu đó lập tức được coi là đã chứng minh thành công", "C. Thuật toán tiếp tục truy tìm các luật có kết luận chứa nó", "D. Sự kiện đó sẽ bị xoá khỏi bộ nhớ làm việc Working Memory"],
      c: 1,
      e: "Nếu mục tiêu đã nằm trong cơ sở sự kiện (Fact Base), nhánh suy diễn đó dừng lại thành công mà không cần phân rã thêm."
    },
    {
      q: "Trong đồ thị AND-OR của Backward Chaining, một nút OR được chứng minh thành công khi nào?",
      a: ["A. Chỉ khi tất cả các nút con của nó được chứng minh thành công", "B. Khi có ít nhất một nút con của nó được chứng minh thành công", "C. Khi nút đó không có bất kỳ nút con nào kề bên trên đồ thị", "D. Khi giá trị của nút đó được gán bằng hằng số Skolem tương ứng"],
      c: 1,
      e: "Nút OR đại diện cho các phương án thay thế, chỉ cần một nhánh con thành công là nút cha thành công."
    },
    {
      q: "Chiến lược suy diễn lùi (Backward Chaining) tương đương với phương pháp duyệt đồ thị nào?",
      a: ["A. Duyệt theo chiều rộng BFS khởi đầu từ gốc trạng thái", "B. Duyệt cây quay lui (Depth-First Search với Backtracking)", "C. Tìm kiếm chi phí đồng nhất UCS sử dụng Priority Queue", "D. Tìm kiếm cục bộ leo đồi kết hợp khởi động lại ngẫu nhiên"],
      c: 1,
      e: "Backward chaining phân rã mục tiêu thành các mục tiêu con dạng cây đệ quy và thử chứng minh từng nhánh, tương đương DFS quay lui."
    },
    {
      q: "Điểm yếu lớn nhất của thuật toán suy diễn lùi là gì?",
      a: ["A. Không thể giải quyết các bài toán có ít mục tiêu giả định", "B. Có thể đi vào vòng lặp vô hạn nếu tập luật có tính chu trình", "C. Đòi hỏi bộ nhớ không gian RAM tăng lũy thừa theo số luật sinh", "D. Hoàn toàn không hỗ trợ các luật sinh có chứa các biến vị từ"],
      c: 1,
      e: "Nếu tập luật chứa các luật chu trình (ví dụ: A -> B, B -> A), suy diễn lùi đệ quy sẽ bị kẹt vô hạn nếu không lưu vết các mục tiêu đang chứng minh."
    },
    {
      q: "Chiến lược giải quyết tranh chấp 'FIFO' (First In, First Out) hoạt động theo quy tắc nào?",
      a: ["A. Ưu tiên luật có độ dài vế trái ngắn nhất trong tập tranh chấp", "B. Ưu tiên kích hoạt luật xuất hiện đầu tiên trong danh sách luật", "C. Ưu tiên kích hoạt luật sử dụng dữ liệu mới nhất trong Working Memory", "D. Chọn ngẫu nhiên hoàn toàn một luật khả thi để thực thi hành động"],
      c: 1,
      e: "FIFO (hoặc Rule Order) đơn giản là chọn luật đầu tiên thỏa mãn theo thứ tự khai báo trong cơ sở luật."
    },
    {
      q: "Trong hệ luật sinh, hành động ở vế phải (THEN) KHÔNG bao gồm tác vụ nào sau đây?",
      a: ["A. Thêm một sự kiện mới vào bộ nhớ làm việc Working Memory", "B. Xoá một sự kiện hiện có khỏi bộ nhớ làm việc Working Memory", "C. Sửa đổi trực tiếp mã nguồn của các luật sinh trong Rule Base", "D. Thực thi các lệnh hiển thị kết quả hoặc cảnh báo cho người dùng"],
      c: 2,
      e: "Hành động của luật chỉ tương tác với bộ nhớ sự kiện động (Working Memory) và môi trường bên ngoài, không tự động sửa đổi cơ sở luật tĩnh (Rule Base)."
    },
    {
      q: "Tại sao suy diễn tiến thường tạo ra nhiều sự kiện không liên quan đến mục tiêu?",
      a: ["A. Vì nó chạy đệ quy lùi sâu vào các nhánh lá của cây tìm kiếm", "B. Vì nó chạy mù hướng dữ liệu, sinh mọi kết luận có thể từ sự kiện", "C. Vì nó sử dụng hàm đánh giá tĩnh Heuristic có sai số quá lớn", "D. Vì nó loại bỏ các sự kiện cũ khỏi Working Memory liên tục"],
      c: 1,
      e: "Suy diễn tiến (data-driven) áp dụng tất cả các luật khớp dữ liệu hiện có mà không có thông tin định hướng mục tiêu cụ thể, dẫn đến sinh dư thừa sự kiện."
    },
    {
      q: "Hệ chuyên gia OPS5 nổi tiếng sử dụng ngôn ngữ và cơ chế suy diễn nào?",
      a: ["A. Sử dụng ngôn ngữ Prolog và cơ chế suy diễn lùi đệ quy", "B. Sử dụng ngôn ngữ Lisp và cơ chế suy diễn tiến dựa trên Rete", "C. Sử dụng ngôn ngữ C++ và cơ chế giải thuật di truyền tối ưu", "D. Sử dụng ngôn ngữ Assembly và cơ chế tìm kiếm đồ thị AND-OR"],
      c: 1,
      e: "OPS5 là công cụ xây dựng hệ luật sinh dựa trên Lisp, sử dụng thuật toán Rete để thực thi suy diễn tiến cực nhanh."
    }
  ],

  // CHƯƠNG 7: GIẢI THUẬT DI TRUYỀN (GENETIC ALGORITHM - GA)
  ch7: [
    {
      q: "Giải thuật di truyền (GA) thuộc nhóm thuật toán nào sau đây?",
      a: ["A. Tìm kiếm mù", "B. Thuật toán tối ưu hóa tiến hóa (Evolutionary Algorithms)", "C. Logic toán học", "D. Hệ luật sinh"],
      c: 1,
      e: "GA là thuật toán tối ưu hóa mô phỏng quá trình tiến hóa sinh học tự nhiên."
    },
    {
      q: "Ai là người đề xuất giải thuật di truyền vào thập niên 1970?",
      a: ["A. Alan Turing", "B. Marvin Minsky", "C. John Holland", "D. John McCarthy"],
      c: 2,
      e: "John Holland giới thiệu giải thuật di truyền đầu tiên trong cuốn sách của ông năm 1975."
    },
    {
      q: "Khái niệm 'Individual' (Cá thể) trong GA đại diện cho điều gì?",
      a: ["A. Tập hợp các luật IF-THEN", "B. Một phương án nghiệm tiềm năng của bài toán tối ưu", "C. Một gene đơn lẻ", "D. Thế hệ tiến hóa hiện tại"],
      c: 1,
      e: "Mỗi cá thể trong quần thể đại diện cho một nghiệm ứng viên."
    },
    {
      q: "Khái niệm 'Population' (Quần thể) trong GA nghĩa là gì?",
      a: ["A. Số lượng thế hệ tối đa", "B. Tập hợp nhiều cá thể tại một thời điểm", "C. Một chuỗi bit toàn số 1", "D. Hàm đánh giá chất lượng"],
      c: 1,
      e: "Quần thể là tập các nghiệm ứng viên được duy trì qua mỗi thế hệ."
    },
    {
      q: "Hàm 'Fitness' (Độ thích nghi) trong GA đóng vai trò gì?",
      a: ["A. Đo thời gian chạy của thuật toán", "B. Đánh giá độ tốt của cá thể đối với bài toán mục tiêu", "C. Xác định số lượng biến", "D. Chọn ngẫu nhiên hằng số Skolem"],
      c: 1,
      e: "Hàm Fitness chính là hàm mục tiêu cần tối đa/tối thiểu hóa, dùng để xếp hạng các nghiệm."
    },
    {
      q: "Mối quan hệ giữa 'Genotype' (Kiểu gen) và 'Phenotype' (Kiểu hình) trong GA là gì?",
      a: ["A. Kiểu gen là giá trị thực tế; Kiểu hình là chuỗi nhị phân", "B. Kiểu gen là cấu trúc mã hóa; Kiểu hình là giá trị thực tế của nghiệm", "C. Chúng hoàn toàn độc lập và không liên quan", "D. Kiểu gen là hàm Fitness"],
      c: 1,
      e: "Genotype là biểu diễn trong máy tính (chuỗi bit, mảng...), Phenotype là ý nghĩa thực tế của nghiệm đó."
    },
    {
      q: "Phương pháp mã hóa nào biểu diễn nhiễm sắc thể bằng chuỗi bit 101101?",
      a: ["A. Permutation Encoding", "B. Binary Encoding (Mã hóa nhị phân)", "C. Value Encoding", "D. Tree Encoding"],
      c: 1,
      e: "Chuỗi bit 0/1 thuộc về phương pháp mã hóa nhị phân."
    },
    {
      q: "Mã hóa hoán vị (Permutation Encoding) thường áp dụng cho bài toán nào?",
      a: ["A. Tối ưu hóa hàm số liên tục", "B. Bài toán người bán hàng TSP hoặc lập lịch Scheduling", "C. Bài toán One-Max nhị phân", "D. Nhận diện hình ảnh"],
      c: 1,
      e: "TSP cần tìm thứ tự đi qua các thành phố mà không trùng lặp, rất hợp với mã hóa hoán vị."
    },
    {
      q: "Mục tiêu của bước 'Selection' (Chọn lọc) trong GA là gì?",
      a: ["A. Tạo đột biến gen", "B. Lựa chọn cá thể tốt làm cha mẹ để lai ghép", "C. Khởi tạo ngẫu nhiên chuỗi bit", "D. Loại bỏ toàn bộ quần thể cũ"],
      c: 1,
      e: "Chọn lọc giữ lại các cá thể khỏe mạnh (fitness cao) để bảo tồn đặc tính tốt."
    },
    {
      q: "Trong 'Roulette Wheel Selection' (Chọn lọc bánh xe roulette), cơ chế chọn dựa trên gì?",
      a: ["A. Chọn hoàn toàn ngẫu nhiên đều nhau", "B. Xác suất chọn tỉ lệ thuận với Fitness của cá thể", "C. Luôn chọn cá thể có thứ hạng cao nhất", "D. Chỉ chọn cá thể yếu nhất"],
      c: 1,
      e: "Fitness càng lớn thì góc chiếm trên bánh xe càng rộng, xác suất quay trúng càng cao."
    },
    {
      q: "Cơ chế của 'Tournament Selection' (Chọn lọc đấu giải) hoạt động ra sao?",
      a: ["A. Chọn ngẫu nhiên k cá thể, sau đó lấy cá thể tốt nhất trong nhóm đó", "B. Cho tất cả cá thể đấu loại trực tiếp", "C. Sắp xếp thứ hạng toàn bộ quần thể", "D. Quay bánh xe tròn"],
      c: 0,
      e: "Tournament selection chọn ngẫu nhiên một nhóm nhỏ k cá thể và lấy cá thể tốt nhất trong nhóm đó."
    },
    {
      q: "Mục tiêu của bước 'Crossover' (Lai ghép) trong GA là gì?",
      a: ["A. Thay đổi ngẫu nhiên một gene", "B. Kết hợp thông tin của hai cha mẹ để tạo ra con mới", "C. Đánh giá độ thích nghi của quần thể", "D. Sắp xếp thứ hạng cá thể"],
      c: 1,
      e: "Lai ghép kết hợp các phần gen tốt của bố và mẹ nhằm hi vọng tạo ra tổ hợp gen tốt hơn ở con."
    },
    {
      q: "Lai ghép một điểm cắt (One-point Crossover) thực hiện như thế nào?",
      a: ["A. Chọn điểm cắt và hoán đổi đoạn gen phía sau điểm cắt", "B. Đổi chỗ tất cả các bit", "C. Chọn ngẫu nhiên các bit với xác suất 0.5", "D. Thay đổi giá trị bit từ 0 thành 1"],
      c: 0,
      e: "Một điểm cắt chia nhiễm sắc thể làm 2 đoạn và trao đổi đoạn đuôi giữa hai bố mẹ."
    },
    {
      q: "Mục tiêu cốt lõi của bước 'Mutation' (Đột biến) trong GA là gì?",
      a: ["A. Giữ nguyên bộ gen của thế hệ trước", "B. Tăng độ đa dạng quần thể và tránh kẹt cực trị cục bộ (Local Optima)", "C. Tăng tốc độ tính toán gradient", "D. Khử bỏ lượng từ tồn tại"],
      c: 1,
      e: "Đột biến tạo ra các gen mới chưa từng có, giúp quần thể đa dạng và có thể nhảy ra khỏi hố cực trị cục bộ."
    },
    {
      q: "Xác suất đột biến (Mutation Rate - Pm) thường được thiết lập ở mức nào?",
      a: ["A. Rất cao (Pm > 0.9)", "B. Rất nhỏ (thường Pm < 0.1)", "C. Luôn luôn bằng 0.5", "D. Bằng 0"],
      c: 1,
      e: "Xác suất đột biến phải nhỏ để tránh phá hủy cấu trúc gen tốt đang tiến hóa tốt."
    },
    {
      q: "Đột biến đảo bit (Bit Flip Mutation) thực hiện như thế nào?",
      a: ["A. Đổi chỗ hai vị trí gen", "B. Đảo giá trị bit 0 sang 1 hoặc ngược lại", "C. Đảo ngược toàn bộ chuỗi gen", "D. Thay thế bit bằng số thực"],
      c: 1,
      e: "Bit Flip đổi ngược trạng thái nhị phân của bit."
    },
    {
      q: "Đột biến hoán đổi (Swap Mutation) thường áp dụng cho loại mã hóa nào?",
      a: ["A. Mã hóa nhị phân", "B. Mã hóa hoán vị (ví dụ: bài toán TSP)", "C. Mã hóa dạng cây", "D. Logic vị từ"],
      c: 1,
      e: "TSP dùng hoán vị các thành phố, đột biến đổi chỗ hai thành phố trong hành trình là hợp lý."
    },
    {
      q: "Khái niệm nào có thể dùng làm điều kiện dừng cho giải thuật di truyền?",
      a: ["A. Đạt số thế hệ tối đa", "B. Quần thể bị hội tụ", "C. Đạt được giá trị Fitness mong muốn", "D. Tất cả các phương án trên"],
      c: 3,
      e: "GA dừng khi đạt mục tiêu, hết thời gian/thế hệ hoặc quần thể không thể tiến hóa thêm (hội tụ)."
    },
    {
      q: "Ưu điểm nổi bật của GA so với các thuật toán tối ưu hóa dựa trên Gradient (đạo hàm) là gì?",
      a: ["A. Chạy nhanh hơn các bài toán đơn giản", "B. Không yêu cầu đạo hàm, chạy tốt trên hàm không liên tục", "C. Luôn tìm thấy nghiệm tối ưu tuyệt đối 100%", "D. Không cần thiết lập siêu tham số"],
      c: 1,
      e: "GA là black-box optimization, chỉ cần giá trị hàm mục tiêu (Fitness) mà không quan tâm đạo hàm."
    },
    {
      q: "Khái niệm 'Neuroevolution' chỉ ứng dụng nào của GA?",
      a: ["A. Thiết kế chip bán dẫn", "B. Dùng GA tối ưu trọng số hoặc cấu trúc mạng nơ-ron", "C. Mô phỏng bệnh lý thần kinh", "D. Lọc email spam"],
      c: 1,
      e: "Neuroevolution dùng GA để tiến hóa mạng nơ-ron thay vì dùng các thuật toán gradient truyền thống."
    },
    // Bổ sung các câu hỏi chất lượng cao riêng biệt cho chương 7
    {
      q: "Hiện tượng hội tụ sớm (Premature Convergence) trong GA là gì?",
      a: ["A. Quần thể đạt được nghiệm tối ưu toàn cục chỉ sau rất ít thế hệ", "B. Các cá thể trở nên quá giống nhau và kẹt tại cực trị cục bộ", "C. Tốc độ tính toán của máy tính tăng lên nhanh chóng sau mỗi vòng lặp", "D. Các nhiễm sắc thể tự động loại bỏ các đoạn gen mã hóa số thực"],
      c: 1,
      e: "Hội tụ sớm xảy ra khi các cá thể tốt vượt trội nhanh chóng chiếm lĩnh quần thể làm mất tính đa dạng gen, khiến thuật toán kẹt tại local optimum."
    },
    {
      q: "Thuật ngữ 'Elitism' (Bảo tồn ưu tú) trong GA có ý nghĩa như thế nào?",
      a: ["A. Sao chép trực tiếp các cá thể tốt nhất sang thế hệ sau không qua lai ghép", "B. Chỉ cho phép các cá thể có độ thích nghi cao nhất được đột biến gen", "C. Thiết lập xác suất đột biến gen tăng dần theo thời gian chạy thuật toán", "D. Loại bỏ hoàn toàn các cá thể có kiểu gen nhị phân chứa nhiều bit 0"],
      c: 0,
      e: "Elitism sao chép một số ít cá thể tốt nhất trực tiếp sang thế hệ tiếp theo để đảm bảo không bị mất các gen tối ưu trong quá trình lai ghép/đột biến."
    },
    {
      q: "Trong phép lai ghép hai điểm cắt (Two-point Crossover), con cái được tạo ra như thế nào?",
      a: ["A. Chọn hai điểm cắt ngẫu nhiên, trao đổi đoạn gen nằm giữa hai điểm cắt đó", "B. Đổi giá trị của tất cả các gen nằm giữa hai điểm cắt được chọn ngẫu nhiên", "C. Hoán vị vị trí của hai điểm cắt của cha mẹ trên nhiễm sắc thể tương ứng", "D. Chọn ngẫu nhiên các gen từ cha hoặc mẹ tại mỗi vị trí với xác suất bằng nhau"],
      c: 0,
      e: "Lai hai điểm chọn ra hai vị trí cắt, và tiến hành trao đổi đoạn gen nằm giữa hai vị trí này giữa hai nhiễm sắc thể bố mẹ."
    },
    {
      q: "Lai ghép đồng nhất (Uniform Crossover) hoạt động dựa trên cơ chế nào?",
      a: ["A. Chỉ cắt nhiễm sắc thể ở đúng vị trí chính giữa nhiễm sắc thể", "B. Quyết định chọn gen từ cha hay mẹ tại mỗi vị trí dựa trên mặt nạ lai", "C. Hoán đổi toàn bộ nhiễm sắc thể của bố và mẹ cho nhau không thay đổi", "D. Thay đổi ngẫu nhiên giá trị của các bit gen trên nhiễm sắc thể của con"],
      c: 1,
      e: "Uniform crossover dùng một mặt nạ nhị phân ngẫu nhiên (cùng độ dài gen) để quyết định con nhận gen từ bố hay mẹ tại từng vị trí tương ứng."
    },
    {
      q: "Tại sao mã hóa số thực (Real-value Encoding) đôi khi tốt hơn mã hóa nhị phân?",
      a: ["A. Vì mã hóa số thực giúp loại bỏ hoàn toàn các bước đột biến gen", "B. Vì nó biểu diễn tự nhiên các bài toán tối ưu biến số liên tục", "C. Vì mã hóa số thực không cần tính toán độ thích nghi (Fitness)", "D. Vì mã hóa số thực chạy tiết kiệm bộ nhớ RAM hơn nhị phân gấp nhiều lần"],
      c: 1,
      e: "Đối với bài toán tối ưu trên miền liên tục (như tìm x, y thực), mã hóa số thực tránh được sai số làm tròn khi giải mã nhị phân và biểu diễn trực quan hơn."
    },
    {
      q: "Trong bài toán lập lịch (Scheduling) bằng GA, nhiễm sắc thể thường mã hóa cái gì?",
      a: ["A. Danh sách các tài nguyên phần cứng máy tính cần sử dụng", "B. Thứ tự phân bổ các công việc/thời gian trên các máy", "C. Tổng chi phí thời gian hoàn thành toàn bộ các công việc", "D. Số lượng các đột biến xảy ra tại mỗi thế hệ di truyền"],
      c: 1,
      e: "Nhiễm sắc thể thường biểu diễn hoán vị thứ tự thực hiện tác vụ để bảo đảm không trùng lặp tài nguyên thời gian."
    },
    {
      q: "Áp lực chọn lọc (Selection Pressure) trong GA quá cao sẽ dẫn đến hậu quả gì?",
      a: ["A. Thuật toán không thể tìm thấy bất kỳ lời giải nào của bài toán", "B. Quần thể mất đa dạng nhanh chóng và dễ bị hội tụ sớm", "C. Thời gian tính độ thích nghi (Fitness) tăng lên gấp nhiều lần", "D. Xác suất đột biến gen tự động giảm về bằng không"],
      c: 1,
      e: "Áp lực chọn lọc quá cao làm các cá thể trung bình bị loại bỏ quá nhanh, quần thể nhanh chóng bị đồng nhất bởi các cá thể tốt cục bộ đầu tiên, gây ra premature convergence."
    },
    {
      q: "Phương pháp chọn lọc xếp hạng (Rank Selection) giải quyết vấn đề gì của Roulette Wheel?",
      a: ["A. Giảm thiểu chi phí tính toán độ thích nghi của các cá thể", "B. Giảm sự áp đảo của cá thể siêu thích nghi trong các thế hệ đầu", "C. Loại bỏ hoàn toàn các cá thể có độ thích nghi nhỏ hơn trung bình", "D. Đảm bảo mọi cá thể đều có cơ hội được chọn lựa tương đương nhau"],
      c: 1,
      e: "Roulette Wheel dễ bị cá thể có fitness cực lớn chiếm gần hết bánh xe ở thế hệ đầu. Rank selection sắp xếp thứ hạng cá thể và gán xác suất theo hạng, giúp điều hòa selection pressure."
    },
    {
      q: "Trong GA, khái niệm 'Schema' (Lược đồ gen) dùng để làm gì?",
      a: ["A. Thiết lập sơ đồ lưu trữ các cá thể trong bộ nhớ đệm máy tính", "B. Công cụ lý thuyết để phân tích sự lan truyền của các mẫu gen tốt", "C. Một dạng thuật toán đột biến đặc biệt dành riêng cho dạng cây", "D. Bản đồ trực quan hóa quá trình tiến hóa của quần thể qua các thế hệ"],
      c: 1,
      e: "Schema lý thuyết (đề xuất bởi Holland) đại diện cho các khuôn mẫu chuỗi gen (ví dụ: 1*0**1), dùng để chứng minh định lý Schema Theorem về sự phát triển của các mẫu gen tốt."
    },
    {
      q: "Đặc tính nào sau đây là bắt buộc khi thiết kế một bài toán để giải bằng GA?",
      a: ["A. Hàm mục tiêu phải là hàm liên tục và có đạo hàm bậc nhất", "B. Phải thiết kế được cơ chế mã hóa nghiệm và hàm đánh giá độ tốt", "C. Phải sử dụng cấu trúc nhiễm sắc thể dạng chuỗi nhị phân 0 và 1", "D. Quần thể ban đầu bắt buộc phải chứa các nghiệm tối ưu thực tế"],
      c: 1,
      e: "GA chỉ cần hai yếu tố cốt lõi: cơ chế mã hóa nghiệm (nhiễm sắc thể) và hàm đánh giá (Fitness) để đo chất lượng nghiệm."
    }
  ]
,
  // BÀI TẬP TÍNH TOÁN TỔNG HỢP
  ch8: [
    {
        "q": "Cho không gian trạng thái là một cây nhị phân đều có độ sâu $d = 4$ (gốc ở mức 0). Tìm kiếm theo chiều rộng (BFS) sẽ cần duyệt tối đa bao nhiêu nút trước khi tìm thấy nút mục tiêu nằm ở mức sâu nhất (mức 4), giả sử mục tiêu nằm ở cuối cùng bên phải của mức này?",
        "a": [
            "A. 15 nút",
            "B. 31 nút",
            "C. 16 nút",
            "D. 30 nút"
        ],
        "c": 1,
        "e": "Tổng số nút của cây nhị phân đều có độ sâu 4 là $1 + 2 + 4 + 8 + 16 = 31$. Vì nút mục tiêu nằm ở cuối cùng bên phải của mức sâu nhất, BFS phải duyệt qua toàn bộ cây, tương đương với 31 nút."
    },
    {
        "q": "Một robot di chuyển trên lưới ô vuông. Từ ô $(x, y)$, robot có thể đi sang 4 ô lân cận với chi phí mỗi bước là 1. Nếu sử dụng thuật toán Dijkstra (hoặc UCS) tìm đường đi ngắn nhất từ ô $(0,0)$ đến $(3,4)$, chi phí đường đi tối ưu là bao nhiêu?",
        "a": [
            "A. 5",
            "B. 7",
            "C. 12",
            "D. 25"
        ],
        "c": 1,
        "e": "Chi phí đường đi ngắn nhất (khoảng cách Manhattan) là $|3-0| + |4-0| = 3 + 4 = 7$ bước, với chi phí mỗi bước là 1, tổng chi phí tối ưu là 7."
    },
    {
        "q": "Cho đồ thị có trạng thái gốc $S$, trạng thái đích $G$. Có đường đi $S \\rightarrow A \\rightarrow G$ với chi phí tương ứng là $c(S,A)=3, c(A,G)=4$, và đường đi $S \\rightarrow B \\rightarrow G$ với $c(S,B)=2, c(B,G)=6$. Thuật toán Tìm kiếm chi phí đồng nhất (UCS) sẽ chọn đường đi nào và tổng chi phí là bao nhiêu?",
        "a": [
            "A. Chọn $S \\rightarrow A \\rightarrow G$ với chi phí 7",
            "B. Chọn $S \\rightarrow B \\rightarrow G$ với chi phí 8",
            "C. Chọn $S \\rightarrow A \\rightarrow G$ với chi phí 8",
            "D. Chọn $S \\rightarrow B \\rightarrow G$ với chi phí 7"
        ],
        "c": 0,
        "e": "UCS duyệt các đường đi theo thứ tự chi phí tích lũy tăng dần. Đường đi $S \\rightarrow A \\rightarrow G$ có tổng chi phí $3 + 4 = 7$. Đường đi $S \\rightarrow B \\rightarrow G$ có chi phí $2 + 6 = 8$. UCS sẽ chọn đường đi tối ưu là $S \\rightarrow A \\rightarrow G$ với chi phí 7."
    },
    {
        "q": "Trong thuật toán Tìm kiếm sâu giới hạn (DLS) với giới hạn độ sâu $L = 2$ áp dụng trên cây tìm kiếm có hệ số rẽ nhánh $b = 3$. Số lượng trạng thái tối đa được sinh ra (không tính nút gốc) là bao nhiêu?",
        "a": [
            "A. 9 trạng thái",
            "B. 12 trạng thái",
            "C. 13 trạng thái",
            "D. 15 trạng thái"
        ],
        "c": 1,
        "e": "Với gốc ở mức 0, mức 1 sinh ra $b = 3$ nút. Mỗi nút ở mức 1 sinh tiếp $b = 3$ nút ở mức 2, tổng cộng ở mức 2 có $3 \\times 3 = 9$ nút. Số trạng thái tối đa được sinh ra không tính gốc là $3 + 9 = 12$ trạng thái."
    },
    {
        "q": "Thuật toán Tìm kiếm sâu lặp (IDDFS) duyệt đến độ sâu mục tiêu là $d = 3$. Giả sử cây tìm kiếm có hệ số rẽ nhánh $b = 2$. Nút gốc (mức 0) được mở bao nhiêu lần trong suốt quá trình chạy thuật toán?",
        "a": [
            "A. 1 lần",
            "B. 2 lần",
            "C. 3 lần",
            "D. 4 lần"
        ],
        "c": 3,
        "e": "IDDFS chạy lặp DFS với các giới hạn độ sâu từ $L = 0$ đến $L = d$. Tại mỗi lần lặp, thuật toán bắt đầu lại từ gốc. Với $d=3$, các vòng lặp là $L=0, 1, 2, 3$. Do đó nút gốc được mở đúng $3 - 0 + 1 = 4$ lần."
    },
    {
        "q": "Một bài toán Tám quân hậu (8-Queens) có số lượng cấu hình bàn cờ tối đa có thể có (nếu xếp ngẫu nhiên 8 quân hậu vào 64 ô mà không có ràng buộc nào trước) là bao nhiêu?",
        "a": [
            "A. $64^8$",
            "B. $C_{64}^{8} \\approx 4.426 \\times 10^9$",
            "C. $8! = 40,320$",
            "D. $8^8 \\approx 16.77 \\times 10^6$"
        ],
        "c": 1,
        "e": "Xếp 8 quân hậu vào 64 ô không trùng nhau tương đương chọn tổ hợp chập 8 của 64, ký hiệu là $C_{64}^8$ (khoảng 4.4 tỷ cấu hình)."
    },
    {
        "q": "Với bài toán 8-puzzle (khung lưới $3 \\times 3$), số lượng trạng thái phân biệt trong không gian tìm kiếm đầy đủ là bao nhiêu?",
        "a": [
            "A. $9^9$",
            "B. $9! = 362,880$",
            "C. $9! / 2 = 181,440$",
            "D. $3^9 = 19,683$"
        ],
        "c": 1,
        "e": "Không gian tìm kiếm chứa tất cả các hoán vị xếp 9 ô (8 ô số + 1 ô trống) vào 9 vị trí, bằng $9! = 362,880$ trạng thái (chú ý chỉ có một nửa trong số này là giải được, nhưng tổng số trạng thái hình thức là $9!$)."
    },
    {
        "q": "Trong tìm kiếm Heuristic $A^*$, tại nút hiện tại $n$, ta có chi phí đi từ gốc $g(n) = 12$ và hàm đánh giá Heuristic đến đích $h(n) = 8$. Giá trị hàm đánh giá $f(n)$ của nút này là bao nhiêu?",
        "a": [
            "A. 4",
            "B. 20",
            "C. 96",
            "D. 1.5"
        ],
        "c": 1,
        "e": "Công thức của thuật toán $A^*$ là $f(n) = g(n) + h(n) = 12 + 8 = 20$."
    },
    {
        "q": "Hàm Heuristic $h(n)$ được gọi là chấp nhận được (admissible) khi nào? Biết $h^*(n)$ là chi phí thực tế tối ưu từ $n$ đến đích.",
        "a": [
            "A. $h(n) \\ge h^*(n)$ với mọi nút $n$",
            "B. $h(n) \\le h^*(n)$ với mọi nút $n$",
            "C. $h(n) = g(n) + h^*(n)$",
            "D. $h(n) = 0$ với mọi nút $n$"
        ],
        "c": 1,
        "e": "Hàm heuristic chấp nhận được khi nó không bao giờ đánh giá cao hơn chi phí thực tế để đến đích, tức là $h(n) \\le h^*(n)$."
    },
    {
        "q": "Cho hàm Heuristic $h(n)$ nhất quán (consistent). Nếu chi phí bước đi từ nút $n$ sang nút kế tiếp $n'$ là $c(n, a, n') = 4$ và Heuristic tại $n'$ là $h(n') = 7$. Giá trị của $h(n)$ tối đa có thể đạt được là bao nhiêu?",
        "a": [
            "A. 3",
            "B. 7",
            "C. 11",
            "D. 28"
        ],
        "c": 2,
        "e": "Tính nhất quán đòi hỏi Heuristic thỏa mãn bất đẳng thức tam giác: $h(n) \\le c(n, a, n') + h(n')$. Do đó $h(n) \\le 4 + 7 = 11$. Vậy giá trị tối đa của $h(n)$ là 11."
    },
    {
        "q": "Cho ba nút $A, B, C$ trong hàng đợi ưu tiên của thuật toán Greedy Best-First Search với giá trị Heuristic tương ứng là $h(A) = 15, h(B) = 8, h(C) = 12$. Chi phí thực tế tích lũy là $g(A) = 2, g(B) = 10, g(C) = 5$. Thuật toán sẽ chọn nút nào để mở tiếp theo?",
        "a": [
            "A. Nút A",
            "B. Nút B",
            "C. Nút C",
            "D. Cả B và C"
        ],
        "c": 1,
        "e": "Greedy Best-First Search chỉ chọn nút có Heuristic nhỏ nhất để phát triển, bất chấp chi phí thực tế $g(n)$. Vì $h(B) = 8$ là nhỏ nhất nên nút B sẽ được chọn."
    },
    {
        "q": "Một cây trò chơi Minimax có gốc là nút MAX. Mức tiếp theo chứa hai nút MIN là A và B. Nút A có các con có giá trị lần lượt là 3, 5. Nút B có các con có giá trị lần lượt là 2, 9. Giá trị tối ưu tại nút gốc là bao nhiêu?",
        "a": [
            "A. 2",
            "B. 3",
            "C. 5",
            "D. 9"
        ],
        "c": 1,
        "e": "Tại mức MIN: Giá trị nút A là $\\min(3, 5) = 3$. Giá trị nút B là $\\min(2, 9) = 2$. Tại gốc MAX: Chọn $\\max(V(A), V(B)) = \\max(3, 2) = 3$."
    },
    {
        "q": "Cho cây trò chơi có gốc MAX. Nhánh trái của gốc dẫn đến nút MIN A, có các lá con là 8 và 6. Nhánh phải dẫn đến nút MIN B. Lá con đầu tiên bên trái của B có giá trị là 4. Thuật toán cắt tỉa Alpha-Beta sẽ làm gì tiếp theo?",
        "a": [
            "A. Duyệt tiếp các lá tiếp theo của B",
            "B. Cắt tỉa tất cả các lá còn lại của B vì giá trị tại B chắc chắn $\\le 4 < 6$",
            "C. Gán giá trị gốc bằng 8",
            "D. Cắt tỉa nhánh trái A"
        ],
        "c": 1,
        "e": "Giá trị của A là $\\min(8, 6) = 6$. Gốc MAX có giá trị ít nhất là 6. Khi duyệt sang B, ta gặp lá đầu tiên là 4. Vì B là nút MIN, giá trị của B sẽ $\\le 4$. Mà $4 < 6$, nên gốc MAX chắc chắn không chọn B. Ta cắt tỉa tất cả các con còn lại của B."
    },
    {
        "q": "Trong bài toán thỏa mãn ràng buộc (CSP) có 3 biến $X_1, X_2, X_3$ với miền giá trị ban đầu tương ứng là $D_1 = {1, 2, 3}, D_2 = {2, 4}, D_3 = {3}$. Ràng buộc là $X_i \\ne X_j$. Sau khi thực hiện kiểm tra phía trước (Forward Checking) dựa trên phép gán $X_3 = 3$, miền giá trị của các biến còn lại thay đổi thế nào?",
        "a": [
            "A. $D_1 = {1, 2}, D_2 = {2, 4}$",
            "B. $D_1 = {1, 2, 3}, D_2 = {2}$",
            "C. $D_1 = {1, 2}, D_2 = {4}$",
            "D. $D_1 = {1, 3}, D_2 = {4}$"
        ],
        "c": 0,
        "e": "Gán $X_3 = 3$ yêu cầu loại bỏ giá trị 3 khỏi miền giá trị của các biến có liên kết ràng buộc với $X_3$. Do đó loại bỏ 3 khỏi $D_1$, miền giá trị còn lại là $D_1 = {1, 2}$. Biến $X_2$ không có 3 trong miền giá trị nên $D_2$ giữ nguyên là ${2, 4}$."
    },
    {
        "q": "Độ đo Entropy của một tập dữ liệu $S$ gồm 8 mẫu tích cực (positive) và 8 mẫu tiêu cực (negative) là bao nhiêu?",
        "a": [
            "A. 0",
            "B. 0.5",
            "C. 1.0",
            "D. 8.0"
        ],
        "c": 2,
        "e": "Tỷ lệ mẫu tích cực là $p_+ = 8/16 = 0.5$, tỷ lệ mẫu tiêu cực là $p_- = 0.5$. Entropy $H(S) = -0.5 \\log_2(0.5) - 0.5 \\log_2(0.5) = 0.5 + 0.5 = 1.0$."
    },
    {
        "q": "Cho tập dữ liệu ban đầu có Entropy $H(S) = 1.0$. Khi phân hoạch tập dữ liệu theo thuộc tính $A$, thu được hai tập con $S_1$ (chiếm 60% dữ liệu) có Entropy $H(S_1) = 0.8$ và $S_2$ (chiếm 40% dữ liệu) có Entropy $H(S_2) = 0.5$. Tính độ tăng thông tin (Information Gain) của thuộc tính A.",
        "a": [
            "A. 0.32",
            "B. 0.68",
            "C. 0.35",
            "D. 0.45"
        ],
        "c": 0,
        "e": "$Gain(S, A) = H(S) - (0.6 \\times H(S_1) + 0.4 \\times H(S_2)) = 1.0 - (0.6 \\times 0.8 + 0.4 \\times 0.5) = 1.0 - (0.48 + 0.20) = 1.0 - 0.68 = 0.32$."
    },
    {
        "q": "Một perceptron có vector trọng số ban đầu $W = [0.3, -0.2]^T$ và bias $b = 0.1$. Với input đầu vào $X = [1.0, 2.0]^T$, tính đầu ra của perceptron trước khi qua hàm kích hoạt dạng bước nhảy (tức là tổng trọng số tích lũy $z = W^T X + b$).",
        "a": [
            "A. 0.2",
            "B. 0.0",
            "C. -0.2",
            "D. 0.1"
        ],
        "c": 1,
        "e": "$z = W^T X + b = (0.3 \\times 1.0) + (-0.2 \\times 2.0) + 0.1 = 0.3 - 0.4 + 0.1 = 0.0$."
    },
    {
        "q": "Cho mạng perceptron một lớp đang học với tốc độ học $\\eta = 0.1$. Vector trọng số hiện tại $W = [0.5, 0.5]^T$. Tại bước này, input là $X = [2.0, 1.0]^T$, nhãn thực tế $y = 1$, nhãn dự báo $\\hat{y} = 0$. Cập nhật vector trọng số mới $W'$ theo quy tắc Delta.",
        "a": [
            "A. $W' = [0.7, 0.6]^T$",
            "B. $W' = [0.3, 0.4]^T$",
            "C. $W' = [0.6, 0.55]^T$",
            "D. $W' = [0.5, 0.5]^T$"
        ],
        "c": 0,
        "e": "Công thức cập nhật: $W' = W + \\eta (y - \\hat{y}) X = [0.5, 0.5]^T + 0.1 \\times (1 - 0) \\times [2.0, 1.0]^T = [0.5, 0.5]^T + [0.2, 0.1]^T = [0.7, 0.6]^T$."
    },
    {
        "q": "Hệ thống lập luận dựa trên mạng ngữ nghĩa có quan hệ kế thừa phân cấp. Nút 'Chim' có thuộc tính 'bay = True'. Nút 'Chim cánh cụt' là con của nút 'Chim' và có thuộc tính 'bay = False'. Nếu truy vấn thuộc tính 'bay' của 'Chim cánh cụt', giá trị trả về là gì?",
        "a": [
            "A. True (Do kế thừa từ lớp cha)",
            "B. False (Do thuộc tính ghi đè tại nút con)",
            "C. Không xác định được",
            "D. Cả True và False"
        ],
        "c": 1,
        "e": "Trong mạng ngữ nghĩa có kế thừa phân cấp, thuộc tính được định nghĩa trực tiếp tại lớp con sẽ ghi đè (override) thuộc tính kế thừa từ lớp cha."
    },
    {
        "q": "Cho biểu thức logic mệnh đề sau: $P \\rightarrow (Q \\lor R)$. Chuyển biểu thức này sang dạng chuẩn hội (CNF).",
        "a": [
            "A. $\\neg P \\lor Q \\lor R$",
            "B. $P \\lor \\neg Q \\lor \\neg R$",
            "C. $\\neg P \\land (Q \\lor R)$",
            "D. $(\\neg P \\lor Q) \\land (\\neg P \\lor R)$"
        ],
        "c": 0,
        "e": "Áp dụng tương đương logic của phép kéo theo: $A \\rightarrow B \\equiv \\neg A \\lor B$. Ta được: $P \\rightarrow (Q \\lor R) \\equiv \\neg P \\lor (Q \\lor R) \\equiv \\neg P \\lor Q \\lor R$."
    },
    {
        "q": "Chuyển biểu thức mệnh đề sau sang dạng chuẩn hội CNF: $\\neg (P \\land Q) \\rightarrow R$.",
        "a": [
            "A. $(\\neg P \\lor \\neg Q) \\lor R$",
            "B. $P \\lor Q \\lor R$",
            "C. $(P \\land Q) \\lor R$",
            "D. $\\neg P \\land \\neg Q \\land R$"
        ],
        "c": 2,
        "e": "$\\neg (P \\land Q) \\rightarrow R \\equiv \\neg (\\neg (P \\land Q)) \\lor R \\equiv (P \\land Q) \\lor R \\equiv (P \\lor R) \\land (Q \\lor R)$. (Dạng CNF là hội của các mệnh đề tuyển)."
    },
    {
        "q": "Phép hợp nhất (Unification) hai biểu thức mệnh đề $P(x, g(y))$ và $P(f(a), z)$ sử dụng phép thế nào dưới đây để thu được biểu thức giống nhau?",
        "a": [
            "A. $\\theta = \\{x/f(a), z/g(y)\\}$",
            "B. $\\theta = \\{x/a, y/z\\}$",
            "C. $\\theta = \\{f(a)/x, g(y)/z\\}$",
            "D. Không thể hợp nhất"
        ],
        "c": 0,
        "e": "Thế biến $x$ bằng $f(a)$ và thế biến $z$ bằng $g(y)$. Khi đó cả hai biểu thức cùng trở thành $P(f(a), g(y))$. Phép thế hợp lệ ghi dưới dạng $\\{x/f(a), z/g(y)\\}$."
    },
    {
        "q": "Cho hai mệnh đề $C_1 = P(x) \\lor Q(a)$ và $C_2 = \\neg P(b) \\lor R(y)$. Kết quả của phép hợp giải (Resolution) giữa $C_1$ và $C_2$ là mệnh đề nào?",
        "a": [
            "A. $Q(a) \\lor R(y)$",
            "B. $P(b) \\lor \\neg P(b)$",
            "C. $Q(a) \\lor R(b)$",
            "D. $Q(b) \\lor R(y)$"
        ],
        "c": 0,
        "e": "Hợp nhất $P(x)$ và $P(b)$ bằng phép thế $\\{x/b\\}$. Khi đó $C_1$ thành $P(b) \\lor Q(a)$, $C_2$ là $\\neg P(b) \\lor R(y)$. Hợp giải loại bỏ $P(b)$ và $\\neg P(b)$, thu được mệnh đề kết quả là $Q(a) \\lor R(y)$."
    },
    {
        "q": "Để chứng minh một mục tiêu $G$ từ tập tri thức KB bằng thủ tục hợp giải phản chứng (Resolution by Refutation), ta đưa thêm mệnh đề nào vào KB?",
        "a": [
            "A. $G$",
            "B. $\\neg G$",
            "C. $KB \\rightarrow G$",
            "D. Mệnh đề rỗng $\\square$"
        ],
        "c": 1,
        "e": "Nguyên lý phản chứng trong thủ tục hợp giải là thêm phủ định của kết luận cần chứng minh ($\\neg G$) vào tập tri thức ban đầu và thực hiện hợp giải cho đến khi thu được mệnh đề rỗng $\\square$."
    },
    {
        "q": "Trong quá trình chuẩn hóa công thức First-Order Logic (FOL) sang dạng CNF, bước loại bỏ lượng từ tồn tại ($\\exists x$) bằng cách thay thế biến $x$ bằng một hàm Skolem được gọi là gì?",
        "a": [
            "A. Unification",
            "B. Skolemization",
            "C. Resolution",
            "D. Subsumption"
        ],
        "c": 1,
        "e": "Skolemization là quá trình loại bỏ các lượng từ tồn tại bằng cách thay thế chúng bằng các hằng Skolem hoặc hàm Skolem phụ thuộc vào lượng từ phổ dụng bao ngoài."
    },
    {
        "q": "Cho hai mệnh đề Horn: $C_1 = \\neg P \\lor \\neg Q \\lor R$ và $C_2 = P$. Phép hợp giải giữa $C_1$ và $C_2$ cho ra mệnh đề nào?",
        "a": [
            "A. $\\neg Q \\lor R$",
            "B. $Q \\rightarrow R$",
            "C. Cả A và B đều đúng",
            "D. $\\square$"
        ],
        "c": 2,
        "e": "Hợp giải loại bỏ $P$ và $\\neg P$, còn lại $\\neg Q \\lor R$. Biểu thức $\\neg Q \\lor R$ tương đương với $Q \\rightarrow R$ (dạng luật sinh)."
    },
    {
        "q": "Cho cơ sở tri thức KB chứa các luật sau:\n- Luật 1: $A \\land B \\rightarrow C$\n- Luật 2: $C \\land D \\rightarrow E$\n- Giả thiết ban đầu trong Working Memory: $WM = \\{A, B, D\\}$.\nThực hiện suy diễn tiến (Forward Chaining). Sau bước lặp đầu tiên, phần tử nào được thêm vào WM?",
        "a": [
            "A. E",
            "B. C",
            "C. C và E",
            "D. Không có phần tử nào"
        ],
        "c": 1,
        "e": "Trong bước lặp 1, các điều kiện của Luật 1 ($A$ và $B$) đều có trong WM. Luật 1 được kích hoạt và suy ra $C$. $C$ được thêm vào WM. Luật 2 chưa kích hoạt ở bước 1 vì lúc bắt đầu $C$ chưa có trong WM."
    },
    {
        "q": "Tiếp tục bài toán suy diễn tiến ở câu trước, sau khi kết thúc hoàn toàn quá trình suy diễn tiến, tập Working Memory cuối cùng chứa những phần tử nào?",
        "a": [
            "A. $\\{A, B, D, C\\}$",
            "B. $\\{A, B, D, E\\}$",
            "C. $\\{A, B, D, C, E\\}$",
            "D. $\\{C, E\\}$"
        ],
        "c": 2,
        "e": "Bước 1 suy ra $C$ thêm vào WM thành $\\{A, B, D, C\\}$. Bước 2, điều kiện của Luật 2 ($C$ và $D$) đã thỏa mãn, kích hoạt Luật 2 suy ra $E$ thêm vào WM. Tập WM cuối cùng là $\\{A, B, D, C, E\\}$."
    },
    {
        "q": "Cho cơ sở tri thức KB:\n- Luật 1: $P \\rightarrow Q$\n- Luật 2: $R \\rightarrow P$\n- Giả thiết ban đầu: $WM = \\{R\\}$.\nNếu áp dụng suy diễn lùi (Backward Chaining) với mục tiêu cần chứng minh là $Q$, thứ tự các mục tiêu phụ (subgoals) cần kiểm tra là gì?",
        "a": [
            "A. Kiểm tra P, sau đó kiểm tra R",
            "B. Kiểm tra R, sau đó kiểm tra P",
            "C. Chỉ kiểm tra R",
            "D. Không cần kiểm tra mục tiêu phụ"
        ],
        "c": 0,
        "e": "Để chứng minh $Q$ (từ Luật 1), ta cần chứng minh mục tiêu phụ $P$. Để chứng minh $P$ (từ Luật 2), ta cần chứng minh mục tiêu phụ $R$. $R$ đã có sẵn trong giả thiết ban đầu nên chứng minh thành công."
    },
    {
        "q": "Một cá thể trong Giải thuật di truyền (GA) được mã hóa dưới dạng chuỗi nhị phân độ dài $L = 5$ bit để biểu diễn số nguyên không âm $x$. Chuỗi nhị phân là $10101_2$. Giá trị thập phân của cá thể này là bao nhiêu?",
        "a": [
            "A. 15",
            "B. 21",
            "C. 25",
            "D. 31"
        ],
        "c": 1,
        "e": "Đổi chuỗi nhị phân $10101_2$ sang thập phân: $1 \\times 2^4 + 0 \\times 2^3 + 1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 = 16 + 0 + 4 + 0 + 1 = 21$."
    },
    {
        "q": "Một giải thuật di truyền mã hóa số thực trong đoạn $[1, 5]$ sử dụng chuỗi nhị phân độ dài $L = 10$. Tính độ phân giải (bước nhảy tối thiểu giữa hai giá trị số thực liên tiếp được biểu diễn)?",
        "a": [
            "A. $4 / 1024 \\approx 0.0039$",
            "B. $4 / 1023 \\approx 0.00391$",
            "C. $5 / 1023 \\approx 0.00489$",
            "D. $1 / 1024 = 0.00097$"
        ],
        "c": 1,
        "e": "Số lượng khoảng chia của chuỗi 10 bit là $2^{10} - 1 = 1023$. Độ phân giải là khoảng cách của đoạn chia cho số khoảng chia: $\\Delta x = (5 - 1) / (2^{10} - 1) = 4 / 1023 \\approx 0.00391$."
    },
    {
        "q": "Trong giải thuật di truyền, một quần thể gồm 4 cá thể có giá trị độ thích nghi (fitness) tương ứng là: $f(A) = 10, f(B) = 20, f(C) = 30, f(D) = 40$. Nếu sử dụng phương pháp chọn lọc bánh xe Roulette, xác suất cá thể C được chọn vào thế hệ tiếp theo là bao nhiêu?",
        "a": [
            "A. 10%",
            "B. 20%",
            "C. 30%",
            "D. 40%"
        ],
        "c": 2,
        "e": "Tổng độ thích nghi của cả quần thể là $\\sum f = 10 + 20 + 30 + 40 = 100$. Xác suất chọn cá thể C là $p(C) = f(C) / \\sum f = 30 / 100 = 30\\%$."
    },
    {
        "q": "Cho hai nhiễm sắc thể cha mẹ dạng chuỗi ký tự: Cha = $AAAAAA$, Mẹ = $BBBBBB$. Thực hiện phép lai ghép một điểm (single-point crossover) tại vị trí điểm cắt sau ký tự thứ 2. Hai con sinh ra sẽ có cấu trúc nhiễm sắc thể như thế nào?",
        "a": [
            "A. Con 1 = $AABBBB$, Con 2 = $BBAAAA$",
            "B. Con 1 = $AAAABB$, Con 2 = $BBBBAA$",
            "C. Con 1 = $ABABAB$, Con 2 = $BABABA$",
            "D. Con 1 = $AAAAAB$, Con 2 = $BBBBBA$"
        ],
        "c": 0,
        "e": "Điểm cắt sau vị trí 2 chia nhiễm sắc thể thành 2 phần: Cha = $AA | AAAA$, Mẹ = $BB | BBBB$. Ghép chéo phần đuôi thu được: Con 1 = $AA + BBBB = AABBBB$; Con 2 = $BB + AAAA = BBAAAA$."
    },
    {
        "q": "Cho nhiễm sắc thể ban đầu dạng nhị phân là $110011$. Áp dụng phép đột biến nghịch đảo bit (bit-flip mutation) tại vị trí bit thứ 3 và thứ 5 (tính từ trái qua, bắt đầu từ 1). Nhiễm sắc thể sau đột biến là gì?",
        "a": [
            "A. $111001$",
            "B. $111011$",
            "C. $110011$",
            "D. $111010$"
        ],
        "c": 0,
        "e": "Nhiễm sắc thể gốc: $110011$. Bit thứ 3 (đang là 0) nghịch đảo thành 1. Bit thứ 5 (đang là 1) nghịch đảo thành 0. Chuỗi sau đột biến là $111001$."
    },
    {
        "q": "Cho xác suất tiền nghiệm của bệnh cúm là $P(Flu) = 0.05$. Xác suất bị sốt khi mắc bệnh cúm là $P(Fever \\mid Flu) = 0.8$. Xác suất bị sốt chung trong dân số là $P(Fever) = 0.1$. Nếu một bệnh nhân bị sốt, xác suất người đó thực sự mắc bệnh cúm theo công thức Bayes là bao nhiêu?",
        "a": [
            "A. 0.04",
            "B. 0.40",
            "C. 0.05",
            "D. 0.80"
        ],
        "c": 1,
        "e": "Theo công thức Bayes: $P(Flu \\mid Fever) = \\frac{P(Fever \\mid Flu) \\times P(Flu)}{P(Fever)} = \\frac{0.8 \\times 0.05}{0.1} = \\frac{0.04}{0.1} = 0.40$ (hay 40%)."
    },
    {
        "q": "Trong mạng Bayes gồm 3 nút xếp tuyến tính: $A \\rightarrow B \\rightarrow C$. Cho các bảng xác suất có trị số: $P(A) = 0.2$; $P(B=1 \\mid A=1) = 0.9, P(B=1 \\mid A=0) = 0.1$; $P(C=1 \\mid B=1) = 0.8, P(C=1 \\mid B=0) = 0.2$. Tính xác suất đồng thời $P(A=1, B=1, C=1)$.",
        "a": [
            "A. 0.144",
            "B. 0.016",
            "C. 0.72",
            "D. 0.18"
        ],
        "c": 0,
        "e": "Theo công thức phân tích của mạng Bayes: $P(A=1, B=1, C=1) = P(A=1) \\times P(B=1 \\mid A=1) \\times P(C=1 \\mid B=1) = 0.2 \\times 0.9 \\times 0.8 = 0.144$."
    },
    {
        "q": "Trong giải thuật tìm kiếm A*, giả sử tại nút $n$ ta có $g(n) = 5$ và Heuristic $h(n) = 4$. Nút đích $G$ có $g(G) = 10$. Giải thuật đã tìm thấy một đường đi tạm thời tới đích với tổng chi phí là 10. Tại sao giải thuật chưa dừng lại ngay khi phát hiện ra nút đích mà vẫn tiếp tục duyệt nút $n$?",
        "a": [
            "A. Vì $f(n) = 9 < g(G) = 10$, nghĩa là vẫn có khả năng tồn tại đường đi tốt hơn đi qua $n$",
            "B. Vì thuật toán A* luôn chạy hết toàn bộ đồ thị",
            "C. Vì Heuristic tại nút đích chưa bằng 0",
            "D. Vì chi phí thực tế $g(n)$ lớn hơn Heuristic $h(n)$"
        ],
        "c": 0,
        "e": "Thuật toán A* chỉ dừng lại khi nút đích được lấy ra khỏi tập mở (Open list). Nếu trong tập mở còn nút $n$ có $f(n) < f(G)$ (ở đây $f(n) = 5 + 4 = 9 < 10$), ta chưa thể chắc chắn đường đi hiện tại tới đích là tối ưu nhất. Ta phải duyệt tiếp nút $n$."
    },
    {
        "q": "Một cây trò chơi mức MAX có hai con là MIN A và MIN B. Thuật toán Alpha-Beta đang duyệt nhánh của A và ghi nhận giá trị tạm thời của A là 5. Khi chuyển sang nhánh B, giá trị Alpha hiện tại được truyền xuống B là bao nhiêu?",
        "a": [
            "A. $\\alpha = 5$",
            "B. $\\beta = 5$",
            "C. $\\alpha = -\\infty$",
            "D. $\\beta = +\\infty$"
        ],
        "c": 0,
        "e": "Nút MAX giữ giá trị Alpha đại diện cho lựa chọn tốt nhất hiện tại của nó. Vì nhánh A trả về giá trị 5, giá trị Alpha của nút MAX tăng lên thành 5 và được truyền xuống nhánh B làm giới hạn dưới."
    },
    {
        "q": "Cho cơ sở tri thức gồm các mệnh đề đã chuẩn hóa CNF:\n1. $\\neg A \\lor B$\n2. $\\neg B \\lor C$\n3. $\\neg C$\n4. $A$\nThực hiện các bước hợp giải liên tiếp. Số bước hợp giải tối thiểu để chứng minh hệ thống này mâu thuẫn (suy ra mệnh đề rỗng $\\square$) là bao nhiêu?",
        "a": [
            "A. 1 bước",
            "B. 2 bước",
            "C. 3 bước",
            "D. 4 bước"
        ],
        "c": 2,
        "e": "Bước 1: Hợp giải (1) và (4) loại bỏ A, được mệnh đề mới (5): $B$. Bước 2: Hợp giải (2) và (5) loại bỏ B, được mệnh đề mới (6): $C$. Bước 3: Hợp giải (3) và (6) loại bỏ C, thu được mệnh đề rỗng $\\square$. Tổng cộng cần 3 bước."
    },
    {
        "q": "Một chuỗi gen nhị phân độ dài 8 bit có cấu trúc dạng $11010011$. Tính toán tỷ lệ phần trăm số lượng bit 1 xuất hiện trong nhiễm sắc thể này.",
        "a": [
            "A. 50%",
            "B. 62.5%",
            "C. 37.5%",
            "D. 75%"
        ],
        "c": 1,
        "e": "Số lượng bit 1 trong chuỗi là 5 (các vị trí 1, 2, 4, 7, 8). Tỷ lệ phần trăm là $5/8 = 0.625 = 62.5\\%$."
    },
    {
        "q": "Cho một nơ-ron nhân tạo với 3 đầu vào $x_1 = 1, x_2 = 0, x_3 = -1$. Trọng số tương ứng là $w_1 = 0.5, w_2 = 0.8, w_3 = 0.2$. Hệ số bias $b = -0.1$. Sử dụng hàm kích hoạt Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. Tính đầu ra của nơ-ron này (lấy xấp xỉ 2 chữ số thập phân).",
        "a": [
            "A. 0.55",
            "B. 0.50",
            "C. 0.57",
            "D. 0.62"
        ],
        "c": 0,
        "e": "Tính tổng trọng số: $z = (1.0 \\times 0.5) + (0 \\times 0.8) + (-1.0 \\times 0.2) - 0.1 = 0.5 + 0 - 0.2 - 0.1 = 0.2$. Đầu ra: $\\sigma(0.2) = 1 / (1 + e^{-0.2}) \\approx 1 / (1 + 0.8187) \\approx 0.5498 \\approx 0.55$."
    },
    {
        "q": "Trong thuật toán cắt tỉa Alpha-Beta, tại nút MIN, ta cập nhật tham số nào và điều kiện để xảy ra cắt tỉa (pruning) là gì?",
        "a": [
            "A. Cập nhật $\\alpha$, cắt tỉa khi $\\alpha \\ge \\beta$",
            "B. Cập nhật $\\beta$, cắt tỉa khi $\\alpha \\ge \\beta$",
            "C. Cập nhật $\\alpha$, cắt tỉa khi $\\alpha \\le \\beta$",
            "D. Cập nhật $\\beta$, cắt tỉa khi $\\alpha \\le \\beta$"
        ],
        "c": 1,
        "e": "Tại nút MIN, ta cập nhật giá trị $\\beta$ (đại diện cho giới hạn trên tốt nhất của MIN). Cắt tỉa xảy ra ngay khi $\\alpha \\ge \\beta$, nghĩa là người chơi MAX ở trên có một lựa chọn khác tốt hơn rồi."
    },
    {
        "q": "Cho hàm Heuristic $h(n)$ của thuật toán A*. Nếu ta thiết lập $h(n) = 0$ với mọi nút $n$, thuật toán A* sẽ hoạt động tương đương với thuật toán tìm kiếm nào?",
        "a": [
            "A. Tìm kiếm theo chiều rộng (BFS)",
            "B. Tìm kiếm chi phí đồng nhất (UCS / Dijkstra)",
            "C. Tìm kiếm theo chiều sâu (DFS)",
            "D. Tìm kiếm sâu lặp (IDDFS)"
        ],
        "c": 1,
        "e": "Khi $h(n) = 0$, hàm đánh giá $f(n) = g(n) + h(n)$ trở thành $f(n) = g(n)$ (chỉ tính chi phí tích lũy từ gốc). Thuật toán A* khi đó trở thành tìm kiếm chi phí đồng nhất UCS."
    },
    {
        "q": "Cho hàm Heuristic $h(n)$ của thuật toán A*. Nếu ta luôn thiết lập Heuristic $h(n) > h^*(n)$ (đánh giá vượt quá chi phí thực tế tối ưu), thuật toán A* có còn đảm bảo luôn tìm thấy đường đi ngắn nhất tối ưu hay không?",
        "a": [
            "A. Có, vẫn đảm bảo 100%",
            "B. Không, thuật toán có thể trả về một đường đi dưới tối ưu",
            "C. Có, nhưng bộ nhớ sẽ bị quá tải",
            "D. Không, thuật toán sẽ bị lặp vô hạn"
        ],
        "c": 1,
        "e": "Điều kiện cần và đủ để thuật toán A* đảm bảo tính tối ưu trên đồ thị dạng cây là hàm Heuristic phải chấp nhận được ($h(n) \\le h^*(n)$). Nếu $h(n) > h^*(n)$, tính tối ưu không còn được bảo đảm."
    },
    {
        "q": "Trong giải thuật di truyền, một quần thể gồm 2 cá thể có nhiễm sắc thể lần lượt là $X_1 = 111111$ và $X_2 = 000000$. Thực hiện phép lai hai điểm (two-point crossover) tại các điểm cắt sau vị trí 2 và sau vị trí 4. Một trong hai cá thể con tạo ra có chuỗi gen là gì?",
        "a": [
            "A. $110011$",
            "B. $111100$",
            "C. $001100$",
            "D. $110000$"
        ],
        "c": 0,
        "e": "Các điểm cắt chia chuỗi thành 3 đoạn: sau vị trí 2 và sau vị trí 4. Cá thể 1: $11 | 11 | 11$, Cá thể 2: $00 | 00 | 00$. Lai ghép chéo đoạn giữa thu được: Con 1 = $11 + 00 + 11 = 110011$; Con 2 = $00 + 11 + 00 = 001100$."
    },
    {
        "q": "Trong mạng nơ-ron nhân tạo MLP, giá trị lan truyền ngược (Backpropagation) được tính toán dựa trên quy tắc toán học cốt lõi nào?",
        "a": [
            "A. Quy tắc nhân ma trận nghịch đảo",
            "B. Quy tắc chuỗi đạo hàm (Chain Rule)",
            "C. Quy tắc cộng vector Euler",
            "D. Quy tắc chia Euclid"
        ],
        "c": 1,
        "e": "Lan truyền ngược sử dụng quy tắc chuỗi đạo hàm (Chain Rule) để tính toán độ dốc sai số (gradients) đối với từng trọng số ở các lớp từ sau ra trước."
    },
    {
        "q": "Cho bảng phân phối xác suất đồng thời của hai biến ngẫu nhiên $X$ và $Y$:\n- $P(X=0, Y=0) = 0.1$\n- $P(X=0, Y=1) = 0.2$\n- $P(X=1, Y=0) = 0.3$\n- $P(X=1, Y=1) = 0.4$\nTính xác suất điều kiện $P(X=1 \\mid Y=0)$.",
        "a": [
            "A. 0.75",
            "B. 0.30",
            "C. 0.43",
            "D. 0.70"
        ],
        "c": 0,
        "e": "$P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = 0.1 + 0.3 = 0.4$. Xác suất điều kiện: $P(X=1 \\mid Y=0) = P(X=1, Y=0) / P(Y=0) = 0.3 / 0.4 = 0.75$."
    },
    {
        "q": "Trong cây quyết định (Decision Tree), một nút lá chỉ chứa các mẫu thuộc về duy nhất một lớp (thuần khiết hoàn toàn) sẽ có Entropy bằng bao nhiêu?",
        "a": [
            "A. 0",
            "B. 1.0",
            "C. Vô hạn",
            "D. -1.0"
        ],
        "c": 0,
        "e": "Nút thuần khiết có xác suất của lớp đó là $p = 1.0$. Entropy $H = -1.0 \\log_2(1.0) = 0$. Không còn độ không chắc chắn nào tại nút này."
    },
    {
        "q": "Cho cơ sở tri thức KB chứa các sự kiện ban đầu: $A$, $B$. Các luật sinh gồm:\n- L1: $A \\land C \\rightarrow D$\n- L2: $B \\rightarrow C$\n- L3: $D \\rightarrow E$\nÁp dụng suy diễn tiến để chứng minh sự kiện $E$. Cần tối thiểu bao nhiêu bước kích hoạt luật (mỗi bước kích hoạt 1 luật)?",
        "a": [
            "A. 1 bước",
            "B. 2 bước",
            "C. 3 bước",
            "D. 4 bước"
        ],
        "c": 2,
        "e": "Bước 1: Kích hoạt L2 vì $B$ có sẵn trong KB, suy ra $C$. KB lúc này là $\\{A, B, C\\}$. Bước 2: Kích hoạt L1 vì đã có $A$ và $C$, suy ra $D$. KB lúc này là $\\{A, B, C, D\\}$. Bước 3: Kích hoạt L3 vì đã có $D$, suy ra $E$ (thành công). Vậy cần 3 bước kích hoạt luật."
    },
    {
        "q": "Cho hai mệnh đề logic FOL: $P(x, f(y))$ và $P(a, f(b))$. Phép thế nào dưới đây là MGU (Most General Unifier) của hai mệnh đề này?",
        "a": [
            "A. $\\theta = \\{x/a, y/b\\}$",
            "B. $\\theta = \\{a/x, b/y\\}$",
            "C. $\\theta = \\{x/a, y/f(b)\\}$",
            "D. Không thể hợp nhất"
        ],
        "c": 0,
        "e": "Để $P(x, f(y))$ trùng khớp hoàn toàn với $P(a, f(b))$, ta thế biến $x$ bằng hằng $a$ và biến $y$ bằng hằng $b$. Phép thế MGU là $\\{x/a, y/b\\}$."
    },
    {
        "q": "Một cây tìm kiếm có hệ số rẽ nhánh cố định $b = 10$, chiều sâu của lời giải tối ưu là $d = 5$. Thuật toán Tìm kiếm theo chiều rộng (BFS) sẽ cần lưu trữ tối đa khoảng bao nhiêu nút trong bộ nhớ?",
        "a": [
            "A. $10^5 = 100,000$ nút",
            "B. $10^6 = 1,000,000$ nút",
            "C. 50 nút",
            "D. $10^2 = 100$ nút"
        ],
        "c": 0,
        "e": "BFS lưu trữ tất cả các nút được sinh ra trong bộ nhớ. Độ phức tạp bộ nhớ của BFS là $O(b^d)$. Với $b=10, d=5$, số nút tối đa cần lưu trữ ở mức sâu nhất là $10^5 = 100,000$ nút."
    },
    {
        "q": "Cho một đồ thị tìm kiếm có dạng cây. Nếu hàm Heuristic thỏa mãn tính nhất quán (consistency), thì giá trị của hàm đánh giá $f(n) = g(n) + h(n)$ dọc theo bất kỳ đường đi nào từ gốc sẽ thay đổi thế nào?",
        "a": [
            "A. Luôn giảm dần",
            "B. Không bao giờ giảm (luôn đơn điệu tăng hoặc giữ nguyên)",
            "C. Thay đổi ngẫu nhiên tăng giảm",
            "D. Luôn bằng hằng số"
        ],
        "c": 1,
        "e": "Tính nhất quán của Heuristic đảm bảo rằng hàm $f(n)$ là đơn điệu không giảm dọc theo bất kỳ đường đi nào trong cây tìm kiếm, tức là $f(n) \\le f(n')$. Kỹ thuật này giúp thuật toán $A^*$ tìm kiếm hiệu quả và ổn định hơn."
    },
    {
        "q": "Một quần thể trong GA gồm 5 nhiễm sắc thể có điểm thích nghi lần lượt là $1, 2, 3, 4, 5$. Tính giá trị độ thích nghi trung bình của quần thể.",
        "a": [
            "A. 3.0",
            "B. 2.5",
            "C. 15.0",
            "D. 5.0"
        ],
        "c": 0,
        "e": "Độ thích nghi trung bình là tổng điểm chia cho số lượng cá thể: $(1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3.0$."
    },
    {
        "q": "Thuật toán tìm kiếm Leo đồi (Hill Climbing) thường gặp phải nhược điểm lớn nào dưới đây do tính chất tìm kiếm tối ưu cục bộ của nó?",
        "a": [
            "A. Bị kẹt tại cực trị cục bộ (Local maxima)",
            "B. Bị kẹt tại các cao nguyên phẳng (Plateaus)",
            "C. Bị kẹt tại các sườn đồi răng cưa (Ridges)",
            "D. Tất cả các nhược điểm trên"
        ],
        "c": 3,
        "e": "Leo đồi là thuật toán tìm kiếm cục bộ đơn giản nên dễ bị kẹt tại các cực trị cục bộ, cao nguyên phẳng hoặc các đường răng cưa nơi không có hướng đi nào làm tăng giá trị hàm đánh giá."
    },
    {
        "q": "Trong CSP (Constraint Satisfaction Problem), kỹ thuật lọc miền giá trị dựa trên tính nhất quán của cung (Arc Consistency - AC-3) kiểm tra tính nhất quán giữa cặp biến nào?",
        "a": [
            "A. Mọi bộ ba biến bất kỳ",
            "B. Cặp biến có ràng buộc trực tiếp (cung kết nối)",
            "C. Chỉ giữa biến hiện tại và nút gốc",
            "D. Toàn bộ các biến trên đồ thị cùng lúc"
        ],
        "c": 1,
        "e": "Tính nhất quán cung (Arc Consistency) thiết lập tính nhất quán trên từng cung định hướng nối hai biến liên kết trực tiếp bằng ràng buộc nhị phân."
    },
    {
        "q": "Một hệ chuyên gia sử dụng cơ chế suy diễn lùi để chẩn đoán lỗi. Nếu cơ sở tri thức có dạng cây ngược (nhiều tiền đề dẫn đến một kết luận chung), suy diễn lùi sẽ hoạt động hiệu quả hơn suy diễn tiến vì lý do gì?",
        "a": [
            "A. Chỉ tập trung duyệt các nhánh trực tiếp dẫn đến mục tiêu cần chẩn đoán, tránh suy diễn dư thừa",
            "B. Không cần sử dụng bộ nhớ Working Memory",
            "C. Luôn tìm ra tất cả các luật trong cơ sở dữ liệu cùng lúc",
            "D. Không cần kiểm tra các sự kiện ban đầu"
        ],
        "c": 0,
        "e": "Suy diễn lùi xuất phát từ kết luận mục tiêu để tìm kiếm ngược lại các sự kiện hỗ trợ. Đối với cơ sở tri thức hướng mục tiêu, nó giúp tránh việc sinh ra các dữ liệu trung gian không liên quan như suy diễn tiến."
    },
    {
        "q": "Cho hai mệnh đề CNF: $P \\lor Q$ và $\\neg P \\lor Q$. Kết quả hợp giải của hai mệnh đề này là gì?",
        "a": [
            "A. $Q$",
            "B. $P \\lor \\neg P$",
            "C. Mệnh đề rỗng $\\square$",
            "D. Không hợp giải được"
        ],
        "c": 0,
        "e": "Hợp giải loại bỏ $P$ và $\\neg P$. Kết quả phép tuyển còn lại là $Q \\lor Q \\equiv Q$."
    },
    {
        "q": "Một bài toán CSP có 5 biến số, mỗi biến có miền giá trị chứa đúng 3 phần tử. Kích thước không gian tìm kiếm trạng thái đầy đủ (chưa xét ràng buộc) của bài toán này là bao nhiêu?",
        "a": [
            "A. $3^5 = 243$",
            "B. $5^3 = 125$",
            "C. $5 \\times 3 = 15$",
            "D. $5! = 120$"
        ],
        "c": 0,
        "e": "Mỗi biến có 3 lựa chọn độc lập. Với 5 biến, số tổ hợp gán nhãn trạng thái đầy đủ có thể có là $3 \\times 3 \\times 3 \\times 3 \\times 3 = 3^5 = 243$."
    },
    {
        "q": "Cho một nhiễm sắc thể nhị phân có chiều dài 4 bit. Xác suất để một đột biến đảo bit ngẫu nhiên duy nhất (chỉ có đúng 1 bit bị lật) xảy ra trên nhiễm sắc thể này là bao nhiêu, biết xác suất đột biến tại mỗi locus (bit) độc lập là $p_m = 0.1$?",
        "a": [
            "A. $0.4$",
            "B. $4 \\times 0.1 \\times 0.9^3 \\approx 0.2916$",
            "C. $0.1^4 = 0.0001$",
            "D. $1 - 0.9^4 \\approx 0.3439$"
        ],
        "c": 1,
        "e": "Xác suất để có đúng 1 bit bị đột biến và 3 bit còn lại giữ nguyên theo phân phối nhị thức là: $C_4^1 \\times p_m^1 \\times (1-p_m)^3 = 4 \\times 0.1 \\times 0.9^3 = 4 \\times 0.1 \\times 0.729 = 0.2916$."
    },
    {
        "q": "Trong giải thuật di truyền, nếu đặt xác suất lai ghép (crossover rate) $p_c = 0.0$ và xác suất đột biến (mutation rate) $p_m = 0.02$, quần thể sẽ tiến hóa thế nào?",
        "a": [
            "A. Tiến hóa rất nhanh do chỉ đột biến",
            "B. Không có sự trao đổi chéo thông tin gen giữa các cá thể, sự đa dạng mới chỉ được sinh ra từ các đột biến nhỏ ngẫu nhiên",
            "C. Quần thể hoàn toàn không thay đổi qua các thế hệ",
            "D. Các cá thể con sinh ra sẽ luôn giống hệt cha mẹ mà không có bất kỳ sai khác nào"
        ],
        "c": 1,
        "e": "Khi không lai ghép ($p_c=0$), các thế hệ sau chỉ sao chép nhiễm sắc thể từ cha mẹ. Tuy nhiên vì $p_m=0.02 > 0$, đột biến vẫn diễn ra ngẫu nhiên trên các cá thể con, tạo ra sự đa dạng di truyền mới nhưng với tốc độ rất chậm."
    },
    {
        "q": "Trong mạng Bayes, hai nút độc lập điều kiện (conditionally independent) với nhau khi nào?",
        "a": [
            "A. Khi chúng không có đường đi nối trực tiếp",
            "B. Khi biết giá trị của các nút cha chung hoặc nút trung gian ngăn cách chúng",
            "C. Khi tổng xác suất của chúng bằng 1",
            "D. Khi chúng nằm ở hai cấp độ khác nhau của đồ thị"
        ],
        "c": 1,
        "e": "Hai nút độc lập điều kiện khi biết thông tin của nút trung gian hoặc cha chung ngăn cách (khái niệm d-separation trong mạng Bayes)."
    },
    {
        "q": "Cho luật sinh: $P(x) \\rightarrow Q(x)$. Working Memory chứa $P(a)$ và $P(b)$. Bộ suy diễn tiến sẽ sinh ra các sự kiện nào mới?",
        "a": [
            "A. $Q(a)$ và $Q(b)$",
            "B. Chỉ $Q(a)$",
            "C. Chỉ $Q(b)$",
            "D. Không sinh ra gì"
        ],
        "c": 0,
        "e": "Bộ suy diễn tiến áp dụng luật phổ dụng cho mọi phép gán giá trị hợp lệ. Thế $x/a$ được $Q(a)$, thế $x/b$ được $Q(b)$, cả hai đều được suy ra và thêm vào WM."
    },
    {
        "q": "Để chuyển công thức FOL $\\neg (\\forall x P(x))$ sang dạng chuẩn CNF, bước đầu tiên đưa phủ định vào trong lượng từ sẽ biến công thức thành gì?",
        "a": [
            "A. $\\exists x \\neg P(x)$",
            "B. $\\forall x \\neg P(x)$",
            "C. $\\neg P(x)$",
            "D. $\\exists x P(x)$"
        ],
        "c": 0,
        "e": "Luật phủ định lượng từ phổ dụng: $\\neg (\\forall x P(x)) \\equiv \\exists x \\neg P(x)$."
    },
    {
        "q": "Cho hai mệnh đề CNF: $\\neg P(x) \\lor Q(x)$ và $P(a)$. Kết quả phép hợp giải giữa hai mệnh đề này là gì?",
        "a": [
            "A. $Q(a)$",
            "B. $Q(x)$",
            "C. $\\neg P(a)$",
            "D. Mệnh đề rỗng $\\square$"
        ],
        "c": 0,
        "e": "Hợp nhất $\\neg P(x)$ và $P(a)$ bằng phép thế $\\{x/a\\}$. Kết quả hợp giải thu được mệnh đề đơn $Q(a)$."
    },
    {
        "q": "Trong mạng thần kinh nhân tạo MLP, nếu ta sử dụng hàm kích hoạt tuyến tính $f(z) = c \\times z$ cho tất cả các lớp ẩn, mạng thần kinh sâu nhiều lớp sẽ tương đương với mô hình nào dưới đây?",
        "a": [
            "A. Một bộ phân loại phi tuyến tính phức tạp",
            "B. Một mạng thần kinh một lớp tuyến tính đơn giản",
            "C. Một cây quyết định phân cấp",
            "D. Một hệ chuyên gia dựa trên luật"
        ],
        "c": 1,
        "e": "Tích của các phép biến đổi tuyến tính liên tiếp vẫn là một phép biến đổi tuyến tính. Do đó, nếu dùng hàm kích hoạt tuyến tính ở các lớp ẩn, mạng sâu nhiều lớp sẽ bị sụp đổ cấu trúc và chỉ tương đương với mạng 1 lớp tuyến tính đơn giản."
    },
    {
        "q": "Trong giải thuật di truyền, hiện tượng các cá thể có độ thích nghi vượt trội chiếm lĩnh nhanh chóng quần thể trong vài thế hệ đầu tiên dẫn đến mất tính đa dạng và kẹt ở cực trị cục bộ gọi là gì?",
        "a": [
            "A. Sự hội tụ sớm (Premature convergence)",
            "B. Đột biến hàng loạt (Mass mutation)",
            "C. Sự trôi dạt di truyền (Genetic drift)",
            "D. Hiện tượng lai xa (Outbreeding depression)"
        ],
        "c": 0,
        "e": "Hội tụ sớm xảy ra khi một vài cá thể tốt cục bộ nhân bản quá nhanh, khiến toàn bộ quần thể đồng nhất trước khi thuật toán có cơ hội khám phá các khu vực không gian trạng thái khác tối ưu hơn."
    },
    {
        "q": "Một cây trò chơi có độ sâu tìm kiếm tối đa $d = 4$ và hệ số rẽ nhánh $b = 5$. Thuật toán Minimax duyệt đầy đủ không cắt tỉa sẽ cần đánh giá tổng cộng bao nhiêu nút lá?",
        "a": [
            "A. $4^5 = 1024$ nút lá",
            "B. $5^4 = 625$ nút lá",
            "C. $5 \\times 4 = 20$ nút lá",
            "D. $5 + 4 = 9$ nút lá"
        ],
        "c": 1,
        "e": "Số nút lá ở mức sâu nhất $d$ của cây đều có hệ số rẽ nhánh $b$ là $b^d = 5^4 = 625$ nút lá."
    },
    {
        "q": "Trong lập trình logic (Prolog) hoặc các hệ thống luật sinh, cơ chế suy diễn lùi duyệt cây tìm kiếm các luật theo thứ tự mặc định nào?",
        "a": [
            "A. Tìm kiếm theo chiều rộng (BFS)",
            "B. Tìm kiếm theo chiều sâu (DFS) kết hợp quay lui (Backtracking)",
            "C. Tìm kiếm chi phí đồng nhất (UCS)",
            "D. Tìm kiếm Heuristic tham lam"
        ],
        "c": 1,
        "e": "Suy diễn lùi mặc định duyệt cây mục tiêu theo cơ chế tìm kiếm chiều sâu (DFS) từ trên xuống dưới, từ trái qua phải và sử dụng kỹ thuật quay lui khi gặp nhánh cụt."
    },
    {
        "q": "Cho cơ sở tri thức KB chứa mệnh đề hội: $P \\land Q$. Ta có thể suy ra $P$ dựa trên luật suy diễn nào?",
        "a": [
            "A. Phép hợp giải (Resolution)",
            "B. Phép đơn giản hóa hội (Simplification / Conjunction elimination)",
            "C. Phép kéo theo Modus Ponens",
            "D. Phép kéo theo Modus Tollens"
        ],
        "c": 1,
        "e": "Luật đơn giản hóa hội (Simplification) cho phép suy ra một mệnh đề thành phần từ một phép hội đã biết là đúng, tức là từ $P \\land Q$ suy ra được $P$ (và cũng suy ra được $Q$)."
    },
    {
        "q": "Một thuật toán tối ưu hóa bầy đàn (PSO) hoặc giải thuật di truyền (GA) đều thuộc nhóm phương pháp tìm kiếm nào?",
        "a": [
            "A. Tìm kiếm leo đồi đơn giản",
            "B. Tìm kiếm ngẫu nhiên có định hướng sử dụng quần thể (Population-based metaheuristics)",
            "C. Tìm kiếm mù hệ thống",
            "D. Tìm kiếm chứng minh định lý phản chứng"
        ],
        "c": 1,
        "e": "GA và PSO đều là các giải thuật tối ưu hóa metaheuristic dựa trên quần thể, kết hợp các phép toán ngẫu nhiên có định hướng để thăm dò không gian tìm kiếm hiệu quả."
    }
]
};
