
// Main game Scene 
// Note please use the Live streamer or any other host which supprts the html5 and phaser games. I have used Live streamer to test this game...
var Scene1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene1 ()
    {
        Phaser.Scene.call(this, { key: 'scene1' });
    },

    preload: function ()
    {
        // loads the game assets 
        // All the assets used to create games have been referenced from google images from the original game and edited in photoshop......
        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('cloud', 'assets/cloud.png');
        this.load.image('boy', 'assets/boy.png');
        this.load.image('bird', 'assets/bird.png');
        this.load.image('status','assets/status.png');
        this.load.image('rain', 'assets/rain.png');
        this.load.image('protect', 'assets/protect.png');
        this.load.image('bubble', 'assets/protectbubble.png');       
       
    },

    create: function ()
    {
        // creating the assets

        //initial value of the score and health
       health=120;
        score=0;
        //adding assets
        this.add.image(300,300,'bg');
        rains=this.physics.add.sprite(-800,-800,'rain').setOrigin(0.5,0);
        player = this.physics.add.image(200,200, 'cloud');
        player.body.setAllowGravity(false);
        player.setBounce(0.2);
        player.setScale(1.2);
        player.setCollideWorldBounds(true);
        boy = this.physics.add.sprite(200,200, 'boy');
        boy.body.setAllowGravity(false);
        boy.setBounce(0.2);
        boy.setCollideWorldBounds(true);
        protect=this.add.sprite(-100,-100,'protect');
        bubble=this.physics.add.sprite(player.x,player.y,'bubble');
        bubble.visible=false;
        bubble.body.enable = false;

        // player follows the mouse position
        this.input.on('pointermove', function (pointer)
    {
       
        this.physics.moveToObject(player, pointer, 240);
    }, this);

    // adding text for score display
    scoreText = this.add.text(20, 20, 'score: 0', { fontSize: '24px', fill: '#000' });
    
    // adding health status asset
    status=this.add.image(450,50,'status').setOrigin(0,0);

//when player clicks on mouse button the rains position is set to players current position with physics set to true
    this.input.on('pointerdown', function (pointer) {

        if(rains.y>=600){
            rains.x=player.x;
            rains.y=player.y;
            rains.body.enable = true;
        }
   

    }, this);

   
    },

    // updates the game every frame
    update: function (time, delta)
    {
          // makes the immunity bubble from birds rotate continuously
        protect.angle += 0.5;
// move the immunity bubble from birds
        protect.x+=2;
        rains.y+=15;
      //  move the boy character and protection bubble to the player's(cloud) position
        boy.x=player.x-10;
        boy.y=player.y-25;
        bubble.x=player.x;
        bubble.y=player.y;

// displays the health status 
        status.displayWidth = health;
        status.displayHeight=20;
        status.setTint(0xffc075);
        scoreText.setText(score);

        // collision 
    this.physics.add.overlap(boy, bird, birdCol, null, this);
    this.physics.add.overlap(boy, bird2, birdCol, null, this);
    this.physics.add.overlap(rains, bird2,Purify, null, this);
    this.physics.add.overlap(rains, bird,Purify, null, this);
    this.physics.add.overlap(player, protect,Protect, null, this);

//spawining the birds after sometime and setting their physics 
       if(count==100){
           bird=this.physics.add.sprite(Phaser.Math.Between(-300,-100),Phaser.Math.Between(100,500),'bird');
           bird.setGravityX(70);
           bird.setScale(1.2);
           bird.setTint(0x2b2b2b);
           bird2=this.physics.add.sprite(Phaser.Math.Between(700,900),Phaser.Math.Between(100,500),'bird');
           bird2.setGravityX(-60);
           bird2.setScale(1.2);
           bird2.setTint(0x2b2b2b);
           bird2.flipX=true;
           count=0;
       }
       else{
           count+=1;
       }
 // removing the protection bubble after 10-15 secs
       if(counttime==600){
        bubble.visible = false;
        bubble.body.enable = false;
        boy.body.enable = true;
        counttime=0;
    
    }
    else{
        counttime+=1;
    }

    //spawning the protect bubble 
    if(bubbletime==2000){
        protect=this.physics.add.sprite(1,Phaser.Math.Between(100,500),'protect');
        protect.setBounce(0.2);
        protect.setGravityY(50);
        protect.setCollideWorldBounds(true);
        bubbletime=0;
    
    }
    else{
        bubbletime+=1;
    } 

    // resetting the player tint back fater being hit by the bird
    if(attacked==30){
        boy.setTint(0xffffff);
       attacked=0;
    }
    else{
        attacked+=1;
    }
    },
});