//Task 2 

"use strict";
 function fetchquestion(question :string ):Promise<{question :string}>{
    return new Promise((resolve)=>{
        console.log(`Question: ${question}`)
        setTimeout(() => {      
        resolve({question : question });


        },5000);
    });

}
let question1
let question2
let question3
let question4
let question5

fetchquestion("What do you know about typescript?")
.then((res)=>{
    question1 = res;
    return fetchquestion("What do you know about javascript?")

})
.then((res)=>{
    question2 = res;
    return fetchquestion("What do you know about C++?")
})

.then((res)=>{
    question3 = res;
    return fetchquestion("What is the diff bw ts and js?")
})
.then((res)=>{
    question4 = res;
    return fetchquestion("What is the diff bw interface and type?")
})
.then((res)=>{
    question5 = res;
    return fetchquestion("What do you know about coding?")
})