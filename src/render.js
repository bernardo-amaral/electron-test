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

    stage.addChild(ball);
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