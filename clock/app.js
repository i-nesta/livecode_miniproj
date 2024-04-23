window.onload = function () {
  window.setInterval(function () {

    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds()

    if (hour < 10) hour = "0" + hour
    if (min < 10) min = "0" + min
    if (seconds < 10) seconds = "0" + seconds
    let clock = hour + ":" + min + ":" + seconds
    document.getElementById("clock").innerHTML = clock;
  }, 1000)
}