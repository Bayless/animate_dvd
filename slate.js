var c = document.getElementById("slate");
var b = document.getElementById("button");
var ctx = c.getContext("2d");

ctx.fillStyle = "#00f0fa";

function rect(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.fillRect(x,y,Math.random()*100,Math.random()*100);
}

function clear(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
}

function circle(event) {
    //var x = event.clientX - 10;     // Get the horizontal coordinate
    //var y = event.clientY - 60;     // Get the vertical coordinate
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.lineTo(x,y);
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
}
var rid = 0;
//var x = 0;
//var y = 0;

var animateDot = function(){
    var x = 0; //no longer global variable, just global to oneCircle
    var y = 0;
    window.cancelAnimationFrame(rid);
    var oneCircle = function(){
	ctx.clearRect(0, 0, 800, 800);   
	rid = window.requestAnimationFrame(oneCircle);
	console.log(rid);
	ctx.beginPath();
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	x++;
	y++;
    };
    oneCircle(); //then call it
};

var stopit = function(){
    window.cancelAnimationFrame(rid)
};



//var sb = ctx.document.getElementById('button');
b.addEventListener("click", stopit);
//c.addEventListener("click", oneCircle);
c.addEventListener("click", animateDot);

//b.addEventListener('click', clear);
//oneCircle();

