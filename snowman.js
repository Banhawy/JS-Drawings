function setup() {
  createCanvas(600, 600);
  background(77,129,168);
}

function draw() {
  /* Body */
  fill  (255, 255, 255);
  rect(0,390,600,210, 100);
  ellipse(300, 400, 240, 240);
  ellipse(300, 240, 150, 150);
  ellipse(300, 120, 100, 100);
  
  /* Face */
  fill  (22, 22, 22);
  /* Eyes */
  ellipse(300, 110, 15, 15);
  ellipse(330, 110, 15, 15);
  
  fill(255, 188, 20);
  triangle(310, 127, 310, 135, 370, 123);
  
  /* Mouth */
  fill  (22, 22, 22);
  ellipse(310, 140, 5, 5);
  ellipse(320, 140, 5, 5);
  ellipse(330, 140, 5, 5);
  ellipse(300, 140, 5, 5);
  
  line(295, 100, 310, 95);
  line(325, 95, 338, 100);
  
  line(250, 250, 150, 200 );
  line(350, 250, 450, 200 );
}