const imageInput = document.getElementById('cameraFileInput');

imageInput.addEventListener('change', event => {
  // 👇️ Save the image to localStorage
  const image = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('image', reader.result);
  });

  if (image) {
    reader.readAsDataURL(image);
  }

  // 👇️ Take the image from localStorage
  // and display it
  const newImage = document.getElementById(
    'pictureFromCamera',
  );

  newImage.src = localStorage.getItem('image');
});

function t(){
    alert("Touched!");
}


/*Geolocation API*/
const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  /*Geolocation API*/