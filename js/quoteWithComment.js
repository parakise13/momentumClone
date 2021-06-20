const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell dont deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I&#39;m not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde",
    }];


const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
// 1. HTML에서 ID가 quote인 div 안의 span 두개를 가져옴 
// 2. 우리가 해야할일은 0부터 array의 길이인 10 사이의 숫자에 접근👇 

//console.log(quotes[Math.floor(Math.random() * 10)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/* 2-1.문제는 위와 같이 * 10으로 할 경우 명언이 10개일때만 가능하기 때문에 명언의 갯수가 바뀌면 또 수정하고 이런 귀찮은 작업들을 해야함... 그래서 이렇게 숫자를 직접쓰지 않고 array의 길이를 알아내서 넣어주는게 좋음 */

/* 3. 이렇게 만든 random quote를 출력해주기 👇*/
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


/* randomness: random으로 숫자를 가져오기 위해서는 Math module을 이용해야하는데 JS 에서 이미 기본으로 제공하고 있음. 그중 하나가 random. 기본형태는 Math.random()이고 기본적으로 0~1사이의 무작위 숫자를 출력함. 1이상의 숫자를 random으로 출력하고싶다면 곱하기를 이용하면 됨.
ex) Math.random() * 10 이런식으로! 

하지만 random으로 뽑는 숫자는 정수가 아니라 소숫점까지 같이 출력해주기때문에 이것을 정수로 만들어 줘야하는데 3가지 방법이 있음 

1) Math.round() : round는 예를들어 1.1이 있으면 1로 돌려줌. 1.1~1.4까지는 1을 돌려주고 
                1.5~1.8은 2를 돌려줘서 반올림을 해주는 것 
                
2) Math.ceil() : ceil()은 말그대로 숫자를 높여줌. 1.1도 2고 1.01도 2로 돌려줌. 
3) Math.floor() : floor()은 반대로 내려줌. 1.99999도 무조건 1로 돌려주는 것

random과 저 셋중에 하나를 함께 사용해야하는데 방식은 Math.floor(Math.random() * 10) 이런식으로 random을 감싸주는 것 

array.length : 기본적으로 내장되어있고 arrya의 길이를 반환해줌 */