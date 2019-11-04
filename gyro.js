document.getElementById("id_logic_version").innerHTML="Logic = 2019-11-04";

window.addEventListener("deviceorientation", on_gyro_data_uab);
window.addEventListener("devicemotion", on_acc_data_uab);

function deseneaza (unghi_x, unghi_y) {
    // obtinem context grafic, construim o cale, adaugam un cerc la cale, desenam calea
   var canvas = document.getElementById("id_canvas");
   var context = canvas.getContext("2d");
   var r = 10;
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.beginPath();
   var x = unghi_x / 90 * (canvas.width/ 2 - r) + canvas.width / 2;
   var y = unghi_y / 90 * (canvas.height/ 2 - r) + canvas.height / 2;
   context.arc(x, y, r, 0, 2 * Math.PI);
   context.stroke();
}

function on_gyro_data_uab(e) {
    document.getElementById("id_alpha").innerHTML = Math.round(e.alpha * 100) / 100;
    document.getElementById("id_beta").innerHTML = Math.round(e.beta * 100) / 100;
    document.getElementById("id_gamma").innerHTML = Math.round(e.gamma * 100) / 100;

    deseneaza(e.gamma, e.beta);
}

function on_acc_data_uab(e) {
    var acc = e.accelerationIncludingGravity;

    document.getElementById("id_acc_x").innerHTML = Math.round(acc.x * 100) / 100;
    document.getElementById("id_acc_y").innerHTML = Math.round(acc.y * 100) / 100;
    document.getElementById("id_acc_z").innerHTML = Math.round(acc.z * 100) / 100;

    var rotatie_x = Math.atan(acc.x / acc.z) * 180 / Math.PI;
    var rotatie_y = Math.atan(acc.y / acc.z) * 180 / Math.PI; 

    document.getElementById("id_rotatie_x").innerHTML = Math.round(rotatie_x * 100) / 100;
    document.getElementById("id_rotatie_y").innerHTML = Math.round(rotatie_y * 100) / 100;

    deseneaza(e.rotatie_x, e.rotatie_y);
}