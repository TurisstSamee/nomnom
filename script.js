document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện khi người dùng nhấn "Tạo Đề Xuất"
    document.getElementById("generateBtn").addEventListener("click", function () {
        // Lấy giá trị từ các trường nhập thông tin
        const age = document.getElementById("age").value;
        const goal = document.getElementById("goal").value;
        const platform = document.getElementById("platform").value;
        const style = document.getElementById("style").value;

        let result = "";  // Biến chứa kết quả cuối cùng

        // Xử lý độ tuổi khách hàng
        if (age < 18) {
            result += "<p>Đối tượng khách hàng chưa đủ tuổi.</p>";
        } else if (age <= 35) {
            result += "<p>Độ tuổi khách hàng trẻ, phù hợp với hình ảnh sống động và nội dung ngắn.</p>";
        } else if (age > 35) {
            result += "<p>Đối tượng khách hàng trưởng thành, ưu tiên nội dung dài và giá trị lâu dài.</p>";
        }

        // Xử lý mục tiêu chiến dịch
        if (goal === "engagement") {
            result += "<p>Mục tiêu chiến dịch: Tăng tương tác. Sử dụng video ngắn (Reels, TikTok).</p>";
        } else if (goal === "education") {
            result += "<p>Mục tiêu chiến dịch: Giáo dục. Sử dụng video dài (YouTube).</p>";
        } else if (goal === "sales") {
            result += "<p>Mục tiêu chiến dịch: Tăng doanh thu. Tập trung vào hình ảnh chất lượng cao và quảng cáo trả phí.</p>";
        }

        // Xử lý nền tảng sử dụng
        if (platform === "Instagram" || platform === "TikTok") {
            result += `<p>Chọn nền tảng: ${platform}. Phù hợp với hình ảnh và video ngắn dễ chia sẻ.</p>`;
        } else if (platform === "LinkedIn") {
            result += `<p>Chọn nền tảng: ${platform}. Tạo bài viết chuyên môn, case studies.</p>`;
        } else if (platform === "Facebook") {
            result += `<p>Chọn nền tảng: ${platform}. Sử dụng quảng cáo và bài viết dài.</p>`;
        }

        // Xử lý phong cách
        if (style === "style1") {
            result += "<p>Phong cách: Trẻ trung, năng động, phù hợp với đối tượng khách hàng trẻ.</p>";
        } else if (style === "style2") {
            result += "<p>Phong cách: Trưởng thành, lịch lãm, phù hợp với đối tượng khách hàng trưởng thành.</p>";
        } else if (style === "style3") {
            result += "<p>Phong cách: Độc lạ, sáng tạo, phù hợp với những chiến dịch nổi bật và khác biệt.</p>";
        } else if (style === "style4") {
            result += "<p>Phong cách: Sáng tạo, phá cách, phù hợp với chiến dịch muốn gây ấn tượng mạnh.</p>";
        }

        // Hiển thị chiến lược nội dung
        result += `<h3>💖Chiến Lược Nội Dung:</h3>`;
        if (goal === "engagement") {
            result += "<p>Chia sẻ video ngắn về các chủ đề thú vị trên TikTok và Instagram. Tạo các thử thách hoặc hashtag viral.</p>";
        } else if (goal === "education") {
            result += "<p>Tạo các video hướng dẫn hoặc chia sẻ thông tin chuyên sâu về ngành nghề. Sử dụng YouTube hoặc LinkedIn.</p>";
        } else if (goal === "sales") {
            result += "<p>Đầu tư vào quảng cáo video chất lượng cao hoặc hình ảnh sản phẩm chi tiết. Tập trung vào các bài viết và chiến dịch Facebook.</p>";
        }

        // In ra kết quả trong phần "Kết Quả Đề Xuất"
        document.getElementById("result").innerHTML = result;

        // Mở màn và hiển thị kết quả
        const resultSection = document.getElementById("result-section");
        resultSection.classList.add("show");
    });
});
