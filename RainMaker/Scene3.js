//Gameover Scene of the game

var Scene3 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene3 ()
    {
        Phaser.Scene.call(this, { key: 'scene3' });
    },

    preload: function ()
    {
        //load the assets 
        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('cloud', 'assets/cloud.png');
        this.load.image('boy', 'assets/boy.png');
    },

    create: function ()
    {
        //creating the assets

        this.add.image(300,300,'bg');
        cloud=this.add.image(config.width/2,config.width/2,'cloud');
        cloud.setScale(1.2);
        boy= this.add.image(290,280,'boy');
        boy.setScale(1);
        //creating the text
        this.add.text(250, 350, 'score: '+score, { fontSize: '20px', fill: '#000' });
        this.add.text(180, 400, 'Click to Play Again!', { fontSize: '22px', fill: '#000' });
        this.add.text(250, 200, 'GameOver!', { fontSize: '24px', fill: '#000' });

// on mouse down changes the scene
        this.input.once('pointerdown', function () {

            console.log('From SceneA to SceneB');

            this.scene.start('scene1');

        }, this);
    },

    update: function ()
    {
        
    }

});