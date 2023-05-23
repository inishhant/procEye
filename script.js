const videoObject = document.getElementById("video");
const canvas = document.getElementById('canvas-element');
const context = canvas.getContext('2d');

function captureImage() {
    context.drawImage(videoObject, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Send the image data to the server
    sendImageToServer(imageData);
  }
  function sendImageToServer(imageData) {
    console.log(imageData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/upload-image');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`image=${encodeURIComponent(imageData)}`);
  }
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    videoObject.srcObject = stream;
    videoObject.addEventListener("loadedmetadata", () => {
        videoObject.play();
        setInterval(()=>{
            captureImage();
        },5000)
    });
  });