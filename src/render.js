const PIXI = require('pixi.js');

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics;

var ball, state;

var stage = new Container();
var renderer = autoDetectRenderer(256, 256);

    document.body.appendChild(renderer.view);

    setup();


function setup() {
    //Set the game state
    state = play;

    ball = new Graphics();
    ball.beginFill(0x9966FF);
    ball.drawCircle(0, 0, 32);
    ball.endFill();
    ball.x = 64;
    ball.y = 130;

    stage.addChild(ball);
    gameLoop();
}

function gameLoop(){
    requestAnimationFrame(gameLoop);
    state();
    renderer.render(stage);
}

function play() {
  ball.x += 1;
}