window.onload = function () {
  setTimeout(function () {
    document.getElementById("splash-screen").style.display = "none";
  }, 2000);
};

function tryItNow() {
  const video = document.getElementById("video");
  const captureButton = document.getElementById("capture-button");
  video.style.display = "block";
  captureButton.style.display = "block";

  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error("Error accessing camera:", err);
    });
}

function captureImage() {
  const video = document.getElementById("video");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imgUrl = canvas.toDataURL("image/png");

  const img = document.createElement("img");
  img.src = imgUrl;
  document.getElementById("gallery").appendChild(img);
}

function showTab(tabName) {
  const tabs = document.querySelectorAll(".content");
  tabs.forEach((tab) => (tab.style.display = "none"));
  document.getElementById(tabName).style.display = "block";
}

function changeTextSize(action) {
  const root = document.documentElement;
  let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base'));
  if (action === 'increase') {
    root.style.setProperty('--font-size-base', (currentSize + 0.1) + 'rem');
  } else {
    root.style.setProperty('--font-size-base', (currentSize - 0.1) + 'rem');
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
