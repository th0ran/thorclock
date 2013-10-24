var minuteR = 0; // this is radius of cirle
var hourR = 0; // this is radius of cirle
var secondR = 10; // this is radius of cirle


function expansion() 
{  
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");
  
  hourR = hourR+2; // Make the circle expand
  minuteR = minuteR+2; // Make the circle expand
  
  var minuteCx = minute.getAttribute('cx');
  var minuteCy = minute.getAttribute('cy');
  
  var theTime = new Date();
  secondR = theTime.getSeconds()*6+theTime.getMilliseconds()/1000*6;
  minuteR = theTime.getSeconds()*6+theTime.getMilliseconds()/1000*6;
  hourR = theTime.getMinutes()/59*100;

  hour.setAttribute('r', hourR);
  minute.setAttribute('r', minuteR);
  second.setAttribute('transform', 'rotate('+secondR+','+minuteCx+','+minuteCy+')');
  
  
  // resets at 100 pixels
  if (hourR > 150)
  {
  hourR = 0;
  }

  // resets at 100 pixels
  if (minuteR > 100)
  {
  minuteR = 0;
  }
  

}

// runs the expansion every second 
setInterval( expansion, 1); 