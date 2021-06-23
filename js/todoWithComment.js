const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
/* 3. input에 있는 value를 가져오기 위해 일단 input을 가져옴 
동일한 방식으로는 const toDoInput = document.querySelector('#todo-form input')👆*/
const toDoList = document.querySelector('#todo-list');
/* 1. todo list를 만들기위해 html에서만든 form과 ul을 가져옴 */
const toDos = [];
/* 18. localStorage에 toDo를 저장하기 위해 array를 만듦 👆*/

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(toDos));
}
/* 20. 18&19번에서 만든 array를 localStorage에 추가하기위한 함수생성👆
참고로 localStorage에는 array를 넣을수없음. 그래서 이렇게 localStorage에 저장해도 array의 형태가 아니라 단지 text의 형태로 저장됨
22. 그래서 두번째인자의 toDos를 JSON.stringify()를 이용해서 string으로 만들어줌
이렇게하면 string의 형태가 되어 localStorage에도 array로 저장됨 
JSON.stringify(): 어떤 형태든 무조건 string의 형태로 바꾸어줌 */

function deleteToDo(event) {
    const li = event.target.parentElement;
    /* 16. 14번의 두번째 인자로 넣어줄 toDoList를 삭제하는 함수를 만들어줌 
    이제 여기서 버튼을 누르면 여러개의 li가 생성됐을때 어떤 li의 btn을 누르는지 확인하고 그것만 지워줘야함. 그 버튼의 부모를 찾는 방식으로 어떤 x가 클릭 되었는지 알 수 있음 👆*/
    li.remove();
    /* 17. 위에서 그 부모를 찾아서 그 부모를 지워줌 👆*/
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    /* 8. 이 함수에서는 ul(list)에 추가할 내용을 만들어서 html로 보내서 출력할 것이고 그냥 list를 만드는 것이 아니라 span과 함께 만들 것임. 왜냐면 나중에 삭제하는 button을 넣어 줄 것이기 때문에 👆*/
    span.innerText = newTodo;
    /* 10. span의 innerText로 newTodo를 넣어줌. 그러면 span의 text는 handleToDoSubmit에서 온 newTodo가 되는 것 👆*/
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
    toDos.push(newTodo);
    /* 19. 18번에서 만든 array에 newTodo가 생길때마다 push로 추가해줌 👆*/
    paintToDo(newTodo);
    /* 7. 위에서 만든 paintToDo 함수 넣어줌 
    위에서 변수로 지정한 newTodo는 input의 value를 비우기 전의 값을 나타내는 string이고 그 입력된 값을 paintTodo에 넣어서 호출하는 것! */
    saveTodos();
    /* 21. 20번에서 생성한 함수를 실행👆*/
}


toDoForm.addEventListener('submit', handleTodoSubmit);
/* 2. greeting에서 했던 것과 비슷한 것을 할것임. submit의 새로고침을 preventDefault를 이용해서 막는것. 
다시 말하지만 handleTodoSubmit에 event를 인자로 넣어주면 JS는 방금 발생한 event를 첫번째 인자로 준다.👆*/