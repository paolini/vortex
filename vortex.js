const input_d = document.getElementById("input_d");
const input_m = document.getElementById("input_m");

function draw() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext('2d');
    var d = parseInt(input_d.value);
    var m = parseInt(input_m.value);
    var center_x = canvas.width / 2;
    var center_y = canvas.height /2;
    var r = Math.min(canvas.width, canvas.height)/2-30;

    function x(n, r) {
        return center_x + r*Math.sin(n*2*Math.PI/d); 
    }

    function y(n, r) {
        return center_y - r*Math.cos(n*2*Math.PI/d);
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);
   
    // ctx.lineJoin = "round";
    ctx.lineWidth = 10.0;
    ctx.strokeStyle = "#808080";
    ctx.beginPath();
    ctx.arc(center_x, center_y, r, 0, 2*Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 10.0 / Math.log(d);
    ctx.lineWidth = 100/d;
    for (var i=0;i<d;++i) {
        ctx.beginPath();
        ctx.moveTo(x(i, r), y(i, r));
        ctx.lineTo(x(m*i, r), y(m*i, r));
        ctx.stroke()
    }
    ctx.fillStyle = "#ff7a00";
    for (var i=0; i<d; ++i) {
        ctx.beginPath();
        ctx.arc(x(i, r), y(i, r), 5, 0, 2*Math.PI);
        ctx.fill();
    }
    if (d<100) {
        ctx.font = "24px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ac8455";
        var R = r+18;
        for (var i=0; i<d; ++i) {
            ctx.fillText(''+i, x(i, R), y(i, R));
        }
    }
}

draw();
input_m.onchange = draw;
input_d.onchange = draw;

