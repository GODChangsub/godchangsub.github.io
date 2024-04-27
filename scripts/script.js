let selectedType = null;

function handleClick(type, clickedImage) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    const imageType = image.alt.charAt(0);
    if (imageType === type) {
      if (image === clickedImage) {
        image.classList.add('highlight');
        selectedType = type;
      } else {
        image.classList.remove('highlight');
      }
    } else if (selectedType !== imageType) {
      image.onclick = () => handleClick(imageType, image);
    }
  });
}

function reset() {
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    image.classList.remove('highlight');
    const type = image.alt.charAt(0);
    image.onclick = () => handleClick(type, image);
  });
  selectedType = null;
}

let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  const body = document.querySelector('body');
  if (darkMode) {
    body.classList.add('dark-mode');
    document.getElementById('darkModeButton').innerText = '라이트 모드';
  } else {
    body.classList.remove('dark-mode');
    document.getElementById('darkModeButton').innerText = '다크 모드';
  }
}

function openJokbo() {
  // 새 창을 열고 이미지를 표시합니다.
  const imageUrl = 'image/jokbo.png'; // 여기에 족보 이미지의 URL을 입력하세요
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`<img src="${imageUrl}" alt="족보">`);
}

function openCreatorLink() {
  // 새 창을 열고 이미지를 표시합니다.
  const imageUrl = 'image/ligero.png'; // 여기에 제작자 이미지의 URL을 입력하세요
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`<img src="${imageUrl}" alt="리게로">`);

}