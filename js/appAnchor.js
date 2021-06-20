const link = document.querySelector('a');

function handleLinkClick(event) {
    event.preventDefault();
    alert('clicked!')
}

link.addEventListener('click', handleLinkClick);


/* link의 기본 동작은 해당 주소로 이동하는 것.  

기본적으로 EventListener를 만들고 거기에 함수를 줬다는 것을 JS가 보게되면,
JS는 누군가 LINK를 클릭할 때, 함수를 실행시키게 됨, 저기 저 함수는 내가 실행시키는 것이 아니라 JS가 실행시키는 것임. 그리고 딱 한번만 실행되고 끝남 

그리고 가끔은 무엇이 클릭되었는지 어디가 클릭되었는지 등의 정보를 알고싶을때가 있는데 그럴때 JS는 단순히 함수를 실행시키기만 하는게 아니라, JS는 함수를 실행시키는 동시에 그 함수의 첫번재 인자(argument)로 object를 넣어줌.
그리고 저 object에 방금 일어난 event에 대한 여러 정보가 담겨있음. 
event를 넣고 console.log(event)로 확인해보면 정보들을 볼 수 있음 */