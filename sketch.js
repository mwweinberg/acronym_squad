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
    var s = textfield.value();
    // sets i to 1, which triggers everything
    submit.mousePressed(advance);

    textFont('Alegreya Sans');

    //first part of the animation. moving the word across the screen
    if (i > 0  && i < width + 15) {
        fill('#E0E0E0');
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

function advance() {
    i = 1
}

// function draw() {
//   background(220);
//
//   var s = textfield.value();
//
//
//   text(s, i, height/2);
//   i++;
//
//   if (i > width) {
//       var answer = random(responseList) + " big";
//       var printText = answer;
//       text('big', 50, 50);
//   }
// }

// if mouseclick
    //i = 1
//if i < width
    //run the word across the screen
    //i++
//if i > width
    //write the text

function processAcronymI(){

}

// function processAcronym() {
//
//     var s = textfield.value();
//
//     for (let i = 0; i < width; i++) {
//         text(s, i, height/2);
//         rect(0, 0, width, height);
//         sleep(2000);
//
//
//
//     }
//
//
//     //writes the contents of s after the canvas
//     // var answer = random(responseList) + " " + s
//     // createP(answer);
//     //
//     // for (let i = 0; i < 200; i++) {
//     //     push();
//     //     fill(random(255), 255, 255);
//     //     translate(random(width), random(height));
//     //     rotate(random(2 * PI));
//     //     text(s, 0, 0);
//     //     pop();
//     // }
//
// }
//
// // function greet() {
// //     const name = textfield.value();
// //     //greeting.html(name);
// //
// //     for (let i = 0; i < 200; i++) {
// //         push();
// //         fill(random(255), 255, 255);
// //         translate(random(width), random(height));
// //         rotate(random(2 * PI));
// //         text(name, 0, 0);
// //         pop();
// //     }
// // }
