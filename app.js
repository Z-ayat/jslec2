var mainContainer = document.getElementById("maincontainer");
var navBar = document.getElementById("navBar");
var btn = document.getElementById('btn');
var logBtn = document.getElementById('login');
function openNav() {
    navBar.style.width = '200px';
    document.body.style.backgroundColor = 'grey';
    mainContainer.style.marginLeft = '250px';
}
function closeNav() {
    document.body.style.backgroundColor = '#fff';
    mainContainer.style.marginLeft = '0';
    navBar.style.width = '0';
    btn.style.backgroundColor = "#000";
}
function logIn() {
    logBtn.style.display = "flex";
    document.body.style.backgroundColor = 'grey';
}
function closeLog() {
    logBtn.style.display = "none";
    document.body.style.backgroundColor = '#fff';
}
function showTime() {
    var date = new Date();
    var hourss = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var TimeZone;

    if (hourss === 0) {
        hourss = 12
    }
    if (hourss > 12) {
        hourss = hourss - 12;
        TimeZone = "PM";
    } else {
        hourss = hourss;
        TimeZone = "AM";
    }
    hourss = (hourss < 10) ? "0" + hourss : hourss;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var time = hourss + ":" + minutes + ":" + seconds + TimeZone;


    document.getElementById("myClockDisplay").innerHTML = time;
    setTimeout(showTime, 1000);


}
showTime();
function avgOf() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var avg = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
    document.getElementById('avg').innerHTML = avg;
}
avgOf();