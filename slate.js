var c = document.getElementById("slate");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
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

function circleGrow(event) {
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

var circleGrowth = function(){
    var x = 400;
    var y = 400;
    var radius = 1;
    window.cancelAnimationFrame(rid);
    //var oneCircle = function(){
    if (radius=400){
	var shrink = function(){
	    if (radius>0){
		rid = window.requestAnimationFrame(shrink);
		ctx.clearRect(0, 0, 800, 800);   
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.fill();
		radius--;
	    }
	};
	//radius--;
	shrink();
    }else if (radius<400){
	var grow = function(){
	    rid = window.requestAnimationFrame(grow);
	    ctx.clearRect(0, 0, 800, 800);   
	    ctx.beginPath();
	    ctx.arc(x,y,radius,0,2*Math.PI);
	    ctx.fill();
	    radius++;
	};
	//radius++;
	grow();
    };

    //};
    //oneCircle(); //then call it
};

var stopit = function(){
    window.cancelAnimationFrame(rid)
};

stop.addEventListener("click", stopit);
//dvd.addEventListener("click", bounce);
circle.addEventListener("click", circleGrowth);


