// Set the date we're counting down to
console.log("Hi")
var endDate = new Date("June 26, 2020 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = endDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in elements with id="cdHour/cdMin/cdSec"
    document.getElementById("d").innerHTML = ("0" + days).slice(-2);  
    document.getElementById("hrs").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("mins").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("secs").innerHTML = ("0" + seconds).slice(-2);
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        window.location.href="www.google.com"
        document.getElementById("countContainer").innerHTML = "EXPIRED";
        
    }
}, 1000);