let angle=0;
 {
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);



}

function draw() {


let locX = mouseX ;
let locY = mouseY ;

background("black");
orbitControl();
camera(locX, locY, 10, 50, 0, 0, 10, 50, 0)

push()
stroke("white");
rotateX(angle * 0.1)
rotateZ(angle * 0.1)
lightFalloff(1, 0, 0);
pointLight("aquamarine", locX, locY, 50);
box(500,500, 10)
pop()
push()
rotateX(angle * 0.3)
rotateZ(angle * 0.2)
lightFalloff(1,0,0);
pointLight("red", locX, locY, 50);
translate(-150, 150)
box(10,500, 500)
pop()

push()
normalMaterial();
noStroke();
rotateX(angle);
torus(50, 10);
specularColor("red");
rotateZ(angle * 0.0001)
box(30);

pop()

angle+= 0.5









//pointLight(0,0, 255, mouseX - 200, mouseY-200, 0)
//pointLight(0,0, 255, mouseX - 200, mouseY-200, 0)
//background(170);
//rectMode(CENTER);
//rotateX(angle);
//translate(mouseX- width/2, mouseY - height/2);
//ambientMaterial(255);
//noStroke();
//cylinder(10, 300);

}
