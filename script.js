function upDate(previewPic) {
  console.log("Sự kiện upDate kích hoạt!");
  console.log("Alt:", previewPic.alt, " | Src:", previewPic.src);

  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Sự kiện unDo kích hoạt!");
  
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}