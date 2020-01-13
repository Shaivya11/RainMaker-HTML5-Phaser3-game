// Title Scene of the Game


var Scene2 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Scene2 ()
    {
        Phaser.Scene.call(this, { key: 'scene2' });
    },

    preload: function ()
    {
        //loading the assets
        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('cloud', 'assets/cloud.png');
        this.load.image('boy', 'assets/boy.png');
    },

    create: function ()
    {
        // creating the assets
        this.add.image(300,300,'bg');
        cloud=this.add.image(config.width/2,config.height/2,'cloud');
        cloud.setScale(2.2);
        boy= this.add.image(280,250,'boy');
        boy.setScale(2);
        //creating the text
        this.add.text(210, 400, 'Click to Play', { fontSize: '24px', fill: '#000' });
        this.add.text(200, 130, 'Rain Maker!', { fontSize: '30px', fill: '#000' });


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