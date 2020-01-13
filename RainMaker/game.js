
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }},
    parent: 'phaser-example',
    scene: [ Scene2, Scene1,Scene3 ]
};
//global variable declaration so that accs=essed by all the js files

var count=0;
var bird;
var bird2;
var score = 0;
var scoreText;
var healthdis ;
var health=120;
var status;
var game = new Phaser.Game(config);
var rains;
var protect;
var bubble;
var counttime=0;
var bubbletime=0;
var attacked=0;

//function triggered when birds and player collide

function birdCol (boy, enemy)
{
    //reduces the health and changes the playertint for some time to indicate being hit
    health-=0.01;
    boy.setTint(0xff0000);

    // if the health is over or below zero changes the scene
    if(health<=0){
        this.physics.pause();
    boy.setTint(0xff0000);
    this.scene.start('scene3');
      
    }

}
// function triggered when rain and birds collide
function Purify (rainy, enemy)
{
    //updates the score and normalize the birds tint
rainy.body.enable = false;
 score+=10;
 enemy.setTint(0xffffff);

}

//function triggred when player collides with the bubble which protects for some time from birds
function Protect ()
{
    bubble.visible = true;
    bubble.body.enable = true;
    boy.body.enable = false;
    protect.disableBody(true,true);
    counttime=0;
}


