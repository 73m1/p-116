noseX = 0
noseY = 0
function preload() {
moustache = loadImage('mous.png')
}

function setup() {
canvas = createCanvas(700,600);
canvas.center();
video = createCapture(VIDEO);
video.size(700,600);
video.hide();
Posenet = ml5.poseNet(video,modelLoaded);
Posenet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,700,600);
    image(moustache,noseX - 50,noseY -10,100,100);
}

function snap() {
    save("InstantMoustache.png");
}

function modelLoaded() {
    console.log("01001101 01101111 01100100 01100101 01101100 00100000 01001100 01101111 01100100 01100001 01100100 01100101 01100100")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x coordinates are " + results[0].pose.nose.x);
        console.log("Nose y coordinates are " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    
    } else {
        console.log("there is an error retreiving results");
    }
    }