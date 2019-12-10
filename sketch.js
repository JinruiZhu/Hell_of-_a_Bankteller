var scene1, scene2, scene3
var state2
var Xpos, Ypos
var wHeld, oHeld, qHeld, pHeld, cHeld, walkspeed, runspeed, oneHeld, twoHeld, threeHeld, fourHeld, fiveHeld, sixHeld, sevenHeld, eightHeld, nineHeld, zeroHeld
var portalstate, distance1, distance2
var theguy, people, people2, people3, people4, people5, people6, people7, people8, people9, people10, people11, people12, people13, people14, people15, people16
var peoplez, peoplez2, peoplez3, peoplez4, peoplez5, peoplez6, peoplez7, peoplez8, peoplez9, peoplez10, peoplez11, peoplez12, peoplez13, peoplez14, peoplez15, peoplez16
var walkingcycle

var middle,bottom,bottompic

var floor2, office2, office3
var lightbulb, distancelight, lightbulbbag, distancepower, powerup, lightbulb2, away
var water, distancewater, waterbag, away2, haswater, distanceflower, rain, rainflow,away6
var window1, distancewindow1, window1bag, away3, distanceoutside, openwindow
var circlebag, distancecircle, hasflower,showflower,distancecontrol,away4,openele,away5
var title

var rectlenth
var ele, shade,ele2



function preload() {
	people = loadImage('people01.png');
	people2 = loadImage('people17.png');
	people3 = loadImage('people03.png');
	people4 = loadImage('people04.png');
	people5 = loadImage('people05.png');
	people6 = loadImage('people06.png');
	people7 = loadImage('people07.png');
	people8 = loadImage('people08.png');
	people9 = loadImage('people09.png');
	people10 = loadImage('people10.png');
	people11 = loadImage('people11.png');
	people12 = loadImage('people12.png');
	people13 = loadImage('people13.png');
	people14 = loadImage('people14.png');
	people15 = loadImage('people15.png');
	people16 = loadImage('people16.png');

	peoplez = loadImage('people001.png');
	peoplez2 = loadImage('people017.png');
	peoplez3 = loadImage('people003.png');
	peoplez4 = loadImage('people004.png');
	peoplez5 = loadImage('people005.png');
	peoplez6 = loadImage('people006.png');
	peoplez7 = loadImage('people007.png');
	peoplez8 = loadImage('people008.png');
	peoplez9 = loadImage('people009.png');
	peoplez10 = loadImage('people010.png');
	peoplez11 = loadImage('people011.png');
	peoplez12 = loadImage('people012.png');
	peoplez13 = loadImage('people013.png');
	peoplez14 = loadImage('people014.png');
	peoplez15 = loadImage('people015.png');
	peoplez16 = loadImage('people016.png');
	floor2 = loadImage('office.jpg');
	office2 = loadImage('office2.jpg');
	office3 = loadImage('office3.jpg');
	ele = loadImage('ele.jpg');
	ele2 = loadImage('ele2.jpg');

bottompic = loadImage('bottom21.jpg');

	lightbulb2 = loadImage('lightbulb2.png');
	lightbulb = loadImage('lightbulb.png');
	water = loadImage('water.png');
	rain = loadImage('rain.png');
	window1 = loadImage('window1.png');
}

function setup() {
	createCanvas(1650, 1125);
	background(100);
	walkspeed = 2.5;
	runspeed = 6;
	Xpos = 1000;
	Ypos = 600;
	noStroke();
	scene1 = true;
	scene2 = false;
	scene3 = false;
	scene4 = false;
	imageMode(CENTER);
	walkingcycle = 1;
	theguy = people;
	lightbulbbag = false;
	waterbag = false;
	window1bag = false;
	state2 = false;
	rectlenth = 701;
	middle = true;
	away = 1570;
	away2 = 1570;
	shade = 250;
	powerup = false;
	haswater = false;
	rainflow = 320;
	away3 = 1570;
	circlebag = false;
	away4=1570;
	openele=false;
	away5=664;
	away6=668;
	bottom=false;
	title=true;
}

