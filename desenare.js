document.getElementById("id_logic").innerHTML = "2019.11.25.1";
document.getElementById("id_start").addEventListener("click", start);
document.getElementById("id_stop").addEventListener("click", stop);

function desenare(unghi) {
    var canvas = document.getElementById("id_canvas");
    var context = canvas.getContext("2d");

    var R = 100;
    var r = 10;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    var x = canvas.width/2 + R * Math.cos(unghi / 180 * Math.PI);
    var y = canvas.height/2 + R * Math.sin(unghi / 180 * Math.PI);

    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();

    unghi++;
    if(unghi == 360)
        unghi = 1;
}

function start() {
    var unghi = 0;
    setInterval(desenare, 20, unghi);
}

function stop() {


}