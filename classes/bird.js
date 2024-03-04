export default class Bird {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
  }
  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
