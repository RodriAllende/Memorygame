//random number//

let showcard = 0;
let card1= null;
let card2= null;
let firstResults=null;
let secondResults=null;
let moves= 0;
let hits= 0;
let showMoves = document.getElementById('moves');
let showhits = document.getElementById('hits');
let showtime= document.getElementById('remaining');
let temp= false;
let timer = 30 ;

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => { return Math.random() - 0.5 });
console.log(numbers);


function countdown(){
setInterval(() => {
  timer--;
  showtime.innerHTML = `Remaining Time : ${timer}`;},1000);

}

function Show(id) {    
  if (temp == false){
    countdown();
    temp=true;
  
    
  
  
  showcard++;

    if (showcard === 1){
        card1 = document.getElementById(id);
        firstResults=numbers[id]
        card1.innerHTML = numbers[id];
        card1.disabled = true;}

else if (showcard === 2){
  card2 = document.getElementById(id);
  secondResults=numbers[id];
  card2.innerHTML=secondResults;
  card2.disabled = true;

  moves ++;
showMoves.innerHTML = `Moves : ${moves}`;}

if(firstResults==secondResults)
{ showcard= 0 ;

   hits++;
  showhits.innerHTML = `Hits : ${hits}`;}
  
  if(hits===8){
    showhits.innerHTML = `Hits : ${hits}😊`
    showMoves.innerHTML = `Moves : ${moves}🙌`}
  
  else{    
  setTimeout ( () =>{
 
  card1.innerHTML = '';
  card2.innerHTML = '';
  card1.disabled = false;
  card2.disabled = false;
  showcard = 0;
},2000);
}
}








}
