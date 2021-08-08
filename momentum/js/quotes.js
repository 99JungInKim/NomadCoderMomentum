const quotes = [
    {   
        quote: "나는 코딩한다. 고로 나는 존재한다" ,
        author: "JIK"
    },
    {  
        quote: "true에 느낌표 하나 찍으면 false",
        author: "JIK"
    },
    {   
        quote: "사장도 버그 날 땐 온다",
        author: "JIK"
    },
    {  
         quote: "if O에 소스 걸레 되는 줄 모른다",
         author: "JIK"
    },
    {  
         quote: "가장 커다란 에러는 컴파일의 순간에 도사린다",
         author: "JIK"
    },
    {  
         quote: "소스 놓고 main도 모른다",
         author: "JIK"
    }
 ];
    

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] ;

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;