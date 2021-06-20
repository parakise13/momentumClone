/*const loginForm = document.querySelector('.login_form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');*/
// 1. html에서 class와 input, button을 가져옴 이것보다 짧은 방법은 하기와 같음 

const loginForm = document.querySelector('.login_form');
const loginInput = document.querySelector('.login_form input');
const greeting = document.querySelector('#greeting');
/* 6. html에서 만든 id를 가져오는 변수를 만든다. */
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
/* 9. 반복적으로 타이핑하지 않기위해 변수로 만든 것 
여기서 대문자를 쓰는 이유는 관습적으로 string만 포함된 변수는 대문자로 표기해서 사용함 
이렇게 반복되는 string을 따로 변수로 지정해주는 이유는 그냥 사용하면 오타가났을때 js가 어디가 잘못된것인지 모르지만 변수로 지정하고 사용해서 오타가 나면 js가 변수가 틀렸다고 알려주기때문*/ 

/* 3.함수 안에 첫번째 인자를 넣어주고 preventDefault를 수행하게 해서 브라우저의 기본 동작을 막아줌. 그 첫번째 인자는 tomato가 될수도 있고 potato가 될수도 있지만 관행적으로 event를 적어줌  */
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(/*'hidden'*/HIDDEN_CLASSNAME);
    /* 4. username을 변수로 저장해주고 hidden이라는 클래스를 추가하는 함수 만듦
    이렇게하면 form은 사라지지만 값은 남아있음 
    5. html로 돌아가 내용은 비워져있는 class name이 hidden이고 id가 greeting인 h1을 만든다. 
    이렇게 되면 숨겨진 h1이 존재하게됨. 그 다음에 할 일은 form을 숨기고 h1을 표시하는 것 */

    /* 11. username을 localStorage에 저장하는 함수를 만듦 */
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    /* 7. greeting에 username에게 인사하는 text를 추가 상기의 방법으로 text를 추가 할수도 있지만 하기의 방법이 더 좋음 */
    //greeting.innerText = `Hello ${username}`;
    //greeting.classList.remove(/*'hidden'*/HIDDEN_CLASSNAME);
    /* 8. 인사를 추가하고 hidden class를 지워주는 함수를 생성. 
    (단, hidden을 지우는 함수를 두번 사용했으니 편리하게 변수로 만들어주자. ) */
    paintGreeting(username);
}

/* 15. 위의 greeting 어쩌고 함수도 똑같이 paintGreeting 함수로 교체👆*/ 

/* 2. html의 submit을 감지해서 새로고침을 하지 않고 기록하게 한다. 
참고로 submit은 엔터를 누르거나 버튼을 클릭할 때 발생하고 
새로고침이 되는 것은 브라우저가 기본적으로 수행하는 동작(default behavior) */
//loginForm.addEventListener('submit', onLoginSubmit);

/* 10. localStorage: 브라우저에 기본적으로 내장되어 있는 API로 console에 localStorage라고 입력하면 볼 수 있음. localStorage는 우리가 브라우저에 뭔가를 저장할 수 있게하고 나중에 가져다 쓸 수 있음. 많은 method를 사용할 수 있는데 그중 setItem은 local storage에 정보를 저장할 수 있게함 
localStorage.setItem("username", "nico"); 이런식으로 입력하면 key에는 username이, value에는 nico가 저장됨. 그리고 localStorage.getItem("username"); 을 입력하면 값을 가져올 수도 있음. 물론 삭제도 가능함 removeItem이라는 method를 통해서! */


/* 13.이렇게 코드를 작성하면 모든것이 작동이 잘 되지만 greeting.innerText와 greeting.classList.remove가 반복되고있음. 반복하지 않기 위해서 이것을 paintGreeting이라는 function으로 만들어줌 👇*/
function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* 11. 그 다음으로 할 일은 localStorage에 username이 저장되어 있으면 새로고침을 하거나 다시들어왔을때 form을 다시 입력하지 않고 greeting을 보여주고 저장이 안되어있어서 usernema이 null로 나오는 경우에만 form 을 보여주게 하기위해서 username의 유무를 확인하는 작업을 해야함. 👇*/

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
    // 12. 위에서 맨처음 작성했던 EventListener를 여기로 옮겨옴 
} else {
    //show the greetings 
    /*greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreeting(savedUsername);
}

/* 14. 13번에서 함수로 greeting을 만들어줬기 때문에 위에서 만든 greeting 어쩌구는 함수로 바꿔주고 인자로는 savedUsername이 올 수 있게해줌. 위의 15번과 인자를 다르게 넣어주는 이유는 위에서는 유저가 입력한 username이 오게 하는 것이고 밑에서는 이미 저장된 username에서 불러오는 것이기 때문👆*/ 