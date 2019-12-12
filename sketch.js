var scene1, scene2, scene3
var state2
var Xpos, Ypos
var wHeld, oHeld, qHeld, pHeld, cHeld, walkspeed, runspeed, oneHeld, twoHeld, threeHeld, fourHeld, fiveHeld, sixHeld, sevenHeld, eightHeld, nineHeld, zeroHeld
var portalstate, distance1, distance2
var theguy, people, people2, people3, people4, people5, people6, people7, people8, people9, people10, people11, people12, people13, people14, people15, people16
var peoplez, peoplez2, peoplez3, peoplez4, peoplez5, peoplez6, peoplez7, peoplez8, peoplez9, peoplez10, peoplez11, peoplez12, peoplez13, peoplez14, peoplez15, peoplez16
var walkingcycle

let input;
let analyzer;
var vaultlight,vaultlighton,mouthopen

var middle, bottom, bottompic,top1,toppic

var floor2, office2, office3
var lightbulb, distancelight, lightbulbbag, distancepower, powerup, lightbulb2, away
var water, distancewater, waterbag, away2, haswater, distanceflower, rain, rainflow, away6
var window1, distancewindow1, window1bag, away3, distanceoutside, openwindow
var circlebag, distancecircle, hasflower, showflower, distancecontrol, away4, openele, away5
var wheel,distancewheel,wheelbag,away7,distancedoor,wheelondoor,openrabbitpic
var orange,orangeappear,distanceorange,away8,away9,orangebag,orange2,upstair
var last1,last2,last3,board1,board2,board3
var moving,moving2,slide

var title, titlepic,end,cheat,cheatpic,endpic

var distancemachine,distancestair,stairopen
var rabbit,rabbitroom2,rabbitroom3,rabbitroom4,decode2,decode3,decode4,openrabbit

var rectlenth
var ele, shade, ele2
var vault,vaultpic


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
	floor2 = loadImage('livingroom2.jpg');
	office2 = loadImage('livingroom3.jpg');
	office3 = loadImage('livingroom1.jpg');
	ele = loadImage('ele.jpg');
	ele2 = loadImage('ele2.jpg');
	titlepic = loadImage('title300.png');
	bottompic = loadImage('rabbitroom0.jpg');
	rabbitroom2 = loadImage('rabbitroom1.jpg');
	rabbitroom3 = loadImage('rabbitroom2.jpg');
	rabbitroom4 = loadImage('rabbitroom3.jpg');
	openrabbitpic = loadImage('openrabbit.jpg');
	lightbulb2 = loadImage('lightbulb2.png');
	lightbulb = loadImage('lightbulb.png');
	water = loadImage('water.png');
	rain = loadImage('rain.png');
	window1 = loadImage('window1.png');
	wheel=loadImage('wheel.png');
	vaultpic=loadImage('plants.png');
		mouthopen=loadImage('mouthopen.png');
	orange=loadImage('orange.png');
		orange2=loadImage('orange2.png');
			upstair=loadImage('upstair.jpg');
				toppic=loadImage('toppic.jpg');
					last1=loadImage('last1.jpg');
						last2=loadImage('last2.jpg');
						last3=loadImage('last3.jpg');
	cheatpic=loadImage('cheatpage.png');
		endpic=loadImage('endpic.png');
}














function setup() {
	createCanvas(1650, 1145);
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
	away4 = 1570;
	openele = false;
	away5 = 664;
	away6 = 668;
	bottom = false;
	title = true;
	decode2=false;
		decode3=false;
		decode4=false;
	wheelbag=false;
	wheeldoor=false;
	away7=1570;
	openrabbit=false;
	vault=false;
	  input = new p5.AudioIn();
  input.start();
	vaultlight=0;
		vaultlighton=false;
	orangeappear=false;
away8=860;
	away9=1570;
	orangebag=false;
	stairopen=false;
	top1=false;
	end=false;
	cheat=false;
	moving=1145;
	moving2=1145;
	slide=375;
}












