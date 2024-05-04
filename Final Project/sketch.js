function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw()
{ 
    background(86,132,231,255);
/* pink cloud*/
    fill(253,117,118,255)
    noStroke();
    push();
    translate(100, 100);
    rotate(frameCount*0.5);
    circle(300,50,100);
    circle(270,80,100);
    circle(250,30,120);
    circle(300,100,50);
    circle(300,250,100);
    circle(270,280,100);
    circle(300,300,120);
    circle(400,400,50);
    pop();  

/* yellow cloud*/
    push();
    translate(100, 100);
    rotate(frameCount*2);
    fill(254,209,116,255)
    circle(50,40,100);
    circle(80,150,100);
    circle(40,90,120);
    ellipse(100,50,40,100);
    circle(50,40,100);
    circle(80,150,100);
    circle(40,90,120);
    ellipse(100,50,40,100);
    ellipse(100,300,40,300);
    circle(60,400,120);
    circle(70,350,50);
    pop();

/* purple cloud*/
    push();
    translate(100, 100);
    rotate(frameCount*1);
    fill(175,84,231,255)
    circle(30,200,100);
    circle(30,250,110);
    circle(5,150,50);
    circle(30,300,130)
    circle(30,230,130)
    circle(10,380,47);
    circle(230,230,50);
    circle(240,370,130)
    circle(190,300,150);
    circle(360,160,100);
    circle(380,220,80);
    circle(390,120,130)
    circle(320,130,90);
    pop();

/* orange cloud*/
    push();
    translate(100, 100);
    rotate(frameCount*.2);
    fill(231,156,82,255)
    circle(120,100,100);
    circle(150,150,110);
    circle(190,90,100);
    circle(396,300,160);
    circle(390,190,80);
    circle(390,250,100);
    pop();

/* dog */
    fill(255, 255, 255)
    circle(150,200,120);
    ellipse(150,300,120,220);
    circle(170,350,180);
    ellipse(300,370,250,150);
    ellipse(90,190,50,90);
    ellipse(210,190,50,90);
   
    fill(0, 0, 0)
    ellipse(115,180,17,8);
    ellipse(175,180,17,8);
    ellipse(150,200,35,27);
    rect(130, 220, 40, 3);  
    ellipse(130,219,6,9);  
    ellipse(170,219,6,9);  

/* dog */
    rotate(0);
    fill(255, 255, 255)
    circle(150,200,120);
    ellipse(150,300,120,220);
    circle(170,350,180);
    ellipse(300,370,250,150);
    ellipse(90,190,50,90);
    ellipse(210,190,50,90);
   
    fill(0, 0, 0)
    ellipse(115,180,17,8);
    ellipse(175,180,17,8);
    ellipse(150,200,35,27);
    rect(130, 220, 40, 3);  
    ellipse(130,219,6,9);  
    ellipse(170,219,6,9);  
}