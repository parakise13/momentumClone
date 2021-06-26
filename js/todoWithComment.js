const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
/* 3. input에 있는 value를 가져오기 위해 일단 input을 가져옴 
동일한 방식으로는 const toDoInput = document.querySelector('#todo-form input')👆*/
const toDoList = document.querySelector('#todo-list');
/* 1. todo list를 만들기위해 html에서만든 form과 ul을 가져옴 */
const TODOS_KEY = 'todos';
/* 24. 23번에 todos가 또 들어가고 20번에서도 이미 사용한 것이라 변수로 선언해쥼!👆 */

//const toDos = [];
/* 18. localStorage에 toDo를 저장하기 위해 array를 만듦 👆*/
let toDos = [];
/* 27. 26번까지의 문제점을 해결하기 위해서 toDos array를 수정해줌. 
빈 값으로 시작하는 대신에 const를 let으로 바꿔서 업데이트가 가능하도록 만들고 28번으로 이동👆 */

function saveTodos() {
    /*localStorage.setItem('todos', JSON.stringify(toDos));
    25. 24번에서 변수로 선언한 것으로 바꾸어줌 👇*/
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
/* 20. 18&19번에서 만든 array를 localStorage에 추가하기위한 함수생성👆
참고로 localStorage에는 array를 넣을수없음. 그래서 이렇게 localStorage에 저장해도 array의 형태가 아니라 단지 text의 형태로 저장됨
22. 그래서 두번째인자의 toDos를 JSON.stringify()를 이용해서 string으로 만들어줌
이렇게하면 string의 형태가 되어 localStorage에도 string으로 저장됨 
JSON.stringify(): 어떤 형태든 무조건 string의 형태로 바꾸어줌 */

function deleteToDo(event) {
    const li = event.target.parentElement;
    /* 16. 14번의 두번째 인자로 넣어줄 toDoList를 삭제하는 함수를 만들어줌 
    이제 여기서 버튼을 누르면 여러개의 li가 생성됐을때 어떤 li의 btn을 누르는지 확인하고 그것만 지워줘야함. 그 버튼의 부모를 찾는 방식으로 어떤 x가 클릭 되었는지 알 수 있음 👆*/
    li.remove();
    /* 17. 위에서 그 부모를 찾아서 그 부모를 지워줌 👆*/
    
    //toDos = todos.filter(toDo => toDo.id !== li.id);
    /* 34. filter를 이용해서 우리가 지우려고 x를 클릭했던 li의 id를 갖고 있는 todo를 지움
    참고로 filter는 무조건 true를 반환해야 array에 남겨두고 새로운 array를 만들어줌. 기존의 array를 수정하는 것이 아님. 즉 위의 식을 보면 toDo list의 id 중에서 내가 클릭한 li의 id와 다른 것을 남겨서 array로 만드는 것(클릭하지 않은 li의 id는 array에 남긴다)👆*/
    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    /* 35. but!!!! 여기서 중요한건 상기처럼 작성해도 아무것도 지워지지않음. 왜냐면 toDo.id는 숫자고 li.id는 string이기 때문. parseInt로 문자열을 숫자로 바꿔줘야함.  👆*/
    saveTodos();
    /* 36. 35번과 같이 filter로 지워주고 저장된 saveTodos는 다시 호출해줌👆*/
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    /* 33. li의 id는 newTodo의 id로 지정👆*/
    const span = document.createElement('span');
    /* 8. 이 함수에서는 ul(list)에 추가할 내용을 만들어서 html로 보내서 출력할 것이고 그냥 list를 만드는 것이 아니라 span과 함께 만들 것임. 왜냐면 나중에 삭제하는 button을 넣어 줄 것이기 때문에 👆*/
    span.innerText = newTodo.text;
    //span.innerText = newTodo;
    /* 10. span의 innerText로 newTodo를 넣어줌. 그러면 span의 text는 handleToDoSubmit에서 온 newTodo가 되는 것 👆*/
    /* 32. 우리가 만든 obj를 보면 obj는 text와 id를 가지고 있음. 즉, span.innerText는 newTodo가 아니라 newTodo의 text가 되어야 하는것임 👆*/
    const button = document.createElement('button');
    /* 12. 생성한 todo list를 삭제할 수 있게 하기 위해서 button을 생성해줌. 👆*/
    button.innerText = '❌';
    /* 13. 그리고 그 button에 x표시의 text를 넣어준다. 👆*/
    button.addEventListener('click', deleteToDo);
    /* 15. x 버튼을 클릭하면 todo list를 삭제하기위해 btn이 click을 인지하게 해줌👆
    그리고 15번에서 만든 함수를 넣어준다.*/
    li.appendChild(span);
    /* 9. 그런데 그냥 불러오면 span이 li 안에 있는 것이 아니기 때문에 안으로 들어가게 만들어줘야함. 👆*/
    li.appendChild(button);
    /* 14. button을 li안에 넣어주기 위해 appenChild 사용. span의 뒤에 넣어주기 위해서 9번 다음줄에 작성해준것 👆*/
    toDoList.appendChild(li);
    /* 11. 마지막으로 만든 li를 html로 보내준다👆 */
}
/* 6. paintToDo 함수 만들고 이 function은 toDo를 그리는 역할을 담당함. 
그러나 아직 이 function은 그려야할 것이 무엇인지 모르는 상태임. 일단 인자를 주고 
그 인자는 물론 text가 될 것이고 handleTodoSubmit function이 이 함수를 사용하게 될 것임.  */


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    /* 5. 그리고 value의 값을 지우기 전에 입력한 값은 저장해줌 👆 
    이렇게 하면 값이 지워지지 않는 이유는 js가 input의 value를 새로운 변수를 만들어서 거기에 복사하기 때문임 */
    toDoInput.value = '';
    /* 4. 3번에서 가져온 값을 enter를 치면 사라지게 만들기 위해서 value에 빈 값 ("")을 넣어줌 👆*/
    const newTodoObj = {
        text: newTodo,
        id: Date.now();
    }
    /* 29. 28번에서 언급한 문제점들을 해결하기 위해서 toDos에 그냥 text를 push하는 것이 아니라 obj를 push하기 위해 obj 생성
    참고로 Date.now()는 현재 시간을 초(ms)단위로 나타내주는 것인데 이것이 todo를 저장한 시간을 초 단위로 표현해주고 그것을 id로 줄것임. id를 만들어준 이유는 각각의 li item을 구별하기 위함👆*/
    toDos.push(newTodoObj);
    //toDos.push(newTodo);
    /* 19. 18번에서 만든 array에 newTodo가 생길때마다 push로 추가해줌 👆*/
    /* 30. 29번에서 생성한 obj를 기존의 newTodo를 push하던 array에 넣어줌. 
    이렇게 하면 array에는 text로 todo가 id로는 text를 submit한 시간을 나타내줌 👆*/
    paintToDo(newTodoObj);
    //paintToDo(newTodo);
    /* 7. 위에서 만든 paintToDo 함수 넣어줌 
    위에서 변수로 지정한 newTodo는 input의 value를 비우기 전의 값을 나타내는 string이고 그 입력된 값을 paintTodo에 넣어서 호출하는 것! */
    /* 31. 30번과 마찬가지고 paintToDo에도 text가 아닌 obj를 넣어줌👆
    다만 이렇게 하면 input에 todo를 입력했을때 object가 나옴 그래서 paintToDo함수를 수정해야함*/
    saveTodos();
    /* 21. 20번에서 생성한 함수를 실행👆*/
}


