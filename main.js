noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#A9A9A9');
    fill('#800080');
    stroke('#FF0000');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "Size of square: "+difference;
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = "+noseX+" nose Y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("leftwristX = "+leftWristX+" rightwristX = "+rightWristX+" difference = "+difference);
    }
    
}