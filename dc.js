var h= document.getElementById("hour");
var m= document.getElementById("minute");
var s= document.getElementById("second");
var me= document.getElementById("message");
setInterval(function(){
  var date= new Date();
  h.innerHTML= date.getHours();
  m.innerHTML= ":" + date.getMinutes();
  s.innerHTML= ":" + date.getSeconds();
  if(date.getHours()<12)
  {
    document.getElementById("b").style.backgroundColor= "yellow";
    me.innerHTML= "Good Morning!";
  }
  else if (date.getHours() >= 12 && date.getHours() < 18){
    document.getElementById("b").style.backgroundColor= "red";
    me.innerHTML= "Good Afternoon!";
  }
  else if (date.getHours() >=18  && date.getHours() <= 23) {
    document.getElementById("b").style.backgroundColor= "black";
    me.innerHTML= "Good Night!";
  }
}, 1000);