function draw() {
	if (wHeld) {
		Xpos -= walkspeed;
	}
	if (oHeld) {
		Xpos += walkspeed;
	}

	if (cHeld) {
		bottom=true;
	}


	//walking system

	if (oHeld) {
		walkingcycle += 1;
		if (walkingcycle == 65) {
			walkingcycle = 13
		}

		if (walkingcycle <= 4) {
			theguy = people;
		}
		if (walkingcycle >= 5 && walkingcycle <= 8) {
			theguy = people2;
		}

		if (walkingcycle >= 9 && walkingcycle <= 12) {
			theguy = people3;
		}
		if (walkingcycle >= 13 && walkingcycle <= 16) {
			theguy = people4;
		}
		if (walkingcycle >= 17 && walkingcycle <= 20) {
			theguy = people5;
		}
		if (walkingcycle >= 21 && walkingcycle <= 24) {
			theguy = people6;
		}
		if (walkingcycle >= 25 && walkingcycle <= 28) {
			theguy = people7;
		}
		if (walkingcycle >= 29 && walkingcycle <= 32) {
			theguy = people8;
		}
		if (walkingcycle >= 33 && walkingcycle <= 36) {
			theguy = people9;
		}
		if (walkingcycle >= 37 && walkingcycle <= 40) {
			theguy = people10;
		}
		if (walkingcycle >= 41 && walkingcycle <= 44) {
			theguy = people11;
		}
		if (walkingcycle >= 45 && walkingcycle <= 48) {
			theguy = people12;
		}
		if (walkingcycle >= 49 && walkingcycle <= 52) {
			theguy = people13;
		}
		if (walkingcycle >= 53 && walkingcycle <= 56) {
			theguy = people14;
		}
		if (walkingcycle >= 57 && walkingcycle <= 60) {
			theguy = people15;
		}
		if (walkingcycle >= 61 && walkingcycle <= 64) {
			theguy = people16;
		}
	}


	if (wHeld) {
		walkingcycle += 1;
		if (walkingcycle == 65) {
			walkingcycle = 13
		}

		if (walkingcycle <= 4) {
			theguy = peoplez;
		}
		if (walkingcycle >= 5 && walkingcycle <= 8) {
			theguy = peoplez2;
		}

		if (walkingcycle >= 9 && walkingcycle <= 12) {
			theguy = peoplez3;
		}
		if (walkingcycle >= 13 && walkingcycle <= 16) {
			theguy = peoplez4;
		}
		if (walkingcycle >= 17 && walkingcycle <= 20) {
			theguy = peoplez5;
		}
		if (walkingcycle >= 21 && walkingcycle <= 24) {
			theguy = peoplez6;
		}
		if (walkingcycle >= 25 && walkingcycle <= 28) {
			theguy = peoplez7;
		}
		if (walkingcycle >= 29 && walkingcycle <= 32) {
			theguy = peoplez8;
		}
		if (walkingcycle >= 33 && walkingcycle <= 36) {
			theguy = peoplez9;
		}
		if (walkingcycle >= 37 && walkingcycle <= 40) {
			theguy = peoplez10;
		}
		if (walkingcycle >= 41 && walkingcycle <= 44) {
			theguy = peoplez11;
		}
		if (walkingcycle >= 45 && walkingcycle <= 48) {
			theguy = peoplez12;
		}
		if (walkingcycle >= 49 && walkingcycle <= 52) {
			theguy = peoplez13;
		}
		if (walkingcycle >= 53 && walkingcycle <= 56) {
			theguy = peoplez14;
		}
		if (walkingcycle >= 57 && walkingcycle <= 60) {
			theguy = peoplez15;
		}
		if (walkingcycle >= 61 && walkingcycle <= 64) {
			theguy = peoplez16;
		}
	}



	distance1 = dist(Xpos, Ypos, 380, 620);
	distance2 = dist(Xpos, Ypos, 1120, 620);
	distancelight = dist(Xpos, Ypos, 1087, 481);
	distancewater = dist(Xpos, Ypos, 960, 576);
	distancewindow1 = dist(Xpos, Ypos, 1348, 614);
	distancepower = dist(Xpos, Ypos, 400, 480);
	distanceflower = dist(Xpos, Ypos, 668, 608);
	distanceoutside = dist(Xpos, Ypos, 586, 608);
	distancecircle = dist(Xpos, Ypos, 664, 535.5);
	distancecontrol = dist(Xpos, Ypos, 231,611.5);


	background(0);
	if (middle == true) {

		//house
		if (scene1 == true) {
			imageMode(CORNERS);
			image(floor2, 750, 375, 1500, 750);
		}

		if (scene2 == true) {
			imageMode(CORNERS);
			image(office2, 750, 375, 1500, 750);
		}

		if (scene3 == true) {
			imageMode(CORNERS);
			image(office3, 750, 375, 1500, 750);
		}


		if (Xpos <= 900 && Xpos >= 860 && Ypos == 600 && sixHeld == true) {
			scene2 = true;
		}
		if (scene2 == true) {
			if (Xpos <= 900 && Xpos >= 860 && Ypos == 600 && eightHeld == true) {
				scene3 = true
			}
		}
		if (scene3 == true) {
			if (Xpos <= 900 && Xpos >= 860 && Ypos == 600 && twoHeld == true) {
				state2 = true;
			}
		}



		if (state2 == true) {
			fill(255);
			if (rectlenth >= 376) {
				rectlenth -= 2;
			}
			push();
			rectMode(CORNERS);
			rect(750, rectlenth, 839, 701);
			pop();

			if (rectlenth == 375) {
				push();
				imageMode(CORNERS);
				image(ele, 0, 375, 750, 750);
				fill(0, shade);
				rect(0, 375, 375, 750);
				pop();
			}


			if (Xpos <= 606 && Xpos >= 312) {
				Ypos = 557;
			} else {
				Ypos = 600;
			}

		}
	}


if(bottom==true){
push();
	imageMode(CORNERS);
image(bottompic,0,750,1505,1125);
	fill(0);
	rectMode(CORNERS);
	rect(780,750,1500,1125);
	 pop();
	 }






	imageMode(CENTER);
	//left hand
	fill(255);
	rect(1520, 400, 100, 100);




	//light bulb
	if (distancelight <= 121 && pHeld == true) {
		lightbulbbag = true;
	}

	if (distancelight <= 121 && qHeld == true) {
		lightbulbbag = false;
	}

	if (lightbulbbag == true) {
		image(lightbulb, away, 450, 100, 100);
	}

	if (lightbulbbag == false) {
		image(lightbulb, 1087, 485, 30, 30);
	}


	if (distancepower <= 80 && lightbulbbag == true && qHeld) {
		away = 3000;
		if (shade >= 0) {
			shade -= 5;
		}
		powerup = true;
	}
	if (powerup == true) {
		image(lightbulb2, 398, 478, 30, 30);
	}

	//water

	if (distancewater <= 40 && pHeld == true) {
		waterbag = true;
	}

	if (distancewater <= 40 && qHeld == true) {
		waterbag = false;
	}

	if (waterbag == true) {
		image(water, away2, 450, 100, 100);
	}

	if (waterbag == false) {
		image(water, 960, 578, 30, 30);
	}

	if (distanceflower <= 20 && waterbag == true && qHeld) {
		away2 = 3000;
		haswater = true;
	}

	if (haswater == true) {
		pop();
		imageMode(CENTER);

		image(rain, away6 + random(-2, 2), rainflow, 30, 30);
		rainflow += 7;
		if (rainflow >= 700) {
			rainflow = 320
		}
		push();
	}

	//window1

	if (distancewindow1 <= 40 && pHeld == true) {
		window1bag = true;
	}

	if (distancewindow1 <= 40 && qHeld == true) {
		window1bag = false;
	}

	if (window1bag == true) {
		image(window1, away3, 630, 100, 100);
	}

	if (window1bag == false) {
		image(window1, 1348, 614, 65, 65);
	}


	if (distanceoutside <= 55 && window1bag == true && qHeld) {
		away3 = 3000;
		openwindow = true;

	}
	if (openwindow == true) {
		image(window1, 598, 535, 76, 72);
	}



	//flower
	if (openwindow == true && haswater == true) {
		hasflower = true;
		away6=3000;
		showflower=true;
	}

	if (hasflower == true) {

		if (distancecircle <= 70 && pHeld == true) {
			circlebag = true;
		}

	}
	if(showflower==true){
				fill(255,50,50);
		circle(away5,535.5,12);}

	if (circlebag == true) {
		fill(255, 50, 50);
		circle(away4, 630, 30);
    away5=3000;
	}

	if (distancecontrol <= 30 && circlebag == true && qHeld) {
		away4 = 3000;
		openele = true;

	}
	if (openele == true) {
push();
				imageMode(CORNERS);
				image(ele2, 0, 375, 750, 750);
		pop();
		image(window1, 598, 535, 76, 72);
		if(Xpos<=180&&Ypos==600){
			 Xpos=180;
			Ypos=1000;
			 }
		bottom=true;
	}







	image(theguy, Xpos, Ypos, 200, 250);



	//state indicator
	fill(20, 233, 231);
	textSize(40);

	text("Press'O' and 'W' for walking", 200, 400);
	text("Press'P' to pick up stuff", 200, 200);
		text("Press'Q' to use stuff", 200, 200);
	// text(mouseY, 300, 200);
	// text(distancecontrol, 300, 300);
if(title){
	background(0);
	 text("Tom Clancy's Ghost Heaven",width/2,height/2);
	 }

}






