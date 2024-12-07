var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");

// Khi nhấn nút play, phát video và ẩn nút play
playButton.onclick = function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none"; // Ẩn nút play khi video bắt đầu
  } else {
    video.pause();
    playButton.style.display = "block"; // Hiển thị lại nút play khi video bị dừng
  }
};

// Hiển thị lại nút play khi video kết thúc
video.onended = function () {
  playButton.style.display = "block";
};
