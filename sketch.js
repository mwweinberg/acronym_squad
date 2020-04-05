var i = 0;
var responseList = ['Acronym Squad Approved!', 'Fantastic Choice', 'A Real Winner', 'You Are Great at This', 'You\'re Always Full of Good Ideas', 'Meh, It\'ll Work', 'Seriously, We\'re So Proud of You', "You're an Unheralded Genius", 'Wearing Your Smart Pants Today, We See', "If We Were Hiring We'd Hire You", "This has been assessed for AcronymQuality&reg", "So many letters!", "A OK", "Take it to the bank!", "Acronym Squad Approved", "The Acronym Squad is in awe of your Acronym Prowess" ]
var picked_answer;

//these variable & functions are for centering the canvas
var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //you want the y to be low enough that the canvas does not cover the button
  var y = 450;
  cnv.position(x, y);
}
function windowResized() {
  centerCanvas();
}


function setup() {
  //createCanvas(800, 400);
  //makes the canvas slightly smaller than the windown widht
  //the windowResized() function revises the canvas if the window is resized
  cnv = createCanvas(windowWidth - 50, 400);
  centerCanvas();


  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  //submit.mousePressed(processAcronymI);
  //submit.mousePressed(greet);
  picked_answer = random(responseList);

}



// function windowResized() {
//   resizeCanvas(windowWidth - 50, 400);
// }


function draw() {
    //console.log(i);
    var s = textfield.value().toUpperCase();;
    // sets i to 1, which triggers everything
    submit.mousePressed(advance);

    textFont('Alegreya Sans');

    //first part of the animation. moving the word across the screen
    if (i > 0  && i < width + 15) {
        fill('#E0E0E0');
        textSize(height * 0.1);
        rect(-5, -5, width + 10, height + 10);

        fill('#000000');
        text(s, i, height/2);
        //controls the  speed the text moves across the page
        //update the 'processing' animation below if you change  it
        i = i + 3;

        //background(55);
    }
    //all of this foolishness is to make the little animation after the word processing
    //since i is advancing by three each time it does a % on i to get one of three results
    //if you change the step you will have to change the # it is divided by (from 9 as of this writing)
    if  (i > 0 && i < width + 15) {
        console.log(i);
        if ((i-1) % 9 == 0) {
            text('processing <  ', 50, 50);
        }
        if ((i-1) % 9 == 3) {
            text('processing    - ', 50, 50);
        }
        if ((i-1) % 9 == 6) {
            text('processing     >', 50, 50);
        }
        else {
            text('processing', 50, 50);
        }
        console.log(i % 3);
    }



    //second part of the animation
    if (i > width+14) {
        textSize(50);
        textAlign(CENTER, CENTER)
        //var copy_for_win = picked_answer + " " + s;
        text(s + "?", width/2, 50);
        text(picked_answer, width/2, height * .75);

    }

}

//this is the function called when the button is pressed
function advance() {
    i = 1
}
