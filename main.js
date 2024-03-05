const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const bird = {
  x: 150,
  y: 200,
  width: 40,
  height: 40,
  gravity: 0.09,
  speed: 0,
  draw: function () {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  update: function () {
    this.speed += this.gravity;
    this.y += this.speed;
  },
  flap: function () {
    if (this.speed >= 0) {
      let flapSpeed = -2 - this.speed;
      this.speed = flapSpeed;
    } else {
      let flapSpeed = -1 - this.speed;
      this.speed = flapSpeed;
    }
    let flapSpeed = -2;
    this.speed = flapSpeed;
  },
};

function draw() {
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bird.draw();
}

function update() {
  bird.update();
}

function loop() {
  draw();
  update();
  requestAnimationFrame(loop);
}

loop();

document.addEventListener("click", function (e) {
  bird.flap();
});
