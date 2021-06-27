const API_KEY = '64d28b810aabcf14458d21729721bc51';
/* 6. weather API에서 받은 API_key를 변수로 만들어줌👆 */


function onGeoOk(position) {
    /* 4. 위치를 가져오면 그냥 함수를 실행하는 것보다 더 많은 정보를 주기 때문에 
    parameter를 넣어줌(여기서는 position이라고 했음)👆 */
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    /* 5. 위도와 경도를 가져오기 위해 GeolocationPosition이용. GeolocationPosition안에있는 coords안에있는 latitude와 longitude를 가져와 변수로 지정👆 
    일단 가져오고 가져온 lat과 lon을 장소로 바꿔줄 서비스(API)를 이용할 것임*/

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    /* 7. weather API에서 현재의 위치를 알려주는 API를 찾아서 주소를 가져옴. 그리고 위도와 경도가 들어갈 자리에 우리가 만들어준 lat & lon 변수를 넣어주고 이 주소를 ``백틱으로 감싼 URL변수로 만들어줌👆 
    9. url에 units=metric를 추가했음 화씨를 섭씨로 바꾸기 위해! 단위를 변경해준 것*/
    
    //fetch(url);
    /* 8. fetch(promise)를 이용해서 우리가 만든 url를 불러줌👆 
    fetch를 해주고 개발자도구에서 network의 wifi를 보면 내 위치를 확인하고 누군가 url로 요청을하는데 js가 fetch를 사용해서 요청하는것임. 실제로 url에 갈 필요 없이 JS가 URL를 대신 불러주는 것
    이 다음에 할 것이 내가 있는 장소의 이름을 얻고 그 다음으로 날씨를 얻는 것.*/
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
    /* 12. html에서 만든 weather을 위한 div를 id를 이용해 불러줌 👆 
    다만 한번에 부르지 않고 weather과 city를 각각 나눌거라 각 span을 따로 부름*/
        //const name = data.name;
        //const weather = data.weather[0].main;
    /* 11. data를 얻는 함수 안에 변수로 json의 data안의 name과 weather(weather은 array고 array의 첫번째 obj를 가져올 것임)을 변수로 선언👆 그리고 html로 이동해서 div를 생성👉*/
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    /* 13. 12번에서 불러온 span에 innerText로 넣기 위해 11번에서 변수로 만들어 준것들을 위와같이 바꿔준다 👆 */
    });
    /* 10. fetch가 서버에 url을 요청하고 응답을 기다린 뒤 어떤 무언가를 하기위해서 then를 사용해서 response를 받아야함👆 json를 받아서 내용을 추출한 다음에 (then) data를 얻음.*/
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
    /* 3. 위치를 가져오는 것이 실패했을때 경고창을 띄움👆 */
}
/* 2. 위치를 가져오기 위해 함수를 2개 만듦. 하나는 성공했을때 실행할 함수고 하나는 실패했을때 실행할 함수👆 만들어준 뒤 1번의 인자로 넣어준다. */


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
/* 1. 브라우저에서 위치 좌표를 주는 함수👇 이걸 부르기만하면됨 
navigator.geolocation.getCurrentPosition() 
getCurrentPosition은 2개의 argument가 필요한데 하나는 모든 것이 잘 됐을때 실행될 것이고 나머지 하나는 에러가 발생했을때 사용할 것*/



/* 참고: openweathermap.org에서 무료로 좌표를 URL로 보내서 위치를 얻을 수 있는 API 
참고: fetch는 promise인데 promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것. */