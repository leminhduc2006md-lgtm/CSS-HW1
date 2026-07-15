// Hàm cập nhật ảnh lớn và dòng chữ khi kích hoạt sự kiện (chuột hoặc bàn phím)
function upDate(previewPic) {
    // Thêm thông báo console.log để kiểm tra kích hoạt sự kiện
    console.log("Sự kiện upDate đã được kích hoạt thành công!");
    console.log("Đang lấy ảnh từ nguồn: " + previewPic.src);
    console.log("Nội dung văn bản thay thế (alt): " + previewPic.alt);
    
    let mainImageDiv = document.getElementById("image");
    
    // Thay đổi ảnh nền và văn bản của thẻ div lớn
    mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    mainImageDiv.innerHTML = previewPic.alt;
}

// Hàm khôi phục lại trạng thái ban đầu khi rời chuột hoặc mất focus bàn phím
function unDo() {
    console.log("Sự kiện unDo đã được kích hoạt thành công!");
    
    let mainImageDiv = document.getElementById("image");
    
    // Khôi phục lại các giá trị mặc định ban đầu
    mainImageDiv.style.backgroundImage = "url('')";
    mainImageDiv.innerHTML = "Di chuột hoặc Tab vào một hình ảnh bên dưới để hiển thị ở đây.";
}

// Hàm mới được gọi bởi sự kiện onload để thêm thuộc tính hỗ trợ tabfocus
function initializeGallery() {
    console.log("Trang web đã tải xong. Bắt đầu khởi tạo thuộc tính cho thư viện ảnh...");
    
    // Lấy tất cả các hình ảnh có class là 'preview'
    let images = document.querySelectorAll(".preview");
    
    // Viết một vòng lặp for để lặp qua từng hình ảnh và thêm thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã tự động thêm tabindex='0' cho hình ảnh thứ " + (i + 1));
    }
    
    console.log("Quá trình thiết lập tabindex hoàn tất. Trang web đã sẵn sàng hỗ trợ truy cập bằng bàn phím!");
}