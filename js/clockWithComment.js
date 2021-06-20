const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    /* 3. 숫자가 한자리만 뜨는 것을 막기 위해 시간을 다 나눠줌 👇
    참고로 getHours에는 바로 padStart를 써줄 수 없음. 왜냐면 getHours로 나오는 값은 숫자이기때문에 숫자를 text로 바꿔줘야함. 
    String(new Date().getHours()); 이렇게 하면 number가 string으로 출력됨 
    String()으로 한번 감싸주고 .padStart를 사용해야함!! */
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    /*clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    위에서 const로 변수를 생성해 코드를 수정했기때문에 text도 하기와 같이 변경됨 👇*/
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
/* 2. 여기에서 함수를 한번 더 불러준 이유는 밑에 interval만 하면 페이지에 들어갔을때 1초 뒤에 시계가 뜨기 때문에 여기서 한번 바로 시계를 불러주고 interval을 하는 것 */
setInterval(getClock, 1000);
/* 1. getHours, Minutes, Seconds를 이용해서 시계를 매 시간 불러오게 만들어 줬지만. 이렇게 시계를 불러오면 01:01:01 이렇게 되는것이 아니라 0없이 1:1:1 이렇게 됨 */

/*
interval: 매번 일어나야하는 무언가 ex) 매 2초마다 어떤 일이 일어나게 하는 것
        js에 이미 내장되어있는 것이며 기본 형식은 setInterval(argument, time);

tiemout: 함수같은 어떤 일들이 바로 실행되는 것이아니라 일정시간 뒤에 딱 한번 실행되게 하는것. 
        기본 형식은 setTimeout(argument, time);

날짜를 가져오는 것도 이미 js에 내장되어 있고 지금 날짜를 확인하고 싶을때는 new Date()를 사용하고 
오늘 날짜에서 특정한 날짜, 시간 요일만 가져오고 싶다면 .getDate나 .getDay와 같은 method 이용 

padStart: string에 쓸수 있는 function. 
        기본 형식은 "1".padStart(2, '0');  만약 1의 글자 길이가 2가 안되면 0을 추가하는 함수 
        그래서 "01"을 출력해줌. 만약 "12".padStart(2, '0');이면 아무것도 작업하지 않음. 왜냐면 12이는 이미 글자의 길이가 2개이기때문. 이것은 start라서 앞에 붙이고 padEnd도 있음 
*/