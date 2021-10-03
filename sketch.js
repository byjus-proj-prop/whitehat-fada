var starImg,bgImg,fadaimg;
var star, starBody,fada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
    starImg = loadImage("star.png");
    fadaimg = loadImage("fairyImage1.png");
	bgImg = loadImage("starNight.png");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    fada = createSprite(178,558)
    fada.addImage(fadaimg)
    fada.scale = 0.3
    fada.debug=true
    fada.setCollider("rectangle",fada.x,fada.y,fada.width,fada.height)

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.debug=true

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

	World.add(world, starBody);

    Engine.run(engine);
}

function draw() {
    background(bgImg);
    if(keyDown("right")) fada.x+=2;
    if(keyDown("left")) fada.x-=2;
    if(fada.x >= 600) Matter.Body.setStatic(starBody,false);
    if(fada.isTouching(star)) Matter.Body.setStatic(starBody,true);
    console.log(`fada.x = ${fada.x}`);
    star.x=starBody.position.x
    star.y=starBody.position.y
    
    drawSprites();
}
