function setup() {
  createCanvas(600, 600);
  background("black");
} 

function draw() {
 
 stroke("blue"); 
 fill("red");

 // console.log(mouseIspressed);

  if (mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35);
   }
}
   