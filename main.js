// JavaScript Document

function getWindowSize(){
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	alert(x + ' × ' + y);
}

function canvasControl(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
           
        //document.getElemtById('
            drawStuff(); 
    }
    resizeCanvas();
    function drawStuff() {
           
        //context.drawImage(me_img, 0, 0, canvas.width*.3, canvas.height*.3);
        context.fillStyle = "#FF000";
        context.fillRect(0,0,canvas.width*.5,canvas.height*.5);
        
        
        
    }
}