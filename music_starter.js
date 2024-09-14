



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(6, 15, 89);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  


  
ellipse(20,20,20,20)



{
  fill(255, 0, 4,90); //Change later
  let vocalMap = map(bass, 20, 30, 0, 30);
  triangle(200, 80, 50 - vocalMap, 650, 450 + vocalMap, 650); //50, 450
}

let drumMap = map(drum, 0, 100, 0, 50); //Could get help
console.log(counter);
ellipse(counter / 2, 800 - drumMap, 100);
}
