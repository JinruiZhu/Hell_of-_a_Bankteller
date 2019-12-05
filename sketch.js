
var state1
var Xpos,Ypos
var wHeld,oHeld,qHeld,pHeld,cHeld,walkspeed,runspeed
var portalstate,distance1,distance2
var People


function preload() {
  People = loadImage('People1.png');
}

function setup(){
	createCanvas(1500,800);
	background(100);
	walkspeed=3;
	runspeed=6;
	Xpos=500;
	Ypos=500;
	noStroke();
	state1=1;
	imageMode(CORNER);

}

function draw() {
	if (wHeld) { Xpos-=walkspeed; }
	if (oHeld) { Xpos+=walkspeed;}
	if (qHeld) { Xpos-=runspeed; }
	if (pHeld) { Xpos+=runspeed;}
	distance1=dist(Xpos,Ypos,380,620);
	distance2=dist(Xpos,Ypos,1120,620);
	if(distance1<=130){
	 state1-=1;
		Xpos=1070;
		 }
		if(distance2<=130){
		state1+=1;
		Xpos=430;
		 }






	if(state1==1){
	background(255);
  fill(150,190,84);
	rect(0,650,width,150);
	fill(230,83,22);
	image(People,Xpos,Ypos,80,140);
}

		if(state1==2){
	background(255);
  fill(50,190,84);
	rect(0,650,width,150);
	fill(230,83,22);
	image(People,Xpos,Ypos,80,140);
}


		if(state1==3){
	background(255);
  fill(150,90,84);
	rect(0,650,width,150);
	fill(230,83,22);
	image(People,Xpos,Ypos,80,140);
}

			if(state1==4){
	background(255);
  fill(150,190,184);
	rect(0,650,width,150);
	fill(230,83,22);
	image(People,Xpos,Ypos,80,140);
}




	//portal
	push();
	rectMode(CENTER);
	fill(120,230,200,200);
	rect(1120,650,60,200);
	rect(380,650,60,200);

	pop();





// 	//state indicator
// 	fill(20);
// 	textSize(100);
// 	text(state1,200,200);
// 	text(distance1,200,400);
// 	text(distance2,200,500);
}






function keyPressed() {
	print(key + " pressed.");
	if (key === "w"){ wHeld = true; }
	if (key === "o"){ oHeld = true; }
	if (key === "q"){ qHeld = true; }
	if (key === "p"){ pHeld = true; }
	if (key === "c"){ cHeld = true;}
}







function keyReleased() {
	if (key === "w"){ wHeld = false; }
	if (key === "o"){ oHeld = false; }
	if (key === "q"){ qHeld = false; }
	if (key === "p"){ pHeld = false; }
		if (key === "c"){ cHeld = false;}
}
