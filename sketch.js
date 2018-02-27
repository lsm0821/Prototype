
//example from Dan Shiffman's Coding Train 10.4

//URL from http://open-notify.org/Open-Notify-API/People-In-Space/

let spaceData; 
let scr = 1;
let t;
let t1;
let x = 0;
let y = 0;
let z = 0;
let c = 0;
let b = 0; 
let r = 30;
let a = 0;
let o = 0;
let speed; 
let t2; 
let t3;
let img;
let wa;
let cloud;
let bgm;
let alaska2;
let alaska3;
let alaska4;
let alaska5;
let alaska6;
let teacher;
let teacher2;
let teacher3; 
let teacher4; 
let teacher5;
let teacher6;
let cold;
let cold1;
let cold3; 
let cold4

function preload() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3c8c44249a34f261c4e98ff79f6172f5", dataReceived,"jsonp");
  img = loadImage('wind.gif');
  wa = loadImage('alaska.jpg');
  cloud = loadImage('cloud.png');
  bgm = loadSound('bgm.mp3');
  alaska2 = loadImage('alaska2.jpg');
  alaska3 = loadImage('alaska3.jpg');
  alaska4 = loadImage('alaska4.jpg');
  alaska5 = loadImage('alaska5.jpg');
  alaska6 = loadImage('alaska6.jpg');
  teacher = loadImage('teacher.png');
  teacher2= loadImage('teacher 2.png');
  teacher3 = loadImage('teacher3.png');
  teacher4 = loadImage('teacher4.png');
  teacher5 = loadImage('techer5.png');
  teacher6 = loadImage('teacher6.png');
  cold = loadImage('cold.png');
  cold1 = loadImage('cold1.png');
  cold2 = loadImage('cold2.png');
  cold3 = loadImage('cold3.png');
  cold4 = loadImage('cold4.png');
}


function setup(){

  createCanvas(windowWidth,windowHeight);
  t= spaceData.list[0].main.temp-273;
  t1= (spaceData.list[0].main.temp_max)-273;
  t2 = (spaceData.list[8].main.temp)-273;
  t3 = (spaceData.list[16].main.temp)-273;
  t4 = (spaceData.list[24].main.temp)-273;
  t5 = (spaceData.list[32].main.temp)-273;
  t6 = (spaceData.list[36].main.temp)-273;
  
  bgm.loop();

  
}


function dataReceived(stuff){
  spaceData = stuff; 

}


 
function draw() {
  
  background(255);

  //fill(0);
  //ellipse(spaceData.cod,10,10,10);
  //fill(0);
  //text(spaceData.list[0].main.temp,30,30);
  //mp3 incorporate? 
  if (scr==1) {
    drawScreen1();
  } else if (scr==2){
    drawScreen2();
  } else if (scr ==3){
    drawScreen3();
  } else if (scr == 4){
    drawScreen4();
  } else if (scr == 5) {
    drawScreen5();
  } else if (scr == 6){
    drawScreen6();
  } else if (scr == 7) {
    drawScreen7();
  }
   
    }
