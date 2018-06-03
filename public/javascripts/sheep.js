$(document).ready(function(){
    canvas=document.getElementById("myCanvas")
    ctx=canvas.getContext('2d')
    sheepImg=document.getElementById("imgSheep")
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(sheepImg,0,0)
});

$(document).on('click', '#myCanvas', function(e){
    canvas=document.getElementById("myCanvas")
    ctx=canvas.getContext('2d')
    sheepImg=document.getElementById("imgSheep")
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(sheepImg,e.pageX,e.pageY)
});