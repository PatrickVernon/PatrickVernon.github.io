const imageInput = document.getElementById('img-input');

imageInput.addEventListener('change', event => {
  const imageFiles = event.target.files;

  Array.from(imageFiles).forEach((image, index) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      localStorage.setItem(`img-${index}`, reader.result);
    });

    if (image) {
      reader.readAsDataURL(image);
    }
  });

  const imageTags = document.querySelectorAll('#img-0, #img-1');

  imageTags.forEach((img, index) => {
    img.src = localStorage.getItem(`img-${index}`);
  });
});