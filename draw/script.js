function setup() {
  createCanvas(300, 300);
  background("#acacac");
  rgb = [];
  R = random(255);
  G = random(255);
  B = random(255);
  rgb.push(R,G,B);
}

function mouseDragged() {
  socket.emit("ElipsCord", [mouseX, mouseY,rgb]);
}


function windowLoad() {
  socket = io.connect('http://localhost:3000');
  socket.on("draw!", IDK);


  function IDK(cor) {
    fill(cor[2]);
    ellipse(cor[0], cor[1], 10, 10);
  }

}
window.onload = windowLoad;

