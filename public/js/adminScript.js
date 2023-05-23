
function getImages(){
  fetch('http://localhost:5000/images')
  .then(response => response.json())
  .then(images => {
    // const imageContainer = document.getElementById('image-container');
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'image-container');
    images.forEach(image => {
        // console.log(image);
      const img = document.createElement('img');
      img.src = `http://localhost:5000/images/${image}`;
      imageContainer.appendChild(img);
    });
    document.body.appendChild(imageContainer);
  });
}


  async function getData() {
    const response = await fetch('http://localhost:5000/retrieve-data');
    const data = await response.json();
    const jsonData=JSON.parse(data);
    console.log(jsonData);

    const container = document.createElement('div');
    container.setAttribute('id', 'data-container');

    const header = document.createElement('h2');
    header.innerText = 'Data Received from the Server:';
    container.appendChild(header);

    const list = document.createElement('ul');
    for (const key in jsonData) {
      const item = document.createElement('li');
      item.innerText = `${key}: ${jsonData[key]}`;
      list.appendChild(item);
    }
    container.appendChild(list);

    document.body.appendChild(container);
  }
  
  getData();
  getImages();