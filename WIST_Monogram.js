function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("#121212"));
  
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(16);
  noFill();
}


function draw() {
  background(color("#121212"));
  
  //G
    //arc (animated)
    stroke(color("#eeeeee"));
    let swivelAmount = PI / 6;
    let endAngle = swivelAmount * sin(frameCount * 0.08) - 1.1 * swivelAmount;
    let startAngle = TWO_PI;
    arc(200, 200, 300, 300, startAngle, endAngle, OPEN);
    //arc(200, 200, 300, 300, 2 * PI, -PI /3, OPEN);
    
    //hook
    stroke(color("#ee0022"));
    beginShape();
    vertex(220, 200);
    vertex(390, 200);
    vertex(390, 200 + 60);
    endShape();
    
  //M (animated)
    let pointJumpAmount = 60;
    let point2Theoretical = 50 + pointJumpAmount * sin((frameCount - 10) * 0.08);
    let point2;
    if (point2Theoretical >= 50) {
      point2 = point2Theoretical;
    } else {
      point2 = 50; 
    }
    let point4Theoretical = 50 + pointJumpAmount * sin((frameCount - 18) * 0.08);
    let point4;
    if (point4Theoretical >= 50) {
      point4 = point4Theoretical;
    } else {
      point4 = 50; 
    }
    
    stroke(color("#eeeeee"));
    beginShape();
    vertex(450, 350);
    vertex(450, point2);
    vertex(600, 350);
    vertex(750, point4);
    vertex(750, 350);
    endShape();
}
