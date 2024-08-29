
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   let drumMap = map(drum,0,100,0,50); //Could get help
   console.log(counter);
   ellipse(counter/2,800-drumMap,100);


{
  fill(0, 255, 21, 50) //Change later
  let vocalMap = map(bass,20,30,0,30)
  triangle(200,80,50-vocalMap,650,450+vocalMap,650) //50, 450
}


  let imgElement = document.getElementById('dynamicImage');
  if (!imgElement) {
    imgElement = document.createElement('img');
    imgElement.id = 'dynamicImage'; 
    imgElement.src = 'images/drawing.png';
    imgElement.alt = 'drawing';
    imgElement.width = 400;
    imgElement.height = 500;
    imgElement.style.position = 'absolute'; 
    imgElement.style.left = '10px';
    imgElement.style.top = '450px'; 
    document.body.appendChild(imgElement);
  }

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
}