toDoForm.addEventListener('submit', handleTodoSubmit);
/* 2. greeting에서 했던 것과 비슷한 것을 할것임. submit의 새로고침을 preventDefault를 이용해서 막는것. 
다시 말하지만 handleTodoSubmit에 event를 인자로 넣어주면 JS는 방금 발생한 event를 첫번째 인자로 준다.👆*/



const savedTodos = localStorage.getItem(TODOS_KEY);
/* 23. 위의 모~~든것이 다 된 후에 실행하기위해 마지막 줄에 작성...
우리가 22번에서 string으로 변경해서 localStorage에 저장했던 string들을 살아있는 array로 바꾸기 위해서 JSON.parse()를 사용해서 item을 가져와야함. 그러기 위해 일단 todos를 가져온다 👆 */

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    /* 25. todo에 아무것도 없을때는 null이 되는데 localStroage가 존재할때만(즉 null이 아닐때만) 23번에서 가져온 Todo들을 parse를 이용해 JS object로 변하게 하는것.👆 
    JS object인 array로 변경한 이유는 array로 변경하는 순간 우리는 그것을 가지고 function을 실행하는 등 무언가를 할 수 있게 됨 (중요!)*/
    
    toDos = parsedToDos;
    /* 28. localStorage에 toDo들이 있으면 toDos에 paresdToDos를 넣어서 전에 있던 todo들을 복원할 것👆 이렇게 toDos에 paresedToDos를 넣어주면 새로고침을 해도 이전의 to do 들을 가져오기 때문에 저장됨. 
    
    그리고 또 문제가 있음.... 여기까지하면 저장은 하지만 내가 todo를 삭제버튼으로 삭제해도 localStorage에 남아 있게 되고 만약 같은 이름의 todo가 2개 있다면 그중에 하나를 지워도 console에서 확인했을떄 내가 어떤 todo를 지운건지 알 수 없음. 그래서 id를 부여할 것임 */
    
    parsedToDos.forEach(paintToDo);
    /* 26. array로 만든 후 그 array 각각의 item에 대해 무언가 실행하기 위해 forEach를 사용하여 function을 실행시킴👆 savedTodos가 array가 아니라 단지 string이었다면 forEach를 사용할 수 없음.
    forEach() 괄호 안에 arrow function을 만들어서 넣어도 되고 따로 함수를 생성해서 넣어도됨.
    지금의 경우에는 따로 함수를 생성할 필요없이 우리가 8번에서 만들었던 paintToDo 함수를 실행시켜 주면됨. 왜냐면 우리가 원하는게 그것을 실행시키는 것이니까!
    (새로 고침을 해도 paintToDo해서 todo들이 지워지지않고 화면에 보이게 하기위함)
    
    26번까지의 문제점이 있음. 
    => 새로고침을 하면 이전의 todo들이 지워지지않는데 localStorage에는 새로고침 이전의 todo들은 지워지고 새로 입력한 todo들만 저장이 되어있음. 이렇게 되는 이유는 18번에서 만든 todos array는 항상 시작이 비어있는 array이기 때문임.
    
    그래서 이 다음에 해야하는 것이 이전의 todo와 새로운 todo들을 모두 유지하는 것임*/
}