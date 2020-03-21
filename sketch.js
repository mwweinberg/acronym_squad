var i = 0;
var responseList = ['Acronym Squad Approved!', 'Fantastic Choice', 'Another Winner', 'You Are Great at This']
var picked_answer;


function setup() {
  createCanvas(800, 400);


  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  //submit.mousePressed(processAcronymI);
  //submit.mousePressed(greet);
  picked_answer = random(responseList);





}





function draw() {
    console.log(i);
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
        i = i + 2;

        //background(55);
    }

    if  (i > 0 && i < width + 15) {
        text('processing...', 50, 50);
    }



    //second part of the animation
    if (i > width+14) {
        textSize(50);
        textAlign(CENTER, CENTER)
        //var copy_for_win = picked_answer + " " + s;
        text(s + "?", width/2, height * .25);
        text(picked_answer, width/2, height * .75);
    }

}

//this is the function called when the button is pressed
function advance() {
    i = 1
}
