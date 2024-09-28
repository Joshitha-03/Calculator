let msg= document.querySelector(".ans");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operation");
let operation = null;
let arithematic=null;
let firstnumber ="";
let secondnumber="";
const getnum=()=>{
    numbers.forEach((number)=>{
        number.addEventListener("click",()=>{
         msg.innerText = msg.innerText + number.innerText;
        })
    })
    operators.forEach((operator)=>{
        operator.addEventListener("click",()=>{
            operation = operator.innerText;
            if(operation==="clr"){
                msg.innerText="";
                firstnumber="";
                secondnumber="";
                operation=null;
                arithematic=null; 
              return;
            }
            //console.log(operation);
            if(operation!==null){
                if(firstnumber!==""&& msg.innerText!==""){
                    secondnumber=msg.innerText;
                    console.log(secondnumber);
                    //msg.innerText=operation;
                    print(firstnumber,arithematic,secondnumber,operation);
                }
                else{
                firstnumber=msg.innerText;  
                console.log(firstnumber);
                 msg.innerText="";
                arithematic=operation;
                operation=null;
                }
              }
        })
    })
}
 getnum();

const print= (firstnumber,arithematic,secondnumber,operation)=>{
    let answer;
    console.log(operation);
    if(operation==="="){
 if(arithematic==="+"){
    answer= Number(firstnumber)+Number(secondnumber);
    msg.innerText= answer;
 }
 else if(arithematic==="-"){
    answer= Number(firstnumber)-Number(secondnumber);
    msg.innerText= answer;
 }
 else if(arithematic==="*"){
    answer= Number(firstnumber)*Number(secondnumber);
    msg.innerText= answer;
 }
 else if(arithematic==="/"){
    answer= Number(firstnumber)/Number(secondnumber);
    msg.innerText= answer;
 }
}
}