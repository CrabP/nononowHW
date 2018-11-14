
var val=false;
var cor1;
var cor2;
var cor3;

var mic;

function setup() {
  var cnv01 =createCanvas(500, 600);
  cnv01.parent('processing');
  background(255);
  noStroke();
  
  mic = new p5.AudioIn();
  mic.start();

}

function draw(){
  var vol = mic.getLevel();
  fill(cor1,cor2,cor3);
  var h = map(vol, 0, 1, 0, 500);
  if(h>1){
    cor1=int(random(255));
    cor2=int(random(255));
    cor3=int(random(255));
    var rand1 = random(-100,100);
    var rand2 = random(-100,100);
    var rand3 = random(50);
    ellipse(width/2+rand1*h,height/2+rand2*h,10+rand3,10+rand3);
  }
  console.log(h);
  
  if(val){
    
    fill(cor1,cor2,cor3);
  for(var i=0;i<5;i++){
    var rand1=random(50);
    var rand2=random(-50,50);
    var rand3=random(-50,50);
    ellipse(mouseX+rand2,mouseY+rand3,10+rand1,10+rand1);
  }
  }
}



function mousePressed(){
  val=true;
  cor1=int(random(255));
  cor2=int(random(255));
  cor3=int(random(255));
}

function mouseReleased(){
  val=false;
}
