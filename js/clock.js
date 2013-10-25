var minuteR = 0; // this is radius of cirle
var hourR = 0; // this is radius of cirle
var secondR = 10; // this is radius of cirle


function expansion() {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");

    hourR = hourR + 2; // Make the circle expand
    minuteR = minuteR + 2; // Make the circle expand

    var minuteCx = minute.getAttribute('cx');
    var minuteCy = minute.getAttribute('cy');

    var theTime = new Date();
    secondR = theTime.getSeconds() * 6 + theTime.getMilliseconds() / 1000 * 6;


    minuteR = (theTime.getSeconds() * 6 + theTime.getMilliseconds() / 1000 * 6) / 4;
    hourR = theTime.getMinutes() / 59 * 100;

    hour.setAttribute('r', hourR);
    minute.setAttribute('r', minuteR);
    second.setAttribute('transform', 'rotate(' + secondR + ',' + minuteCx + ',' + minuteCy + ')');

    //
    // display the current time in HTML so we can see it:
    var hoursSpan = document.getElementById("hours");
    var minutesSpan = document.getElementById("minutes");
    var secondsSpan = document.getElementById("seconds");
    var millisecondsSpan = document.getElementById("milliseconds");

    hoursSpan.innerHTML = theTime.getHours();
    minutesSpan.innerHTML = theTime.getMinutes();
    secondsSpan.innerHTML = theTime.getSeconds();
    millisecondsSpan.innerHTML = theTime.getMilliseconds();
    
    //
    // display the *calculated* time in HTML so we can see it:
    var hoursCalcSpan = document.getElementById("hours-calc");
    var minutesCalcSpan = document.getElementById("minutes-calc");
    var secondsCalcSpan = document.getElementById("seconds-calc");

    hoursCalcSpan.innerHTML = hourR;
    minutesCalcSpan.innerHTML = minuteR;
    secondsCalcSpan.innerHTML = secondR;

    var maxCircleRadius = 100;
    var betterSeconds = maxCircleRadius * (theTime.getSeconds() + theTime.getMilliseconds()/999) / 60;
    
    document.getElementById("better-seconds").innerHTML = betterSeconds;


}

// runs the expansion every millisecond 
setInterval(expansion, 10);