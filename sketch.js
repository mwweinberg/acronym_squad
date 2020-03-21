var i = 0;
var responseList = ['yes', 'no', 'seven']


function setup() {
  createCanvas(400, 400);

  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  //submit.mousePressed(processAcronymI);
  //submit.mousePressed(greet);


}

function draw() {
    console.log(i);
    var s = textfield.value();
    // sets i to 1, which triggers everything
    submit.mousePressed(advance);

    //first part of the animation. moving the word across the screen
    if (i > 0  && i < width + 15) {
        rect(0, 0, width, height);

        text(s, i, height/2);
        i++;

        //background(55);
    }

    if  (i > 0 && i < width + 15) {
        text('processing...', 50, 50);
    }


    //second part of the animation
    if (i > width+14) {
        textSize(50);
        textAlign(CENTER, CENTER)
        text('Great Acronym', width/2, height/2);
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