function drawScreen1(){
//screen for each other days 
  //2/21
  //fill(0);
  //ellipse(20,20,20,20);
  tint(305,166);
  background(wa);
  noFill();
  stroke(84, 189, 247);
  strokeWeight(5);
  rect(10,20,180,40);
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
 
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(t)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int(t1)+'°C ',415,290 );
  text(int((spaceData.list[0].main.temp_min)-273)+'°C ', 555,290);
  
  textSize(30);
  fill(0);
  
  text('2018-02-22',22,50);
  //text(spaceData.list[0].we 
  //ather.main,500,100);
  noTint();
  image(cloud, 70,220,300,300);
  fill(0);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[0].clouds.all ,190,400);
  image(teacher, 730,130,340,630);
  
  image(cold1,400,350,90,100);
  image(cold2, 540,350,90,90);
 
}
function drawScreen2(){
  //2/22
  tint(305,166);
  background(alaska2);
  
  
  stroke(84, 189, 247);
  strokeWeight(5);
  noFill();
  
  rect(10,20,180,40);
  
  textSize(30);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text('2018-02-23',22,50);
  
  noTint();
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
  
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(spaceData.list[8].main.temp-273)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int((spaceData.list[8].main.temp_max)-273)+'°C ',415,290 );
  text(int((spaceData.list[8].main.temp_min)-273)+'°C ', 555,290);
  
  image(cloud, 70,220,300,300);
  fill(0);
  textSize(30);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[8].clouds.all ,190,400);
  noTint();
  image(teacher2, 730,130,510,630);
  image(cold1,400,350,90,100);
  image(cold3, 530,350,110,110);
 
  
}
function drawScreen3(){
  //2/23
  tint(305,166);
  background(alaska3);
  
  noTint();
 textSize(30);

  fill(0);
  
  text('2018-02-23',22,50);
  stroke(84, 189, 247);
  strokeWeight(5);
  noFill();
  rect(10,20,180,40);
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
  
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(spaceData.list[16].main.temp-273)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int((spaceData.list[16].main.temp_max)-273)+'°C ',415,290 );
  text(int((spaceData.list[16].main.temp_min)-273)+'°C ', 555,290);
  
  image(cloud, 70,220,300,300);
  fill(0);
  textSize(30);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[16].clouds.all ,190,400);
  noTint();
  image(teacher3, 730,130,470,630);
  image(cold1,400,350,90,100);
  image(cold2, 540,350,90,90);
 
  
}
function drawScreen4(){
  //2/24
  tint(305,166);
  background(alaska4);
  
  noTint();
  textSize(30);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text('2018-02-23',22,50);
  stroke(84, 189, 247);
  strokeWeight(5);
  noFill();
  rect(10,20,180,40);
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
  textSize(30);
  
  
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(spaceData.list[8].main.temp-273)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int((spaceData.list[24].main.temp_max)-273)+'°C ',415,290 );
  text(int((spaceData.list[24].main.temp_min)-273)+'°C ', 555,290);
  
  image(cloud, 70,220,300,300);
  fill(0);
  textSize(30);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[24].clouds.all ,190,400);
  noTint();
  image(teacher4, 730,130,470,630);
  
  image(cold1,400,350,90,100);
  image(cold3, 530,350,110,110);
 
}
function drawScreen5(){
  tint(305,166);
  background(alaska5);
  //2/25
  noTint();
  textSize(30);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text('2018-02-23',22,50);
  stroke(84, 189, 247);
  strokeWeight(5);
  noFill();
  rect(10,20,180,40);
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
  
  
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(spaceData.list[32].main.temp-273)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int((spaceData.list[32].main.temp_max)-273)+'°C ',415,290 );
  text(int((spaceData.list[32].main.temp_min)-273)+'°C ', 555,290);
  
  image(cloud, 70,220,300,300);
  fill(0);
  textSize(30);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[32].clouds.all ,190,400);
  noTint();
  image(teacher5, 730,130,470,630);
  
  image(cold1,400,350,90,100);
  image(cold2, 540,350,90,90);
 
  
}
function drawScreen6(){
  tint(305,166);
  background(alaska6);
  //2/26

  noTint();
  textSize(30);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text('2018-02-23',22,50);
  stroke(84, 189, 247);
  strokeWeight(5);
  noFill();
  rect(10,20,180,40);
  noFill();
  stroke(84, 236, 247);
  strokeWeight(4);
  rect(35,105,610,380);
  fill(165, 244, 255);
  rect(35,105,610,70);
  
  stroke(84, 225, 247); 
  strokeWeight(4);
  fill(91, 190, 247);
  rect(35,175,360,90);
  
  stroke(84, 189, 247);
  strokeWeight(4);
  fill(138, 227, 252);
  rect(395,175,125,310);
  fill(119, 192, 234);
  rect(520,175,125,310);
  
  stroke(107, 215, 255);
  strokeWeight(4);
  fill(177, 223, 249);
  rect(35,265,360,220);
  
  textSize(30);
  noStroke();
  fill(66,132,233);
  textFont('Georgia');
  text('Alaska, Nome', 240,150);
  
  textSize(30);
  noStroke();
  fill(66, 134, 244);
  textSize(35);
  textFont('Georgia');
  text('Temperature:  '+ int(spaceData.list[36].main.temp-273)+'°C ',50,232);
  textSize(24);
  text('Temp Max: ',397,232);
  text('Temp Min: ', 524, 232);
  textSize(35);
  text(int((spaceData.list[36].main.temp_max)-273)+'°C ',415,290 );
  text(int((spaceData.list[36].main.temp_min)-273)+'°C ', 555,290);
  
  image(cloud, 70,220,300,300);
  fill(0);
  textSize(30);
  text("Clouds",160,350);
  textSize(40);
  text(spaceData.list[36].clouds.all ,190,400);
  noTint();
  image(teacher6, 690,130,430,600);
  
  image(cold1,400,350,90,100);
  image(cold4, 540,350,90,90);
  
  
 
  
}
function drawScreen7(){
  stroke(89, 177, 249);
  strokeWeight(0);
  textSize(35);
  text('Wind Speed',(windowWidth/2)-50 ,45);
  noFill();
  
  rect(0,0,windowWidth, 60);
  fill(122, 219, 255);
  rect(0,60, windowWidth, 110);
  fill(99, 212, 255);
  rect(0,170, windowWidth, 110);
  fill(86, 203, 247);
  rect(0,280, windowWidth,110);
  fill(64, 199, 249);
  rect(0,390, windowWidth, 110);
  fill(84, 189, 255);
  rect(0,500, windowWidth, 110);
  fill(84, 166, 255);
  rect(0,610, windowWidth, 110);
  
  stroke(0);
  strokeWeight(1);
  textSize(20);
  text('2018-2-22', 40,90);
  text('2018-2-23', 40,200);
  text('2018-2-24', 40,310);
  text('2018-2-25', 40, 420);
  text('2018-2-26', 40, 525);
  text('2018-2-27',40,630)
  
  //fill(74, 176, 224);
  //rect(0,0,windowWidth, windowHeight);
  
  speed = spaceData.list[0].wind.speed;
  image(img,a,r*2,80,80);
  a = a + speed;
  if(a>width+r){
    a = -r
  }
   speed = spaceData.list[8].wind.speed;
  image(img,y,180,80,80);
  y = y + speed;
  if(y>width+r){
    y = -r
  }
  speed = spaceData.list[16].wind.speed;
  fill(74, 176, 224);
  image(img,z,300,80,80);
  z = z+speed;
  if(z>width+r){
    z = -r
  }
  speed = spaceData.list[24].wind.speed;
  fill(42, 166, 224);
  image(img,c,410,80,80);
  c = c+speed;
  if(c>width+r){
    c = -r
  }
  speed = spaceData.list[32].wind.speed;
  fill(8, 153, 221);
  image(img,b, 520, 80,80);
  b = b+speed;
  if(b>width+r){
    b = -r
  }
 
  speed = spaceData.list[36].wind.speed;
  image(img,o, 630,80,80);
  o = o+speed;
  if(o>width+r){
    o = -r
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
  if(scr == 1){
    scr = 2;
  }else if (scr == 2){
   scr = 3; 
  }else if (scr == 3){
    scr = 4; 
  } else if (scr == 4){
    scr = 5;
  } else if (scr == 5){
    scr = 6;
  } else if (scr == 6){
    scr = 7;
  }
    
}
function keyPressed(){
  if (key == '1'){
    scr = 1;
  }
  if (key == '2'){
    scr = 2;
  } 
  if(key == '3'){
    scr = 3;
  }
  if (key == '4'){
    scr = 4;
  }
  if (key == '5'){
    scr = 5;
  }
  if (key == '6'){
    scr = 6;
  }
  if (key == '7'){
    scr = 7; 
  }
}