function draw() {



	//walking system
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	if (wHeld) {
		Xpos -= walkspeed;
	}
	if (oHeld) {
		Xpos += walkspeed;
	}

	if (cHeld) {
		bottom = true;
		// stairopen=true;
		// end=true;
	}

		if (oneHeld) {
cheat=true;
	}
		if (threeHeld) {
cheat=true;
	}
	if (fiveHeld) {
cheat=true;
	}
	if (sevenHeld) {
cheat=true;
	}
	if (nineHeld) {
end=true;
	}

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








	//distance system
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

	distance1 = dist(Xpos, Ypos, 380, 620);
	distance2 = dist(Xpos, Ypos, 1120, 620);
	distancelight = dist(Xpos, Ypos, 1087, 481);
	distancewater = dist(Xpos, Ypos, 960, 576);
	distancewindow1 = dist(Xpos, Ypos, 1348, 614);
	distancepower = dist(Xpos, Ypos, 400, 480);
	distanceflower = dist(Xpos, Ypos, 668, 608);
	distanceoutside = dist(Xpos, Ypos, 586, 608);
	distancecircle = dist(Xpos, Ypos, 664, 535.5);
	distancecontrol = dist(Xpos, Ypos, 231, 611.5);
	distancemachine = dist(Xpos, Ypos, 575, 910);
	distancewheel= dist(Xpos, Ypos, 335,950);
  distancedoor= dist(Xpos, Ypos, 701, 937);
	  distanceorange= dist(Xpos, Ypos, 1123,680);
		  distancestair= dist(Xpos, Ypos, 727,613);
	background(0);











	//firstfloor
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
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


		if (Xpos <= 900 && Xpos >= 860 && Ypos == 600 && eightHeld == true) {
			scene2 = true;
		}
		if (scene2 == true) {
			if (Xpos <= 900 && Xpos >= 860 && Ypos == 600 && sixHeld == true) {
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


			if (Xpos <= 606 && Xpos >= 312 && Ypos >= 500 && Ypos <= 650&&stairopen==false) {
				Ypos = 557;
			}
			if (Xpos >= 606 && Ypos >= 500 && Ypos <= 650&&stairopen==false) {
				Ypos = 600;
			}
			if (Xpos <= 312 && Ypos >= 500 && Ypos <= 650&&stairopen==false) {
				Ypos = 600;
			}
		}
		if (Xpos <= 120 && Ypos == 600 && openele == true) {
			bottom = true;
			Ypos = 973;
			Xpos = 180;
		}
	}










	//third floor
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	if (bottom == true) {

		push();
		imageMode(CORNERS);
		image(bottompic, 0, 750, 750, 1125);
		pop();

		if (distancemachine <= 70&&zeroHeld) {

			decode2=true;
		}


		if (Xpos <= 120 && Ypos == 973) {

			Ypos = 600;
			Xpos = 180;
		}




		if(decode2==true){
		push();
		imageMode(CORNERS);
		image(rabbitroom2, 0, 750, 750, 1125);
		pop();
		if (distancemachine <= 70&&fourHeld) {
			decode3=true;
		}
		}


		if(decode3==true){
		push();
		imageMode(CORNERS);
		image(rabbitroom3, 0, 750, 750, 1125);
		pop();
		if (distancemachine <= 70&&twoHeld) {
			decode4=true;
		}
		}

		if(decode4==true){
		push();
		imageMode(CORNERS);
		image(rabbitroom4, 0, 750, 750, 1125);
		pop();
		if (wheelondoor==true) {
			openrabbit=true;
		}
		}


		if(openrabbit==true){
		push();
		imageMode(CORNERS);
		image(openrabbitpic, 0, 750, 750, 1125);
		pop();
		vault=true;
		}




		if(vault==true){


			if(vaultlighton==false){
    let volume = input.getLevel();

    let threshold = 0.1;

    if (volume > threshold) {
    noStroke();
    fill(255);
    rect(random(750,1500), 780, volume * 100, 1000);
    rect(random(750,1500), 780, volume * 100, 1000);
		rect(random(750,1500), 780, volume * 100, 1000);
		rect(random(750,1500), 780, volume * 100, 1000);
    rect(random(750,1500), 780, volume * 100, 1000);
		rect(random(750,1500), 780, volume * 100, 1000);

		vaultlight+=1;
	  }
			}


			if(vaultlight>=30){
				push();
				fill(255);
			rectMode(CORNERS);
			rect(750,750,1500,1125);
				pop();
				vaultlighton=true;
        orangeappear=true;
			}

		imageMode(CORNERS);
		image(vaultpic,750,750,1500,1125);
		}
		if(orangeappear==true){
				push();
	    	imageMode(CENTER);
				image(orange,1118,away8,70,70);
				pop();
			 }
		if(Xpos<=1173&&Xpos>=1060&&pHeld){
			 away8=3000;
			orangebag=true;
			 }
		if(orangebag==true){
						push();
	    	imageMode(CENTER);
				image(orange,away9,600,100,100);
				pop();
	}

		if(distancestair<=25&&qHeld&&orangebag==true){
			away9=3000;
			stairopen=true;
			 }

  	}




	//first level
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////





	//object box
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	imageMode(CENTER);

	fill(255);
	rect(1520, 400, 100, 100);
	rect(1520, 250, 100, 100);




	//light bulb
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	if (distancelight <= 121 && pHeld == true) {
		lightbulbbag = true;
	}

	if (distancelight <= 121 && qHeld == true) {
		lightbulbbag = false;
	}

	if (lightbulbbag == true) {
		image(lightbulb, away, 300, 100, 100);
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
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

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
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

	if (distancewindow1 <= 40 && pHeld == true) {
		window1bag = true;
	}

	if (distancewindow1 <= 40 && qHeld == true) {
		window1bag = false;
	}

	if (window1bag == true) {
		image(window1, away3, 600, 100, 100);
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
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	if (openwindow == true && haswater == true) {
		hasflower = true;
		away6 = 3000;
		showflower = true;
	}

	if (hasflower == true) {

		if (distancecircle <= 70 && pHeld == true) {
			circlebag = true;
		}
	}
	if (showflower == true) {
		fill(255, 50, 50);
		circle(away5, 535.5, 12);
	}

	if (circlebag == true) {
		fill(255, 50, 50);
		circle(away4, 600, 30);
		away5 = 3000;
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
		fill(255, 50, 50);
		circle(233, 614, 12);
		image(lightbulb2, 398, 478, 30, 30);

	}










			if(stairopen==true){
			push();
			imageMode(CORNERS);
			image(upstair,371,375,750,750);

			pop();
				push();
	    	imageMode(CENTER);
				image(orange2,727,613,70,70);
				image(window1, 598, 535, 76, 72);
				pop();
			 if(Xpos<=600&&Xpos>=385){
			 Ypos=1.75*Xpos-450;
			 }



if(Ypos<=400){
	top1=true;
	 }

	push();
if(top1==true){
		imageMode(CORNERS);
image(toppic,0,0,1500,375);
	rectMode(CORNERS);
	fill(0);
if(slide>=0){
	 slide-=3;}
		rect(0,0,1500,slide);

}
	 if(Xpos<=107&&Xpos>=75&&Ypos>=220&&twoHeld){
				 board1=true;
			 }

				if(board1==true){
				 image(last1,0,0,1500,375);
						 if(Xpos<=107&&Xpos>=75&&Ypos>=220&&fourHeld){
				 board2=true;
			 }
			 }
								if(board2==true){
				 image(last2,0,0,1500,375);
						 if(Xpos<=107&&Xpos>=75&&Ypos>=220&&zeroHeld){
				 board3=true;
			 }
			 }
									if(board3==true){
				 image(last3,0,0,1500,375);


			 }
					pop();

			 }








			if(vault==true){

		imageMode(CENTER);
    image(mouthopen,296,507,375,375);
			}

	//wheel
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////

if(bottom==true){
	if (distancewheel <= 30 && pHeld == true) {
		wheelbag = true;
	}

	if (distancewheel <= 30 && qHeld == true) {
		wheelbag = false;
	}
	if (wheelbag == true) {
		imageMode(CENTER);
		image(wheel, away7, 600, 160, 160);
	}

	if (wheelbag == false) {

		image(wheel, 335,950, 160, 160);
	}

		if (distancedoor <= 40 && wheelbag == true && qHeld) {
		away7 = 3000;
		wheelondoor = true;
	}
	if (wheelondoor == true&&openrabbit==false) {
		image(wheel, 701, 936, 160,160);
	}
}


	if(board3==true){
		push();
				rectMode(CORNERS);
		fill(255);
				rect(1475,470,1650,701);
		pop();
  if(Xpos>=1600){
		end=true;
		 }
			 }


push();
		    	imageMode(CENTER);
	image(theguy, Xpos, Ypos, 200, 250);
pop();


	//state indicator
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	fill(255);
	textSize(25);

	  text("Press'O' and 'W' for walking.", 10, 1120);
	  text("Press'P' to pick up object.", 475, 1120);
	    text("Press'Q' to use object.", 900, 1120);
	// text(mouseX, 300, 200);
	// text(mouseY, 300, 250);
	// text(Ypos, 300, 300);
	// text(Xpos, 300, 350);



	//titlepage
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////
	if (title) {
		background(0);
		image(titlepic, width / 2, height / 2, 400, 600);
		fill(255);
		textSize(35);
		text("Press'n' to start", width / 2, height / 2 + 300);
	}

	if(cheat==true){
		background(255,0,0);
		image(cheatpic, width / 2, height / 2, 500, 100);
		 }


		if(end==true){
			noStroke();
		background(226,240,217);
		image(endpic, width / 2, height / 2, 500, 100);
			push();
			rectMode(CORNERS);
			fill(226,240,217);
			if(moving>=0){
			moving-=4.5;}
						if(moving2>=0){
			moving2-=2.5;}
			rect(width/2+180,moving,width/2+215,height);
			rect(width/2+217,0,width/2+255,moving2);
			pop();
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
	if (key === "n") {
		title = false;
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
