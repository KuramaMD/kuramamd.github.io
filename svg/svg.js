document.getElementById("id_logic_version").innerHTML="Logic = 2019-11-04.1";

window.addEventListener("deviceorientation", on_gyro_data_uab);
window.addEventListener("devicemotion", on_acc_data_uab);

function deseneaza (unghi_x, unghi_y) {
    // obtinem context grafic, construim o cale, adaugam un cerc la cale, desenam calea
   var circle = document.getElementById("id_circle");
   var svg = document.getElementById("id_svg");
   circle.getAttribute("r");
   //var context = canvas.getContext("2d");
   //var r = 10;
   //context.clearRect(0, 0, canvas.width, canvas.height);
   //context.beginPath();
   var x = unghi_x / 90 * (svg.width.animVal.value / 2 - r) + svg.width.animVal.value / 2;
   var y = unghi_y / 90 * (svg.height.animVal.value/ 2 - r) + svg.height.animVal.value / 2;
   //context.arc(x, y, r, 0, 2 * Math.PI);
   //context.stroke();
   //actualizam
   circle.setAttribute("cx", x);
   circle.setAttribute("cy", y);
}

function on_gyro_data_uab(e) {
    deseneaza(e.gamma, e.beta);
}

function on_acc_data_uab(e) {
    var acc = e.accelerationIncludingGravity;

    var rotatie_x = Math.atan(acc.x / acc.z) * 180 / Math.PI;
    var rotatie_y = Math.atan(acc.y / acc.z) * 180 / Math.PI; 
    deseneaza(e.rotatie_x, e.rotatie_y);
}