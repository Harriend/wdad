img = "";
status = ""

function preload(){
    img = loadImage('bedroom.jpg');
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Object is being detected"
}

function modelLoaded(){
    console.log('model Loaded');
    status = true;
    objectDetector.detector(img , gotResult)
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }

    console.log(results);
}

function draw(){
    image(img , 0 , 0 , 600 , 400);
}