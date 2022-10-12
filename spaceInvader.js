"use strict";

drawline();

function drawline() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(50,50,100,100);
    context.fill();
   


    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(50,350,100,100);
    context.fill();
    


    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(150,50,100,500);
    context.fill();
    


    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(250,250,100,100);
    context.fill();
    

    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(350,50,100,500);
    context.fill();
    

    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(450,50,100,100);
    context.fill();
    


    context.beginPath();
    context.fillStyle = "GREEN";
    context.rect(450,350,100,100);
    context.fill();
    



}