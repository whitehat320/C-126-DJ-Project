song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Doraemon.mp3");
    song2 = loadSound("Shinchan.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 150,200,500, 500);
}

function play_song1(){
    song1.play();
}

function play_song2(){
    song2.play();
}
