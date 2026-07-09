// ==================== ARTICLE DATABASE ====================
const articlesData = [
    // === TIẾNG ANH PHỔ THÔNG ===
    {
        id: "post-001",
        title: "Tổng hợp 50 thì cơ bản trong Tiếng Anh",
        excerpt: "Hướng dẫn chi tiết các thì cơ bản nhất trong tiếng Anh kèm ví dụ minh họa dễ hiểu, giúp bạn nắm vững nền tảng ngữ pháp.",
        category: "tieng-anh-pho-thong",
        filters: ["ngữ-pháp"],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-01",
        readTime: "15 phút",
        type: "internal",
        url: "data/post-001.html"
    },
    {
        id: "post-002",
        title: "1000 từ vựng tiếng Anh thông dụng nhất",
        excerpt: "Bộ từ vựng được chọn lọc kỹ càng theo tần suất sử dụng, chia theo chủ đề giúp bạn dễ học và ghi nhớ.",
        category: "tieng-anh-pho-thong",
        filters: ["tu-vung"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-28",
        readTime: "20 phút",
        type: "internal",
        url: "data/post-002.html"
    },
    {
        id: "post-003",
        title: "Bài test trình độ A1-A2: Kiểm tra nền tảng",
        excerpt: "Bài kiểm tra tổng hợp giúp bạn đánh giá chính xác trình độ tiếng Anh hiện tại và xác định lộ trình học phù hợp.",
        category: "tieng-anh-pho-thong",
        filters: ["test"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-25",
        readTime: "30 phút",
        type: "internal",
        url: "data/post-003.html"
    },
    {
        id: "post-004",
        title: "Phân biệt cách dùng Make và Do",
        excerpt: "Hướng dẫn chi tiết sự khác biệt giữa Make và Do, kèm bài tập thực hành giúp bạn không còn nhầm lẫn.",
        category: "tieng-anh-pho-thong",
        filters: ["ngữ-pháp"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-20",
        readTime: "10 phút",
        type: "external",
        url: "https://www.grammarly.com/blog/make-vs-do/"
    },
    {
        id: "post-005",
        title: "Bài test trình độ B1-B2: Trung cấp",
        excerpt: "Đánh giá khả năng tiếng Anh trình độ trung cấp với các câu hỏi đa dạng về ngữ pháp, từ vựng và đọc hiểu.",
        category: "tieng-anh-pho-thong",
        filters: ["test"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-15",
        readTime: "25 phút",
        type: "internal",
        url: "data/post-005.html"
    },

    // === IELTS ===
    {
        id: "post-006",
        title: "Chiến lược IELTS Reading band 7+",
        excerpt: "Tổng hợp các kỹ thuật skimming, scanning và xử lý từng dạng bài IELTS Reading hiệu quả nhất.",
        category: "ielts",
        filters: ["reading"],
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-05",
        readTime: "18 phút",
        type: "internal",
        url: "data/post-006.html"
    },
    {
        id: "post-007",
        title: "IELTS Writing Task 2: Cấu trúc bài luận hoàn hảo",
        excerpt: "Hướng dẫn chi tiết cách viết bài luận IELTS Task 2 đạt band 7+ với cấu trúc rõ ràng và từ vựng học thuật.",
        category: "ielts",
        filters: ["writing"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-02",
        readTime: "22 phút",
        type: "internal",
        url: "data/post-007.html"
    },
    {
        id: "post-008",
        title: "IELTS Listening: Mẹo bắt keyword trong Part 3-4",
        excerpt: "Kỹ năng nghe và ghi chú hiệu quả cho các part khó nhất trong bài thi IELTS Listening.",
        category: "ielts",
        filters: ["listening"],
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-30",
        readTime: "12 phút",
        type: "external",
        url: "https://ieltsliz.com/ielts-listening-tips/"
    },
    {
        id: "post-009",
        title: "Collocations theo chủ đề IELTS thường gặp",
        excerpt: "Tổng hợp collocations theo từng chủ đề phổ biến trong IELTS giúp bạn nâng band Writing và Speaking.",
        category: "ielts",
        filters: ["tu-vung"],
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-25",
        readTime: "16 phút",
        type: "internal",
        url: "data/post-009.html"
    },
    {
        id: "post-010",
        title: "Ngữ pháp quan trọng cho IELTS Writing",
        excerpt: "Những cấu trúc ngữ pháp bắt buộc phải biết để viết bài IELTS Writing đạt điểm cao.",
        category: "ielts",
        filters: ["ngữ-pháp", "writing"],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-20",
        readTime: "14 phút",
        type: "external",
        url: "https://www.ielts.org/prepare/ielts-writing-task-2"
    },

    // === TOEIC ===
    {
        id: "post-011",
        title: "Cấu trúc đề thi TOEIC 2026 mới nhất",
        excerpt: "Cập nhật cấu trúc đề thi TOEIC mới nhất, phân tích chi tiết từng part và chiến lược làm bài.",
        category: "toeic",
        filters: ["reading", "listening"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-08",
        readTime: "20 phút",
        type: "internal",
        url: "data/post-011.html"
    },
    {
        id: "post-012",
        title: "500 từ vựng TOEIC theo chủ đề công sở",
        excerpt: "Bộ từ vựng TOEIC thiết nhất cho môi trường công sở, giúp bạn tự tin trong part 5-6-7.",
        category: "toeic",
        filters: ["tu-vung"],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-05",
        readTime: "25 phút",
        type: "internal",
        url: "data/post-012.html"
    },
    {
        id: "post-013",
        title: "Ngữ pháp TOEIC: Các điểm cần nhớ",
        excerpt: "Tổng hợp các chủ điểm ngữ pháp thường xuất hiện trong bài thi TOEIC kèm ví dụ minh họa.",
        category: "toeic",
        filters: ["ngữ-pháp"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-01",
        readTime: "18 phút",
        type: "external",
        url: "https://www.ets.org/toeic/prepare"
    },

    // === GIAO TIẾP ===
    {
        id: "post-014",
        title: "50 mẫu câu giao tiếp tiếng Anh hàng ngày",
        excerpt: "Những mẫu câu giao tiếp thông dụng nhất trong cuộc sống hàng ngày, giúp bạn tự tin trò chuyện.",
        category: "giao-tiep",
        filters: [],
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-07",
        readTime: "12 phút",
        type: "internal",
        url: "data/post-014.html"
    },
    {
        id: "post-015",
        title: "Tiếng Anh giao tiếp công sở chuyên nghiệp",
        excerpt: "Cách giao tiếp trong môi trường công sở: email, meeting, presentation bằng tiếng Anh.",
        category: "giao-tiep",
        filters: [],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-03",
        readTime: "15 phút",
        type: "internal",
        url: "data/post-015.html"
    },
    {
        id: "post-016",
        title: "Giao tiếp tiếng Anh khi đi du lịch nước ngoài",
        excerpt: "Tổng hợp các tình huống giao tiếp khi du lịch: đặt phòng, hỏi đường, order đồ ăn...",
        category: "giao-tiep",
        filters: [],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-06-28",
        readTime: "10 phút",
        type: "external",
        url: "https://www.ef.com/wwen/english-resources/english-travel-phrases/"
    },

    // === LỘ TRÌNH ===
    {
        id: "post-017",
        title: "Lộ trình Tiếng Anh Phổ Thông từ 0 đến B2",
        excerpt: "Lộ trình chi tiết 6 tháng giúp bạn từ mất gốc đạt trình độ B2, bao gồm cả kế hoạch học tập hàng tuần.",
        category: "lo-trinh",
        filters: ["lo-trinh-ta-pho-thong"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-09",
        readTime: "8 phút",
        type: "internal",
        url: "data/post-017.html"
    },
    {
        id: "post-018",
        title: "Lộ trình IELTS từ 5.0 lên 7.5 trong 8 tháng",
        excerpt: "Kế hoạch học IELTS chi tiết theo từng giai đoạn, tập trung vào 4 kỹ năng với tài liệu đề xuất.",
        category: "lo-trinh",
        filters: ["lo-trinh-ielts"],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-06",
        readTime: "10 phút",
        type: "internal",
        url: "data/post-018.html"
    },
    {
        id: "post-019",
        title: "Lộ trình TOEIC từ 400 lên 800+ trong 4 tháng",
        excerpt: "Lộ trình tăng điểm TOEIC nhanh chóng với phương pháp luyện đề thông minh và ôn tập có trọng tâm.",
        category: "lo-trinh",
        filters: ["lo-trinh-toeic"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-04",
        readTime: "12 phút",
        type: "internal",
        url: "data/post-019.html"
    },
    {
        id: "post-020",
        title: "Lộ trình Giao tiếp từ cơ bản đến tự tin",
        excerpt: "3 tháng luyện giao tiếp mỗi ngày theo lộ trình, từ phát âm chuẩn đến phản xạ tự nhiên.",
        category: "lo-trinh",
        filters: ["lo-trinh-giao-tiep"],
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
        author: "Ms. Thúy",
        date: "2026-07-02",
        readTime: "8 phút",
        type: "internal",
        url: "data/post-020.html"
    }
];

// ==================== CATEGORY CONFIG ====================
const categoryConfig = {
    "tieng-anh-pho-thong": {
        title: "Tiếng Anh Phổ Thông",
        desc: "Tổng hợp bài học ngữ pháp, từ vựng và bài test trình độ",
        gradient: "linear-gradient(135deg, #FFB5C2 0%, #FF8FA3 100%)",
        icon: "fa-book-open",
        filters: [
            { key: "all", label: "Tất cả" },
            { key: "ngữ-pháp", label: "Ngữ pháp" },
            { key: "tu-vung", label: "Từ vựng" },
            { key: "test", label: "Test" }
        ]
    },
    "ielts": {
        title: "IELTS",
        desc: "Chiến lược và kiến thức cho kỳ thi IELTS",
        gradient: "linear-gradient(135deg, #D4A5FF 0%, #A855F7 100%)",
        icon: "fa-certificate",
        filters: [
            { key: "all", label: "Tất cả" },
            { key: "ngữ-pháp", label: "Ngữ pháp" },
            { key: "tu-vung", label: "Từ vựng" },
            { key: "reading", label: "Reading" },
            { key: "writing", label: "Writing" },
            { key: "listening", label: "Listening" },
            { key: "speaking", label: "Speaking" }
        ]
    },
    "toeic": {
        title: "TOEIC",
        desc: "Ôn luyện TOEIC hiệu quả từ cơ bản đến nâng cao",
        gradient: "linear-gradient(135deg, #A5D8FF 0%, #3B82F6 100%)",
        icon: "fa-briefcase",
        filters: [
            { key: "all", label: "Tất cả" },
            { key: "ngữ-pháp", label: "Ngữ pháp" },
            { key: "tu-vung", label: "Từ vựng" },
            { key: "reading", label: "Reading" },
            { key: "listening", label: "Listening" },
            { key: "writing", label: "Writing" },
            { key: "speaking", label: "Speaking" }
        ]
    },
    "giao-tiep": {
        title: "Giao Tiếp",
        desc: "Kỹ năng giao tiếp tiếng Anh tự tin trong mọi tình huống",
        gradient: "linear-gradient(135deg, #B5EAD7 0%, #10B981 100%)",
        icon: "fa-comments",
        filters: [
            { key: "all", label: "Tất cả" }
        ]
    },
    "lo-trinh": {
        title: "Lộ Trình Học",
        desc: "Lộ trình chi tiết cho từng mục tiêu tiếng Anh",
        gradient: "linear-gradient(135deg, #FFEAA7 0%, #F59E0B 100%)",
        icon: "fa-route",
        filters: [
            { key: "all", label: "Tất cả" },
            { key: "lo-trinh-ta-pho-thong", label: "Lộ trình TA Phổ Thông" },
            { key: "lo-trinh-ielts", label: "Lộ trình IELTS" },
            { key: "lo-trinh-toeic", label: "Lộ trình TOEIC" },
            { key: "lo-trinh-giao-tiep", label: "Lộ trình Giao Tiếp" }
        ]
    }
};