function keyPressed() {
	print(key + " pressed.");
	if (key === "w") {
		wHeld = true;
		oHeld = false;
	}
	if (key === "o") {
		oHeld = true;
		wHeld = false;
	}
	if (key === "q") {
		qHeld = true;
	}
	if (key === "p") {
		pHeld = true;
	}
	if (key === "c") {
		cHeld = true;
	}
	if (key === "1") {
		oneHeld = true;
	}
	if (key === "2") {
		twoHeld = true;
	}
	if (key === "3") {
		threeHeld = true;
	}
	if (key === "4") {
		fourHeld = true;
	}
	if (key === "5") {
		fiveHeld = true;
	}

	if (key === "6") {
		sixHeld = true;
	}
	if (key === "7") {
		sevenHeld = true;
	}
	if (key === "8") {
		eightHeld = true;
	}
	if (key === "9") {
		nineHeld = true;
	}
	if (key === "0") {
		zeroHeld = true;
	}

}







function keyReleased() {
	if (key === "w") {
		wHeld = false;
	}
	if (key === "o") {
		oHeld = false;
	}
	if (key === "q") {
		qHeld = false;
	}
	if (key === "p") {
		pHeld = false;
	}
	if (key === "c") {
		cHeld = false;
	}
	if (key === "1") {
		oneHeld = false;
	}
	if (key === "2") {
		twoHeld = false;
	}
	if (key === "3") {
		threeHeld = false;
	}
	if (key === "4") {
		fourHeld = false;
	}
	if (key === "5") {
		fiveHeld = false;
	}

	if (key === "6") {
		sixHeld = false;
	}
	if (key === "7") {
		sevenHeld = false;
	}
	if (key === "8") {
		eightHeld = false;
	}
	if (key === "9") {
		nineHeld = false;
	}
	if (key === "0") {
		zeroHeld = false;
	}
}
