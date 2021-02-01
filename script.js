var click = 0; 

function onClick(){
  click++;
  document.getElementById("counter").innerHTML = click;
};

function reset(){
  click=0;
  document.getElementById("counter").innerHTML = click;
};