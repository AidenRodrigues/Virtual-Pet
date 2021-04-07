var dog;
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database()
	createCanvas(500, 500);
  dog1 = createSprite(400, 300, 150, 150)
  dog1.addImage(dog)
  dog1.scale = 0.15
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog)
  }

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


