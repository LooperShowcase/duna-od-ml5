class Player {
  constructor() {
    this.size = 80;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.5;
  }
  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -25;
    }
  }
  move() {
    this.y += this.velocityY;
    this.velocityY = this.velocityY + this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  Show() {
    image(playerImage, this.x, this.y, this.size, this.size);
  }
  collided(obstacleToCheck) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 5,
      this.size - 5,
      obstacleToCheck.x,
      obstacleToCheck.y,
      obstacleToCheck.size - 5,
      obstacleToCheck.size - 5
    );
    return iscolliding;
  }
}
