shake.addEventListener('click', function (){
    console.log("Shake it off!");

let response = Math.random();
console.log(response);
response = Math.floor(Math.random() * 11); //0-10

  //response = Math.floor(Math.random() * 9)+1;

  if(response==0){
    output.innerHTML = "Yes indeed";
}
if(response==1){
    output.innerHTML = "Ask again later";
}
if(response==2){
    output.innerHTML = "Very doubtful";
}

console.log(respose);
});

