var minuteR = 0; // this is radius of cirle
var hourR = 0; // this is radius of cirle
var secondR = 10; // this is radius of cirle

function expansion() 
{  
  var minute = document.getElementById("minute");
  var hour = document.getElementById("hour");
  var second = document.getElementById("second");
  
  minute.setAttribute('r', minuteR); 
  hour.setAttribute('r', hourR);
    
  minuteR = minuteR+2; // Make the circle expand
  hourR = hourR+2; // Make the circle expand
  
  second.setAttribute('transform', 'rotate('+secondR+')');
  
  secondR+=2;
  
  // resets at 100 pixels
  if (minuteR > 10)
  {
  minutedR = 0;
  }
  
  // resets at 100 pixels
  if (hourR > 10)
  {
  hourdR = 0;
  }

}

// runs the expansion every second 
setInterval( expansion, 100); 