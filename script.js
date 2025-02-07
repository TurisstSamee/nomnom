document.addEventListener("DOMContentLoaded", function () {
    // 🏆 Tạo hiệu ứng đám mây bay ngẫu nhiên
    function createClouds() {
        const cloudContainer = document.querySelector(".clouds");

        if (!cloudContainer) return; // Kiểm tra nếu không có phần tử .clouds

        for (let i = 0; i < 5; i++) {
            let cloud = document.createElement("span");
            cloud.classList.add("cloud");

            // Vị trí & kích thước ngẫu nhiên
            let randomTop = Math.random() * 40 + 10;
            let randomSize = Math.random() * 100 + 100;
            let randomDuration = Math.random() * 10 + 15;

            cloud.style.top = `${randomTop}%`;
            cloud.style.width = `${randomSize}px`;
            cloud.style.height = `${randomSize / 2}px`;
            cloud.style.animationDuration = `${randomDuration}s`;

            cloudContainer.appendChild(cloud);
        }
    }

    createClouds(); // Chạy khi trang load

    // 🏆 Xử lý sự kiện "Tạo Đề Xuất"
    const generateBtn = document.getElementById("generateBtn");
    const resultSection = document.getElementById("result-section");
    const resultDiv = document.getElementById("result");

    if (!generateBtn || !resultSection || !resultDiv) {
        console.error("Lỗi: Không tìm thấy phần tử cần thiết trong HTML.");
        return;
    }

    generateBtn.addEventListener("click", function () {
        // 🛑 Lấy giá trị input, nếu không có thì gán giá trị mặc định
        const age = document.getElementById("age")?.value || 0;
        const goal = document.getElementById("goal")?.value || "engagement";
        const platform = document.getElementById("platform")?.value || "Instagram";
        const style = document.getElementById("style")?.value || "style1";

        let result = ""; // Chuỗi chứa nội dung kết quả

        // 🏆 Xử lý độ tuổi khách hàng
        if (age < 18) {
            result += "<p>🚫 Đối tượng khách hàng chưa đủ tuổi.</p>";
        } else if (age <= 35) {
            result += "<p>👶 Độ tuổi khách hàng trẻ, phù hợp với hình ảnh sống động và nội dung ngắn.</p>";
        } else {
            result += "<p>🧑‍💼 Đối tượng khách hàng trưởng thành, ưu tiên nội dung dài và giá trị lâu dài.</p>";
        }

        // 🏆 Xử lý mục tiêu chiến dịch
        switch (goal) {
            case "engagement":
                result += "<p>💬 Tăng tương tác: Video ngắn (Reels, TikTok).</p>";
                break;
            case "education":
                result += "<p>📚 Giáo dục: Video dài (YouTube).</p>";
                break;
            case "sales":
                result += "<p>🛍️ Tăng doanh thu: Hình ảnh chất lượng cao & quảng cáo trả phí.</p>";
                break;
        }

        // 🏆 Xử lý nền tảng
        result += `<p>🌍 Nền tảng: ${platform} - `;
        if (platform === "Instagram" || platform === "TikTok") {
            result += "Phù hợp với hình ảnh & video ngắn dễ chia sẻ.</p>";
        } else if (platform === "LinkedIn") {
            result += "Tạo bài viết chuyên môn, case studies.</p>";
        } else {
            result += "Tập trung vào bài viết dài & quảng cáo.</p>";
        }

        // 🏆 Xử lý phong cách nội dung
        const styles = {
            style1: "🎨 Trẻ trung, năng động.",
            style2: "🕴️ Trưởng thành, lịch lãm.",
            style3: "🤩 Độc lạ, sáng tạo.",
            style4: "🔥 Sáng tạo, phá cách."
        };
        result += `<p>💡 Phong cách: ${styles[style] || "Mặc định"}.</p>`;

        // 🏆 Chiến lược nội dung
        result += `<h3>🚀 Chiến Lược Nội Dung:</h3>`;
        if (goal === "engagement") {
            result += "<p>🎥 Video ngắn trên TikTok & Instagram. Tạo thử thách & hashtag viral.</p>";
        } else if (goal === "education") {
            result += "<p>🎓 Video hướng dẫn chuyên sâu trên YouTube & LinkedIn.</p>";
        } else {
            result += "<p>🛒 Quảng cáo hình ảnh/video chuyên nghiệp trên Facebook.</p>";
        }

        // 🔥 Hiển thị kết quả
        resultDiv.innerHTML = result;
        resultSection.classList.add("show");
    });
});
