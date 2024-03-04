import Bird from "./classes/bird.js";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#game");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.bird = new Bird(this);
    }

    update() {}

    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  const animate = () => {
    game.draw(ctx);
    requestAnimationFrame(animate);
  };

  animate();
});
