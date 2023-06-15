//Init variables//

let showcard=0;
let card1=null;
let card2=null;



let numbers=[1,1,2,3,3,4,4,5,5,6,6,7,7,8,8,];
numbers=numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

// Function principal

function Show(id){
showcard++;
    console.log(showcard);
}

if (showcard == 1) {
    card1= document.getElementById(id);
    card1.innerHTML= numbers [id];
}