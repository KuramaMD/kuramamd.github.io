document.getElementById("id_version").innerHTML = "Logic 2019-12-02.0";

window.addEventListener("touchstart", touch_start_uab);
window.addEventListener("touchmove", touch_move_uab);
window.addEventListener("touchend", touch_end_uab);


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

var canvas_rect = canvas.getBoundingClientRect();

var last_position = [];

function get_random_color() {
    var caractere = "0123456789ABCDEF";
    var culoare = "#";

    for (var i = 0; i < 6; i++)
    culoare += caractere[Math.floor(Math.random() * 16)];
    return culoare;

}

function touch_start_uab(p) {
    var t = p.changedTouches;
    for (var i = 0; i < t.length; i++) {        
        var touch_info = {};
        touch_info.x = t[i].pageX;
        touch_info.y = t[i].pageY;
        touch_info.id = t[i].indentifier;
        touch_info_color = get_random_color();

        context.beginPath();
        context.arc(t[i].pageX = canvas_rect.left1, t[i].pageY = canvas_rect.top,10, 0, 2 * Math.PI);
        context.strokeStyle = touch_info_color;
        context.fillStyle = touch_info_color;
        context.lineWidth = 1;
        context.fill();
        context.stroke();

        last_position.push(touch_info);
    }
}

function touch_move_uab(p) {
    var t = p.changedTouches;
    for (var i = 0; i < t.length; i++) {
        for (var j = 0; i < last_position.length; j++)
       if (last_position[j].id == t[i].indentifier){
           index_t = j;
           break;
       } 
      context.beginPath();
      context.moveTo(last_position[index_t].x = canvas_rect.left, last_position[index_t].y = canvas_rect.top);
      context.lineTo(t[i].pageX = canvas_rect.left, t[i].pageY = canvas_rect.top);
      context.strokeStyle = last_position[index_t].color;
      context.fillStyle = last_position[index_t].color;
      context.lineWidth = 20;
        context.fill();
      context.stroke(); 
      last_position[index_t].x = t[i].pageX;
      last_position[index_t].y = t[i].pageY;
     }
}

function touch_end_uab(p) {
    var t = p.changedTouches; // lista degetelor care se ridica
    for (var i = 0; i < t.length; i++) {
        for (var j = 0; i < last_position.length; j++)
       if (last_position[j].id == t[i].indentifier){
           index_t = j;
           break;
       }
       last_position.splice(index_t, 1);
    }
}     