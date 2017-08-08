const PIXI = require('pixi.js');

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics;

var ball, state, player1;
var down = true;

var stage = new Container();
var renderer = autoDetectRenderer();

    document.body.appendChild(renderer.view);
    setup();

function setup() {
    //Set the game state
    state = play;

    ball = new Graphics();
    ball.beginFill(0xFFFFFF);
    ball.drawCircle(0, 0, 15);
    ball.endFill();
    ball.x = 64;
    ball.y = 130;

    player1 = new Graphics();
    player1.beginFill(0xFFFFFF);
    player1.drawRect(5, (renderer.height / 2) - 50, 25, 120);
    player1.endFill();

    stage.addChild(ball);
    stage.addChild(player1);
    gameLoop();
}

function gameLoop(){
    requestAnimationFrame(gameLoop);
    state();
    renderer.render(stage);
}

function play() {

    if (down) {
        ball.y += 10;
    } else {
        ball.y -= 10;
    }

    if (ball.y >= (renderer.height - 30)) {
        down = false;
    }
    if (ball.y <= 10) {
        down = true;
    }
}

function contain(sprite, container) {
  var collision = undefined;

  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}