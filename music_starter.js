
// vocal, drum, bass, and other are volumes ranging from 0 to 100
// Create a function to handle image creation and placement
function createAndPlaceImage(src, id, left, top, width, height) {
  let imgElement = document.getElementById(id);
  if (!imgElement) {
    imgElement = document.createElement('img');
    imgElement.id = id;
    imgElement.src = src;
    imgElement.alt = 'drawing';
    imgElement.width = width;
    imgElement.height = height;
    imgElement.style.position = 'absolute';
    imgElement.style.left = left;
    imgElement.style.top = top;
    document.body.appendChild(imgElement);
  } else {
    // If the image element already exists, update its position
    imgElement.style.left = left;
    imgElement.style.top = top;
  }
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  {
    fill(0, 255, 21, 50); //Change later
    let vocalMap = map(bass, 20, 30, 0, 30);
    triangle(200, 80, 50 - vocalMap, 650, 450 + vocalMap, 650); //50, 450
  }

  let drumMap = map(drum, 0, 100, 0, 50); //Could get help
  console.log(counter);
  ellipse(counter / 2, 800 - drumMap, 100);

  // Create and place images
  createAndPlaceImage('images/drawing.png', 'dynamicImage1', '10px', '380px', 500, 600);
  createAndPlaceImage('images/drawing.png', 'dynamicImage2', '520px', '380px', 500, 600); 
}

textAlign(CENTER);
textSize(vocal);
textInput(words,width/3, height/4)

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);