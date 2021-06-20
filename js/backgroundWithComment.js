const images = ['01.jpg', '02.jpg', '03.jpg'];
// 1. 배경이미지를 가져오기 위해 array를 만들어줌 

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 2. 랜덤으로 이미지를 선택하기 위해 Math.random()을 이용. (quote와 동일방식)

/* 3. html에 실제로 이미지를 추가해줌. 이것은 html에서 무언가를 js로 가져오기만 했던 여태까지와는 다르게 js에서 무엇인가 만들어서 html에 추가하는것!
JS에서 이미지를 만들고 html로 가져가면 됨 👇*/
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;
/* 참고로 string을 가지고 random으로 만들어준것이기때문에 반드시 array의 사진 이름과 확장자명은 이미지폴더의 사진들과 동일해야함! 

또한 이렇게 html에서 img를 생성하는 것처럼 생성은 했지만 이것은 document에는 존재하지 않고 JS에만 존재하는 것이기때문에 화면에는 나오지 않음. 다음과 같이 body에 추가👇*/
document.body.appendChild(bgImage);
