<<<<<<< HEAD
function showTime() {
=======
// Original Code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
>>>>>>> 308877982f52f0d4b5999bdad4572088d32efb79
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
<<<<<<< HEAD

    // Calcul du AM/PM
    var session = "AM";
    if (h >= 12) {
        session = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("DigitalCLOCK").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
=======
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();
>>>>>>> 308877982f52f0d4b5999bdad4572088d32efb79
