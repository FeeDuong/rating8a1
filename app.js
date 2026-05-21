/* eslint-disable */
// Cấu hình Supabase (Giữ nguyên của con)
const SUPABASE_URL = "https://ymqojrhnallaphkuhbcml.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcW9qcmhubGxhcGhrdWhiY21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjE4MzIsImV4cCI6MjA5NDgzNzgzMn0.q9C7cviN2cFt-0zwtqkV44ieewVp0wuNmLaxvBJ438c";
const mySupabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DANH SÁCH HỌC SINH 8A1 (Trích xuất từ file của con) [cite: 1, 2, 3]
const STUDENT_LIST = [
    "Nguyễn Quốc An", "Dương Quỳnh Anh", "Vũ Phương Anh", "Tạ Khánh Băng", "Hoàng Quỳnh Chi", 
    "Đỗ Linh Đan", "Nguyễn Hoàng Dương", "Nguyễn Hoàng Phi Dương", "Nguyễn Thái Bình Dương", 
    "Phùng Ánh Dương", "Bùi Ngân Giang", "Đỗ Hương Giang", "Nguyễn Hà Giang", "Nguyễn Thị Trà Giang", 
    "Đỗ Hoàng Hải", "Nguyễn Văn Hải", "Dương Trung Hiếu", "Ngô Duy Hưng", "Dương Tuấn Huy", 
    "Nguyễn Ngọc Huy", "Nguyễn Bảo Khánh", "Phùng Duy Khánh", "Phạm Nhật Trung Kiên", "Ngô Duy Lân", 
    "Tăng Ngọc Linh", "Phạm Nguyễn Hải Long", "Hà Tuyết Mai", "Nguyễn Hải Minh", "Nguyễn Nguyệt Minh", 
    "Bùi Trà My", "Đỗ Diễm Thảo My", "Nguyễn Ngọc Trà My", "Nguyễn Hải Nam", "Nguyễn Nhật Nam", 
    "Bùi Kim Ngân", "Bùi Thị Minh Ngọc", "Dương Tâm Ngọc", "Hoàng Như Ngọc", "Tạ Hoàng Minh Ngọc", 
    "Nguyễn Thị Tuyết Nhung", "Phùng Nhất Phi", "Phùng Hải Phong", "Vũ Tuấn Phong", "Dương Hoàng Quân", 
    "Nguyễn Minh Quân (19/11)", "Nguyễn Minh Quân (30/10)", "Đỗ Hải Thanh", "Bùi Anh Thư", 
    "Vũ Thu Thủy", "Phùng Minh Trang", "Nguyễn Tuấn Tú", "Nguyễn Minh Tuấn", "Phùng Mạnh Tùng"
];

// DOM Elements
const studentSelect = document.getElementById("studentSelect");

// Đổ dữ liệu vào giao diện
STUDENT_LIST.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    studentSelect.appendChild(option);
});

// Các logic khác con copy tiếp từ file cũ của con vào đây nhé!
console.log("Hệ thống đã nạp xong " + STUDENT_LIST.length + " chiến thần 8A1!");